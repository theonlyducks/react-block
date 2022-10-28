module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/&.{js,jsx}'],
    coverageDirectory: '__coverage__',
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: "jsdom",
    testMatch: [
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
};
