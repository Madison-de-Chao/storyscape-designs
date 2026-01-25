import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Main site API configuration
const MAIN_SITE_API_URL = "https://yrdtgwoxxjksesynrjss.supabase.co/functions/v1/check-entitlement";
const PRODUCT_ID = "624d69da-8ae2-435d-bbd9-ee83e442066b";

interface EntitlementResponse {
  hasAccess: boolean;
  found: boolean;
  userId?: string;
  email?: string;
  productId?: string;
  entitlement?: {
    id: string;
    status: string;
    starts_at: string;
    ends_at: string;
  };
  error?: string;
  error_description?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const MAIN_SITE_API_KEY = Deno.env.get("MAIN_SITE_API_KEY");
    
    if (!MAIN_SITE_API_KEY) {
      console.error("MAIN_SITE_API_KEY not configured");
      return new Response(
        JSON.stringify({ 
          hasAccess: false, 
          error: "server_config_error",
          error_description: "API key not configured" 
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get email from request body or query params
    let email: string | null = null;
    
    if (req.method === "POST") {
      const body = await req.json();
      email = body.email;
    } else {
      const url = new URL(req.url);
      email = url.searchParams.get("email");
    }

    if (!email) {
      return new Response(
        JSON.stringify({ 
          hasAccess: false, 
          error: "missing_email",
          error_description: "Email is required" 
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          hasAccess: false, 
          error: "invalid_email",
          error_description: "Invalid email format" 
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Checking entitlement for email: ${email}`);

    // Call main site API
    const apiUrl = `${MAIN_SITE_API_URL}?product_id=${PRODUCT_ID}&email=${encodeURIComponent(email)}`;
    
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-api-key": MAIN_SITE_API_KEY,
        "Content-Type": "application/json",
      },
    });

    // Handle rate limiting
    if (response.status === 429) {
      const retryAfter = response.headers.get("Retry-After") || "60";
      return new Response(
        JSON.stringify({ 
          hasAccess: false, 
          error: "rate_limit_exceeded",
          error_description: `Too many requests. Please try again in ${retryAfter} seconds.`,
          retryAfter: parseInt(retryAfter)
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "Retry-After": retryAfter
          } 
        }
      );
    }

    // Handle not found
    if (response.status === 404) {
      return new Response(
        JSON.stringify({ 
          hasAccess: false, 
          found: false,
          error: "user_not_found",
          error_description: "No account found with this email" 
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Handle other errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Main site API error:", response.status, errorData);
      return new Response(
        JSON.stringify({ 
          hasAccess: false, 
          error: "api_error",
          error_description: "Failed to verify membership" 
        }),
        { status: response.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data: EntitlementResponse = await response.json();
    console.log(`Entitlement check result for ${email}:`, data.hasAccess);

    // Return the response with sanitized data
    return new Response(
      JSON.stringify({
        hasAccess: data.hasAccess,
        found: data.found,
        email: email,
        entitlement: data.entitlement ? {
          status: data.entitlement.status,
          expiresAt: data.entitlement.ends_at,
        } : null,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Error in check-entitlement function:", error);
    return new Response(
      JSON.stringify({ 
        hasAccess: false, 
        error: "internal_error",
        error_description: "An unexpected error occurred" 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
