/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  // Legacy /tech backlinks from other sites → home. Nested /tech/* routes are unchanged.
  async redirects() {
    return [
      {
        source: "/tech",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
