/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	swcMinify: true,
	compiler: {
		emotion: true
	}
};

module.exports = nextConfig;