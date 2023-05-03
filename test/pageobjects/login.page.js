

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('//input[@name="email"]');
    }

    get inputPassword () {
        return $('//input[@name="password"]');
    }

    get btnSubmit () {
        return $('//button[@data-qa="log-in"]');
    }

    get btnCreateAContract () {
        return $('//*[contains(text(),"Create A Contract")]');
    }

    get btnFixedRate () {
        return $('//*[contains(text(),"Fixed Rate")]');
    }

    get btnPayAsYouGo () {
        return $('//*[contains(text(),"Pay As You Go")]');
    }
    
    get inputHome(){
        return $('//*[contains(text(),"Home")]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await new Promise(resolve => setTimeout(resolve, 10000));
    }

    async CreateFixedRateContract (username, password) {
        await this.btnCreateAContract.click();
        await this.btnFixedRate.click();
    }

    async CreatePayAsYouGoContract (username, password) {
        await this.btnCreateAContract.click();
        await this.btnPayAsYouGo.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
