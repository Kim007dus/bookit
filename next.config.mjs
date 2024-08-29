/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_LOCAL_URI: 'mongodb://localhost:27017/bookit',
        DB_URI: "",
    },
};

export default nextConfig;
