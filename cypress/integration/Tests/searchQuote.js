const data = require('../../fixtures/'+Cypress.env('dataFile')+'')
import pageHome from '../../support/PageObjects/pageHome';
import pageNepRegister from '../../support/PageObjects/pageNepRegister';
const objHome = new pageHome()
const objNepRegister = new pageNepRegister()

 

 describe ('Test quote and order Registe page', function ()
 {
    it('Assert All Search fields should available quote and order Registe page', function()
    {
        cy.login()
        cy.server()
        cy.route("GET", '' +Cypress.config().baseUrl+ '/notifications/new').as('xhrNotification')
        cy.get(objHome.ullistCladding).click().log("click on Cladding")
        cy.get(objHome.nepDd).should('be.visible')
        cy.wait('@xhrNotification').its('status').should('eq', 200)
        cy.get(objHome.nepDd).click().log("click on NDP")
        cy.get(objHome.register).click().log("click on Quote and order register")
        cy.get(objHome.customerColumn).should('be.visible').log("Customer columm should visible")
        cy.get(objNepRegister.txtRegister).should('be.visible').log("Search by Reference No should visible")
        cy.get(objNepRegister.txtQoute).should('be.visible').log("Search by Qout should visible")
        cy.get(objNepRegister.txtJob).should('be.visible').log("Search by Job should visible")
        cy.get(objNepRegister.txtCustomer).should('be.visible').log("Search by Customer Name should visible")
        cy.get(objNepRegister.txtStreet).should('be.visible').log("Search by  Street should visible")
        cy.get(objNepRegister.txtSuburb).should('be.visible').log("Search by Suburb should visible")
        cy.get(objNepRegister.txtEstimator).should('be.visible').log("Search by Estimator should visible")

        
    })
 })