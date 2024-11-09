/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized : true,
        domains: ['raw.githubusercontent.com'],
    },
}
module.exports = nextConfig
