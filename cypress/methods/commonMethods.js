import { loginPage } from "../pageObject/loginPage";
import { testData } from "../testData/testData";
import { faker } from '@faker-js/faker';

class methods{
    login() {
        cy.get(loginPage.loginRegisterBtn).click();
        cy.title().should('eq', testData.accountLogin);
        cy.get(loginPage.usernameInput).type(Cypress.env("username"));
        cy.get(loginPage.passwordInput).type(Cypress.env("password"));
        cy.get(loginPage.loginBtn).should('be.enabled').click();
        cy.title().should('eq', testData.myAccount);
    }

    typePersonalDetails() {
        cy.get(loginPage.regisFormInputs).filter('[name="firstname"]').type(faker.person.firstName());
        cy.get(loginPage.regisFormInputs).filter('[name="lastname"]').type(faker.person.lastName())
        cy.get(loginPage.regisFormInputs).filter('[name="email"]').type(faker.internet.email())
    }

    typeAddressDetails() {
        cy.get(loginPage.regisFormInputs).filter('[name="address_1"]').type(faker.location.streetAddress());
        cy.get(loginPage.regisFormInputs).filter('[name="city"]').type("Lahore");
        cy.get(loginPage.countryDropdown).select('Pakistan')
        cy.get(loginPage.regionDeopdonw).select('Sindh')
        cy.get(loginPage.regisFormInputs).filter('[name="postcode"]').type(faker.location.zipCode());
    }

    typePassword() {
        cy.get(loginPage.regisFormInputs).filter('[name="loginname"]').type(faker.person.firstName()+faker.number.int());
        cy.get(loginPage.regisFormInputs).filter('[name="password"]').type("Password123*");
        cy.get(loginPage.regisFormInputs).filter('[name="confirm"]').type("Password123*");
    }
}

export const method = new methods();