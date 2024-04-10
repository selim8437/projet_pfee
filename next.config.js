/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images:{
        remotePatterns:[
            {
                hostname:'utfs.io'
            }
        ]
    }
};

module.exports = nextConfig;
