/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com', 'mooglestorage.blob.core.windows.net'],
    },
}

module.exports = nextConfig
