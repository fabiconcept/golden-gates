/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "golden-gates.sirv.com",
                pathname: "/**",
                port: ""
            }
        ]
    }
};

export default nextConfig;
