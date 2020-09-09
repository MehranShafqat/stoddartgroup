const data = require('../../fixtures/'+Cypress.env('dataFile')+'')
import pageHome from '../../support/PageObjects/pageHome';
import pageNepRegister from '../../support/PageObjects/pageNepRegister';
const objHome = new pageHome()
const objNepRegister = new pageNepRegister()

 

 describe ('Test Search text Filtes on Registe page', function ()
 {
    it('Search with Reference No and Verify ', function()
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
        cy.get(objNepRegister.txtRegister).type(""+data.inputData.referenceNo+"{enter}")
        cy.xpath(objNepRegister.tdRefNo).should('be.visible').log("Reference No column result should visible")
        cy.xpath(objNepRegister.tdRefNo).invoke('text').then((text) => {
            expect(text).to.equal(data.inputData.referenceNo)
        })
    })
    it('Search with Qoute and Verify ', function()
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
        cy.get(objNepRegister.txtQoute).should('be.visible').log("Search by Qoute should visible")
        cy.get(objNepRegister.txtQoute).type(""+data.inputData.qouteNo+"{enter}")
        cy.xpath(objNepRegister.tdStatusNo).scrollIntoView()
        cy.xpath(objNepRegister.tdStatusNo).should('be.visible').log("Status column result should visible")
        cy.xpath(objNepRegister.tdStatusNo).invoke('text').then((text) => {
            expect(text).to.include(data.inputData.qouteNo)
        })

        
    })
    it('Search with Job and Verify ', function()
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
        cy.get(objNepRegister.txtJob).should('be.visible').log("Search by Job should visible")
        cy.get(objNepRegister.txtJob).type(""+data.inputData.jobNo+"{enter}")
        cy.xpath(objNepRegister.tdStatusNo).scrollIntoView()
        cy.xpath(objNepRegister.tdStatusNo).should('be.visible').log("Status column result should visible")
        cy.xpath(objNepRegister.tdStatusNo).invoke('text').then((text) => {
            expect(text).to.include(data.inputData.jobNo)
        })

        
    })
    it('Search with Site Name and Verify ', function()
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
        cy.get(objNepRegister.txtStreet).should('be.visible').log("Search by Site  should visible")
        cy.get(objNepRegister.txtStreet).type(""+data.inputData.siteName+"{enter}")
        cy.xpath(objNepRegister.tdSiteName).should('be.visible').log("Site column result should visible")
        cy.xpath(objNepRegister.tdSiteName).invoke('text').then((text) => {
            expect(text).to.include(data.inputData.siteName)
        })

        
    })
 })
