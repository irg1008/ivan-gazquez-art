const nextTranslate = require('next-translate')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
	nextTranslate({
		reactStrictMode: true,
		trailingSlash: true,
		images: {
			domains: ['images.unsplash.com'],
		},
	})
)
