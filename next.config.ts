import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://raw.githubusercontent.com/**")],
    },
    reactCompiler: true,
};

export default nextConfig;
