/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.pixabay.com", "i.pinimg.com","res.cloudinary.com"],
  },
};

module.exports = nextConfig;
