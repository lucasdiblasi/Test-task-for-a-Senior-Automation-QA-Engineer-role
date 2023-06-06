const { portalUI } = require('../../repo/portal/portalUI')


describe('Login Scnearios', () => {

    const portalScenario = portalUI

    it ('Should login with valid credentials', async () => {
        
        await portalScenario.openBrowser()
        await portalScenario.goHome()
        await portalScenario.inputUsername()
        await portalScenario.inputPasswd()
        await portalScenario.loginButton()

        await portalScenario.closeBrowser()
        
    });
    
    it ('Should display error message with invalid credentials', async () => {
         
        await portalScenario.openBrowser()
        await portalScenario.goHome()
        await portalScenario.inputInvalidUsername()
        await portalScenario.inputInvalidPasswd()
        await portalScenario.loginButton()
        
        await portalScenario.messageError();
        await portalScenario.closeBrowser()

    });
})
