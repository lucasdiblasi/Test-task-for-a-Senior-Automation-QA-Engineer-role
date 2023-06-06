module.exports = {
  launchOptions: {
    headless: false
  },
  browser: ["chromium"],
  exitOnPageError: false,
  devices: [],
  reporter: "jest-allure"
}