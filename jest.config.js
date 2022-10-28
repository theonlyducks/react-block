module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/&.{js,jsx}'],
    coverageDirectory: 'coverage',
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: "jsdom",
    testMatch: [
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
};
