import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutComplete extends Page {

    

    get BackToProductsButton() {
        return $('#back-to-products')
    }

    
    
    async clickBackToProductsButton() {
        await this.BackToProductsButton.click();
    }



}

export default new CheckoutComplete();