const { Browser, BrowserContext, chromium, Page } = require ('@playwright/test')
const json  = require('../../config/env.json')
const url = require('../../config/urls.json').portal

const data = json

const portalUI = {
    browser: Browser,
    context: BrowserContext,
    page: Page,
    homeURL: url,

    async openBrowser() {
        this.browser = await chromium.launch({
            args: ["--start-fullscreen"],
            headless: false
        }) 
        this.context = await this.browser.newContext({
            viewport: null
        })
        this.page = await this.browser.newPage()
    },
    async goHome() {
        await this.page.goto(this.homeURL)
    },
    async inputUsername() {
        await this.page.fill('#user-name', data.validUser)
    },
    async inputPasswd() {
        await this.page.fill('#password', data.validPasswd);
    },
    async inputInvalidUsername() {
        await this.page.fill('#user-name', data.invalidUser)
    },
    async inputInvalidPasswd() {
        await this.page.fill('#password', data.invalidPasswd);
    },
    async loginButton() {
        await this.page.click('#login-button')
        await this.page.waitForLoadState()
    },
    async messageError() {
        await this.page.evaluate(() => {
            const element = document.querySelector('.error-message-container.error');
            if (element) {
              element.classList.add('new-class'); // Adiciona a nova classe ao elemento
            }
          });
    },
    async sortNameAtoZ() {
        await this.page.waitForSelector('.product_sort_container');
        const value = await this.page.$eval('.product_sort_container', element => element.value);
        if (value === 'az') {
          const productNames = await this.page.$$eval('.inventory_item_name', elements => elements.map(el => el.textContent));
          console.log('Nomes dos produtos:', productNames);
        } else {
          console.log('O valor do seletor não é "az"');
        }
    },
    async sortNameZtoA() {
        await this.page.waitForSelector('.product_sort_container');
        const value = await this.page.$eval('.product_sort_container', element => element.value);
        if (value === 'za') {
          const productNames = await this.page.$$eval('.inventory_item_name', elements => elements.map(el => el.textContent));
          console.log('Nomes dos produtos:', productNames);
        } else {
          console.log('O valor do seletor não é "za"');
        }
    },      

    async selectZtoAOption() {
        await this.page.waitForSelector('.product_sort_container');
        await this.page.click('.product_sort_container');
        await this.page.selectOption('.product_sort_container', 'za');
    },
    async closeBrowser() {
        await this.browser.close();
    }
}
module.exports = {
    portalUI
}