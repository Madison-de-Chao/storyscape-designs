import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { prompt, duration } = await req.json();
    // Try both possible secret names from connector
    const ELEVENLABS_API_KEY = Deno.env.get("ELEVENLABS_API_KEY_1") || Deno.env.get("ELEVENLABS_API_KEY");

    if (!ELEVENLABS_API_KEY) {
      throw new Error("ELEVENLABS_API_KEY is not configured");
    }

    if (!prompt) {
      throw new Error("Prompt is required");
    }

    const requestedDuration = duration || 30;
    console.log(`Generating music: "${prompt}" (duration: ${requestedDuration}s)`);

    // Use AbortController with extended timeout for music generation
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minute timeout

    try {
      const response = await fetch(
        "https://api.elevenlabs.io/v1/music",
        {
          method: "POST",
          headers: {
            "xi-api-key": ELEVENLABS_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt,
            duration_seconds: requestedDuration,
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("ElevenLabs Music API error:", response.status, errorText);
        throw new Error(`ElevenLabs Music API error: ${response.status} - ${errorText}`);
      }

      // Stream the response directly to avoid buffering timeout
      const audioData = await response.arrayBuffer();
      console.log(`Generated music: ${audioData.byteLength} bytes`);

      return new Response(audioData, {
        headers: {
          ...corsHeaders,
          "Content-Type": "audio/mpeg",
          "Cache-Control": "public, max-age=3600",
        },
      });
    } catch (fetchError: unknown) {
      clearTimeout(timeoutId);
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        throw new Error("Music generation timed out. Please try again.");
      }
      throw fetchError;
    }
  } catch (error) {
    console.error("Music generation error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
