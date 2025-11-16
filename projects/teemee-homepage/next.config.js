const nextConfig = {
  // Enable static export for hosting as a static site
  output: 'export',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Trailing slashes for static export compatibility
  trailingSlash: true,
  
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://teemee.one',
  },
};

module.exports = nextConfig;
