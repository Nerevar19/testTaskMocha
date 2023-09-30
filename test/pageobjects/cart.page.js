import { $ } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {

    

    get CheckoutButton() {
        return $('#checkout')
    }

    get CartItem() {
        return $('.cart_item')
    }


    
    async clickCheckoutButton() {
        await this.CheckoutButton.click();
    }



}

export default new CartPage();