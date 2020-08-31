const data = require('../../fixtures/'+Cypress.env('dataFile')+'')
import pageHome from '../../support/PageObjects/pageHome';
const objHome = new pageHome()

 

 describe ('Login TestCases for STODDARTGROUP', function ()
 {
    it('Login TC with correct Email and Password', function()
    {
        cy.login()
    })
    it.only('Assert Table display on NEP', function()
    {
        cy.login()
        cy.server()
        cy.route("GET", '' +Cypress.config().baseUrl+ '/notifications/new').as('xhrNotification')
        cy.get(objHome.ullistCladding).click().log("click on Cladding")
        cy.get(objHome.nepDd).should('be.visible')
        cy.wait('@xhrNotification').its('status').should('be', 200)
        cy.get(objHome.nepDd).click().log("click on NDP")
        cy.get(objHome.register).click().log("click on Quote and order register")
        cy.get(objHome.tableView).should('be.visible').log("table should visible")
        
    })
 })