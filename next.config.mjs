/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "tailwindui.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "flowbite.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
