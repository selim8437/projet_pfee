/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images:{
        domains: ['img.icons8.com'],
        remotePatterns:[
            {
                hostname:'utfs.io'
            }
        ]
    }
};

module.exports = nextConfig;
