/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
      },
    ],
    domains: ["example.com", "anotherdomain.com"],
  },
};

export default nextConfig;
