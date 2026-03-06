-- Create a public storage bucket for landing page videos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'landing-videos',
  'landing-videos',
  true,
  1073741824,
  ARRAY['video/mp4', 'video/webm', 'video/quicktime']
);

-- Allow anyone to read (public bucket)
CREATE POLICY "Public read access for landing videos"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'landing-videos');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated upload for landing videos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'landing-videos');

-- Allow authenticated users to delete their uploads
CREATE POLICY "Authenticated delete for landing videos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'landing-videos');