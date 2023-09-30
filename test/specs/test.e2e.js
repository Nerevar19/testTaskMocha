import { expect } from '@wdio/globals'
import { browser } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutStepOnePage from '../pageobjects/checkout_step_one.page.js'
import CheckoutStepTwoPage from '../pageobjects/checkout_step_two.page.js'
import CheckoutCompletePage from '../pageobjects/checkout_complete.page.js'



describe('My test site', () => {
    //1
    it('should login with valid credentials', async () => {
        
        await LoginPage.open()

        //await LoginPage.login('standard_user', 'secret_sauce')

        await LoginPage.setUsernameInput('standard_user');
        const usernameInput = await LoginPage.getUsernameInput();
        console.log('1.1: ' + usernameInput);

        await LoginPage.setPasswordInput('secret_sauce');
        const passwordInput = await LoginPage.getPasswordInput();
        console.log('1.2: ' + passwordInput);

        await LoginPage.clickLoginButton();
        const currentUrl = await browser.getUrl();
        console.log('1.3: ' + currentUrl);



        await browser.pause(3000)
        
    })
    //2
    it('should not login with invalid password', async () => {
        
        await LoginPage.open()

        await LoginPage.setUsernameInput('standard_user');
        const usernameInput = await LoginPage.getUsernameInput();
        console.log('2.1: ' + usernameInput);

        await LoginPage.setPasswordInput('qwertyasd');
        const passwordInput = await LoginPage.getPasswordInput();
        console.log('2.2: ' + passwordInput);

        await LoginPage.clickLoginButton();
        const currentUrl = await browser.getUrl();
        console.log('2.3: ' + currentUrl);

        
        

        await browser.pause(3000)
        
    })
    //3
    it('should not login with invalid username', async () => {
        
        await LoginPage.open()

        await LoginPage.setUsernameInput('standarD_user');
        const usernameInput = await LoginPage.getUsernameInput();
        console.log('3.1: ' + usernameInput);

        await LoginPage.setPasswordInput('secret_sauce');
        const passwordInput = await LoginPage.getPasswordInput();
        console.log('3.2: ' + passwordInput);

        await LoginPage.clickLoginButton();
        const currentUrl = await browser.getUrl();
        console.log('3.3: ' + currentUrl);

        await browser.pause(3000)
        
    })
    //4
    it('should logout when signed in', async () => {
         await LoginPage.open()

         await LoginPage.setUsernameInput('standard_user');
         
 
         await LoginPage.setPasswordInput('secret_sauce');
         
 
         await LoginPage.clickLoginButton();
         

         await InventoryPage.clickBurgerButton();

         console.log('4.1: menu is displayed: ' + await InventoryPage.bmMenu.isDisplayedInViewport());

         
        await browser.pause(1000);

        await InventoryPage.clickLogoutButton();

        let currentUrl = await browser.getUrl();
        console.log('4.2: ' + currentUrl + '; username text: ' + await LoginPage.getUsernameInput() +  ' ; password text: ' + await LoginPage.getPasswordInput());

        await browser.pause(2000);
       
    })
    // 5
    it('should save the cart after logout', async () => {
        
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')

        await browser.pause(1000)

        await InventoryPage.clickSauceLabsBackpackAddToCartButton();

        console.log('5.1: ' + await InventoryPage.shoppingCartBadge.getText());

        await browser.pause(1000)

        await InventoryPage.clickBurgerButton();
        
        console.log('5.2: bm is diplayed: ' + await InventoryPage.bmMenu.isDisplayedInViewport());
        await browser.pause(1000);

        await InventoryPage.clickLogoutButton();

        let currentUrl = await browser.getUrl();
        
        console.log('5.3: ' + currentUrl + '; username text: ' + await LoginPage.getUsernameInput() +  ' ; password text: ' + await LoginPage.getPasswordInput());
        

        await browser.pause(2000);

        await LoginPage.login('standard_user', 'secret_sauce');

        currentUrl = await browser.getUrl();
        console.log('5.4: ' + currentUrl + ' ; shopping_cart_badge: ' + await InventoryPage.shoppingCartBadge.getText());

        await browser.pause(1000)

        await InventoryPage.clickshoppingCartButton();
        currentUrl = await browser.getUrl();
        console.log('5.5: ' + currentUrl);



        await browser.pause(3000)
        
    })

    //6
    it('should sort items', async () => {
        
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(1000)

        await InventoryPage.clickSortingSelectionButton()
        await InventoryPage.chooseAToZSortingOption();

        let activeOption = await InventoryPage.activeSortingOption.getText();
        console.log('6.1.1: ' + activeOption);

        await browser.pause(1000)

        await InventoryPage.clickSortingSelectionButton()
        await InventoryPage.chooseZToASortingOption();

        activeOption = await InventoryPage.activeSortingOption.getText();
        console.log('6.1.2: ' + activeOption);

        await browser.pause(1000)

        await InventoryPage.clickSortingSelectionButton()
        await InventoryPage.chooseHighToLowSortingOption();

        activeOption = await InventoryPage.activeSortingOption.getText();
        console.log('6.1.3: ' + activeOption);

        await browser.pause(1000)

        await InventoryPage.clickSortingSelectionButton()
        await InventoryPage.chooseLowToHighSortingOption();

        activeOption = await InventoryPage.activeSortingOption.getText();
        console.log('6.1.4: ' + activeOption);

        await browser.pause(1000)
        
    })
    //7
    it('should link to the socials via footer links', async () => {
        
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(3000)

        await InventoryPage.scrollIntoFooterFacebookLink()

        await InventoryPage.clickFooterLinkedInLink()
        await InventoryPage.clickFooterFacebookLink()
        await InventoryPage.clickFooterTwitterLink()

        await browser.pause(2000)

        

        await browser.switchWindow('https://twitter.com/saucelabs')
        let currentUrl = await browser.getUrl();
        console.log('7.1: currentUrl: ' + currentUrl);

        await browser.pause(2000)

        await browser.switchWindow('https://www.facebook.com/saucelabs')
        currentUrl = await browser.getUrl();
        console.log('7.2: currentUrl: ' + currentUrl);

        await browser.switchWindow('https://www.linkedin.com/company/sauce-labs/')
        currentUrl = await browser.getUrl();
        console.log('7.3: currentUrl: ' + currentUrl);

        await browser.pause(2000)

        
    })

    //8
    it('should checkout in a valid way', async () => {
        
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(3000)

        await InventoryPage.clickSauceLabsBikeLightAddToCartButton();

        console.log('8.1: shopping_cart_badge: ' + await InventoryPage.shoppingCartBadge.getText());

        await browser.pause(2000)

        await InventoryPage.clickshoppingCartButton();

        let currentUrl = await browser.getUrl();
        console.log('8.2: currentUrl: ' + currentUrl);
        await browser.pause(2000)

        await CartPage.clickCheckoutButton();
        currentUrl = await browser.getUrl();
        console.log('8.3: currentUrl: ' + currentUrl);

        await browser.pause(2000)

        await CheckoutStepOnePage.setFirstNameInput('qwe');
        console.log('8.4: first_name: ' + await CheckoutStepOnePage.FirstNameInput.getValue());

        await CheckoutStepOnePage.setLastNameInput('qwert');
        console.log('8.5: last_name: ' + await CheckoutStepOnePage.LastNameInput.getValue());

        await CheckoutStepOnePage.setPostalCodeInput('02100');
        console.log('8.6: postal_code: ' + await CheckoutStepOnePage.PostalCodeInput.getValue());

        await browser.pause(2000)

        await CheckoutStepOnePage.clickContinueButton();
        currentUrl = await browser.getUrl();
        console.log('8.7: currentUrl: ' + currentUrl + ' ; inventory_item_name = ' + await CheckoutStepTwoPage.InventoryItemName.getText());

        await browser.pause(2000)

        await CheckoutStepTwoPage.clickFinishButton();
        currentUrl = await browser.getUrl();
        console.log('8.8: currentUrl: ' + currentUrl);

        await browser.pause(2000)

        await CheckoutCompletePage.clickBackToProductsButton();
        currentUrl = await browser.getUrl();
        console.log('8.9: currentUrl: ' + currentUrl + '; shopping_cart_badge is displayed: ' + await InventoryPage.shoppingCartBadge.isDisplayedInViewport());

        await browser.pause(2000)
   
    })
    // 9 
    it('should not checkout without products in the cart', async () => {
        
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(3000)

        await InventoryPage.clickshoppingCartButton();
        let currentUrl = await browser.getUrl();
        console.log('9.1: currentUrl: ' + currentUrl);

        await browser.pause(2000)

        await CartPage.clickCheckoutButton();

        currentUrl = await browser.getUrl();
        console.log('9.2: currentUrl: ' + currentUrl); 
        await browser.pause(2000)
    })

})

