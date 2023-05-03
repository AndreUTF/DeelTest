const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const ContractPage = require('../pageobjects/contract.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('andre.portes17@gmail.com', '2j3ww9tz@Az')
        await ContractPage.CreateFixedRateContract('Test name' ,'United States', 'Colorado' , 'test text')
    })
})


