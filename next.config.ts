import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://raw.githubusercontent.com/**")],
    },
    reactCompiler: true,
    async redirects() {
        return [
            {
                source: "/index",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
