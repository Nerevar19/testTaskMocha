import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutPageStepTwo extends Page {

    

    get FinishButton() {
        return $('#finish')
    }

    get InventoryItemName() {
        return $('.inventory_item_name')
    }

    
    
    async clickFinishButton() {
        await this.FinishButton.click();
    }



}

export default new CheckoutPageStepTwo();