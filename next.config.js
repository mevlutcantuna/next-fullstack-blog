/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com", "i.pinimg.com"],
  },
};

module.exports = nextConfig;
