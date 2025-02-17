import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization!.splitChunks = {
        cacheGroups: {
          default: false,
        },
      };
    }

    // ✅ Fix JSX Runtime Resolution for `react-dnd`
    config.resolve.alias = {
      ...config.resolve.alias,
      "react/jsx-runtime.js": require.resolve("react/jsx-runtime"),
    };

    return config;
  },
};

export default nextConfig;