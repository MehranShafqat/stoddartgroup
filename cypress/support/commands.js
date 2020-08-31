const data = require('../fixtures/'+Cypress.env('dataFile')+'')
import pageLogin from './PageObjects/pageLogin';
const login = new pageLogin();

Cypress.Commands.add("login", () => {
    
    cy.visit('/login')
    cy.get(login.textEmail).type(data.Credentials.ValidEmail).log('Enter Email')
    cy.get(login.textPassword).type(data.Credentials.ValidPassword)
    cy.get(login.buttonLogin).click()
    cy.get(login.dialogPopup).should('have.text',data.staticStrings.dialogTitle)
    cy.log(data.outputLogsLoginPage.loggedIn)
    
})