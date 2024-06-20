/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'www.parliament.go.ke',
            },
        ],
    },
};

export default nextConfig;
