/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
