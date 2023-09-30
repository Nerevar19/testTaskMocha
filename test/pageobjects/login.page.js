import { $ } from '@wdio/globals'
import { browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get usernameInput () {
        return $('#user-name');
    }

    get passwordInput () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.setUsernameInput(username);
        await this.setPasswordInput(password);
        await this.clickLoginButton();
    }

     async setUsernameInput(value) {
       await this.usernameInput.addValue(value);
    }

    async setPasswordInput(value) {
     await this.passwordInput.addValue(value);
    }

    async getUsernameInput() {
      return await this.usernameInput.getValue();
       }

    async getPasswordInput() {
       return await this.passwordInput.getValue();
       }

    async clickLoginButton() {
      await this.loginButton.click();
    }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return browser.url('https://www.saucedemo.com');
    }
}

export default new LoginPage();
