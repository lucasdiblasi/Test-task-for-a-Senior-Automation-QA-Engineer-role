module.exports = {
    verbose: true,
    preset: 'jest-playwright-preset',
    testMatch: [
      "**/__tests__/**/*,+(js)", "**/?(*.)+(spec|test).+(js)"
    ],
    testRunner: "jest-jasmine2",
    testTimeout: 20000,
    setupFilesAfterEnv: ["jest-allure/dist/setup"],
    reporters: ['default', 'jest-allure'],
};