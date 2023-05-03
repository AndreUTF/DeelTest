const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContractPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnCreateAContract () {
        return $('//*[contains(text(),"Create A Contract")]');
    }

    get btnFixedRate () {
        return $('//*[contains(text(),"Fixed Rate")]');
    }

    get btnPayAsYouGo () {
        return $('//*[contains(text(),"Pay As You Go")]');
    }

    get inputContractorsName() {
        return $('//input[@placeholder="Untitled contract"]');
    }

    get inputContractorsTaxResidenceBox() {
        return $('//*[contains(text(),"tax residence")]/..');
    }

    get inputContractorsTaxResidence() {
        return $('//*[@id=":r1a:"]');
    }

    get inputContractorsTaxCountry(){
        return $('//*[contains(text(),"United States")]');
        
    }

    get inputContractorsTaxStateBox() {
        return $('//*[contains(text(),"Choose a state")]/..');
    }

    get inputContractorsTaxState(){
        return $('//*[contains(text(),"Colorado")]');
    }
    
    get inputSeniorityLevel(){
        return $('//*[contains(text(),"Seniority level")]')
    }

    get inputNotApplicableLevel(){
        return $('//*[contains(text(),"Not applicable")]')
    }

    get inputScopeOfWork(){
        return $('//*[contains(text(),"Scope of work")]')
    }

    get inputScopeOfWorkArea(){
        return $('//*[@name="scope"]')
    }

    get inputCalendar(){
        return $('//*[@name="effectiveDate"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async CreateFixedRateContract (contractorsName,countryName, stateName,scopetext) {
        await this.btnCreateAContract.click();
        await this.btnFixedRate.click();
        await this.inputContractorsName.setValue(contractorsName);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.inputContractorsTaxResidenceBox.click();
        await this.inputContractorsTaxCountry.click();
        await this.inputContractorsTaxResidence.setValue(countryName);
        await new Promise(resolve => setTimeout(resolve, 2000));
        await this.inputContractorsTaxCountry.click();
        await this.inputContractorsTaxState.click();
        await this.inputSeniorityLevel.click();
        await this.inputNotApplicableLevel.click();
        await this.inputScopeOfWork.click();
        await this.inputScopeOfWorkArea.setValue(scopetext);
        await this.inputCalendar.click();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        day -= 1;
        let yesterday = `${day}-${month}-${year}`
        await this.inputCalendar.setValue(yesterday);
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

module.exports = new ContractPage();
