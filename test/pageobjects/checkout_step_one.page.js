import { $ } from '@wdio/globals'
import Page from './page.js';

class CheckoutPageStepOne extends Page {

    get FirstNameInput() {
        return $('#first-name')
    }

    get LastNameInput() {
        return $('#last-name')
    }

    get PostalCodeInput() {
        return $('#postal-code')
    }

    get ContinueButton() {
        return $('#continue')
    }

    async setFirstNameInput(value) {
        await this.FirstNameInput.addValue(value);
    }

    async setLastNameInput(value) {
        await this.LastNameInput.addValue(value);
    }

    async setPostalCodeInput(value) {
        await this.PostalCodeInput.addValue(value);
    }
    async clickContinueButton() {
        await this.ContinueButton.click();
    }



}

export default new CheckoutPageStepOne();