const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './',
})

const customJestConfig = {
	moduleDirectories: ['node_modules', 'src/'],
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: ['src/e2e'],
}

module.exports = createJestConfig(customJestConfig)
