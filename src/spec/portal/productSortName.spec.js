const { portalUI } = require('../../repo/portal/portalUI')


describe('Check values sort name', () => {

    const portalScenario = portalUI

    it ('Make sure the classification name is from A to Z', async () => {
        
        await portalScenario.openBrowser()
        await portalScenario.goHome()
        await portalScenario.inputUsername()
        await portalScenario.inputPasswd()
        await portalScenario.loginButton()
        await portalScenario.sortNameAtoZ()
        await portalScenario.closeBrowser()
        
    });

    it ('Change the sort to Z to A and make sure the sort name is Z to A and the products are correct in the listing.', async () => {
        
        await portalScenario.openBrowser()
        await portalScenario.goHome()
        await portalScenario.inputUsername()
        await portalScenario.inputPasswd()
        await portalScenario.loginButton()
        await portalScenario.selectZtoAOption()
        await portalScenario.sortNameZtoA()
        await portalScenario.closeBrowser()
        
    });
})
