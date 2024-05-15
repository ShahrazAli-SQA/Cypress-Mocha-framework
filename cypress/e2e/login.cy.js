import { testData } from "../testData/testData";
import { loginPage } from "../pageObject/loginPage";
import { method } from "../methods/commonMethods";
describe('Login Module Test Cases', () => {
    it.only('Verify user can create account', () => {
        cy.get(loginPage.loginRegisterBtn).click();
        cy.title().should('eq', testData.accountLogin);
        cy.get(loginPage.regisRadioBtn).click()
            .should('have.attr', "checked", "checked");
        cy.xpath(loginPage.continueBtn).click();
        method.typePersonalDetails();
        method.typeAddressDetails();
        method.typePassword();
        cy.get(loginPage.agrementCheckbox).click();
        cy.xpath(loginPage.continueBtn).click();
        cy.get(loginPage.maintext).should('contain.text', testData.accountCreated);
    });

    it('Verify user is unable to login with empty credentials', () => {
        cy.get(loginPage.loginRegisterBtn).click();
        cy.title().should('eq', testData.accountLogin);
        cy.get(loginPage.loginBtn).click();
        cy.xpath(loginPage.errorAlert)
            .should('be.visible')
            .and('contain.text', testData.LoginError);
    });

    it('Verify user is unable to login with invalid credentials', () => {
        cy.get(loginPage.loginRegisterBtn).click();
        cy.title().should('eq', testData.accountLogin);
        cy.get(loginPage.usernameInput).type(testData.invalidUsername);
        cy.get(loginPage.passwordInput).type(testData.invalidPassword);
        cy.get(loginPage.loginBtn).should('be.enabled').click();
        cy.xpath(loginPage.errorAlert)
            .should('be.visible')
            .and('contain.text', testData.LoginError);
    });

    it('Verify user is unable to login with only username', () => {
        cy.get(loginPage.loginRegisterBtn).click();
        cy.title().should('eq', testData.accountLogin);
        cy.get(loginPage.usernameInput).type(testData.invalidUsername);
        cy.get(loginPage.loginBtn).should('be.enabled').click();
        cy.xpath(loginPage.errorAlert)
            .should('be.visible')
            .and('contain.text', testData.LoginError);
    });

    it('Verify user is unable to login with only password', () => {
        cy.get(loginPage.loginRegisterBtn).click();
        cy.title().should('eq', testData.accountLogin);
        cy.get(loginPage.passwordInput).type(testData.invalidPassword);
        cy.get(loginPage.loginBtn).should('be.enabled').click();
        cy.xpath(loginPage.errorAlert)
            .should('be.visible')
            .and('contain.text', testData.LoginError);
    });

    it('Verify user can login with valid credentials', () => {
        cy.get(loginPage.loginRegisterBtn).click();
        cy.title().should('eq', testData.accountLogin);
        cy.get(loginPage.usernameInput).type(Cypress.env("username"));
        cy.get(loginPage.passwordInput).type(Cypress.env("password"));
        cy.get(loginPage.loginBtn).should('be.enabled').click();
        cy.title().should('eq', testData.myAccount);
    });
});
