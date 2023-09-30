import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get burgerButton() {
        return $('#react-burger-menu-btn')
    }

    get bmMenu() {
        return $('.bm-menu')
    }

    get shoppingCartBadge() {
        return $('.shopping_cart_badge')
    }

    get logoutButton() {
        return $('#logout_sidebar_link')
    }
    
    get sauceLabsBackpackAddToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get sauceLabsBikeLightAddToCartButton() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get shoppingCartButton() {
        return $('.shopping_cart_link')
    }

    get sortingSelectionButton() {
        return $('.product_sort_container')
    }

    get activeSortingOption() {
        return $('.active_option');
    }

    get aToZSortingOption() {
        return $('.product_sort_container [value="az"]')
    }
    get zToASortingOption() {
        return $('.product_sort_container [value="za"]')
    }
    get highToLowSortingOption() {
        return $('.product_sort_container [value="hilo"]')
    }
    get lowToHighSortingOption() {
        return $('.product_sort_container [value="lohi"]')
    }

    get footerLinkedInLink() {
        return $('footer [href ="https://www.linkedin.com/company/sauce-labs/"]')
    }

    get footerTwitterLink() {
        return $('footer [href ="https://twitter.com/saucelabs"]')
    }

    get footerFacebookLink() {
        return $('footer [href ="https://www.facebook.com/saucelabs"]')
    }

    async clickFooterLinkedInLink() {
        await this.footerLinkedInLink.click()
     }

     async clickFooterTwitterLink() {
        await this.footerTwitterLink.click()
     }

     async clickFooterFacebookLink() {
        await this.footerFacebookLink.click()
     }

     async scrollIntoFooterFacebookLink() {
        await this.footerFacebookLink.scrollIntoView()
     }

    async clickSortingSelectionButton() {
       await this.sortingSelectionButton.click()
    }

    async chooseAToZSortingOption() {
        await this.aToZSortingOption.click()
    }

    async chooseZToASortingOption() {
        await this.zToASortingOption.click()
    }

    async chooseHighToLowSortingOption() {
        await this.highToLowSortingOption.click()
    }

    async chooseLowToHighSortingOption() {
        await this.lowToHighSortingOption.click()
    }

    async clickSauceLabsBackpackAddToCartButton() {
       await this.sauceLabsBackpackAddToCartButton.click();
    }

    async clickSauceLabsBikeLightAddToCartButton() {
        await this.sauceLabsBikeLightAddToCartButton.click();
     }

    async clickshoppingCartButton() {
      await this.shoppingCartButton.click();
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }

    async clickBurgerButton() {
        await this.burgerButton.click();
    }
    
}

export default new InventoryPage();
