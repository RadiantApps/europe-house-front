/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "178.128.205.154",
        port: "5000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
