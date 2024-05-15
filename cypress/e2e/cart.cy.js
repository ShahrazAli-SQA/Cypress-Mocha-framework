import { method } from "../methods/commonMethods";
import { cartPage } from "../pageObject/cartPage";
import { testData } from "../testData/testData";


describe('Cart Module Test Cases', () => {
    /*
    it('Verify user is able to add product in cart', () => {
        cy.get(cartPage.productContainer).first().click();
        cy.get(cartPage.addToCartBtn).click();
        cy.get(cartPage.cartMenu).click();
        cy.title().should('eq', testData.cart);
        cy.get(cartPage.productList).should('have.length', 2);
    });

    it('Verify user is able to remove product from cart', () => {
        cy.get(cartPage.productContainer).first().click();
        cy.get(cartPage.addToCartBtn).click();
        cy.get(cartPage.cartMenu).click();
        cy.title().should('eq', testData.cart);
        cy.get(cartPage.productList).should('have.length', 2);
        cy.xpath(cartPage.deleteIcon).first().click();
        cy.get(cartPage.emptyCart).should('contain.text', testData.emptyCart);
    });

    it('Verify user can get logged in and then checkout', () => {
        method.login();
        cy.get(cartPage.storeLogo).click();
        cy.get(cartPage.productContainer).first().click();
        cy.get(cartPage.addToCartBtn).click();
        cy.get(cartPage.cartMenu).click();
        cy.title().should('eq', testData.cart);
        cy.get(cartPage.productList).should('have.length', 2);
        cy.get(cartPage.checkoutBtn).click();
        cy.title().should('eq', testData.checkoutInfo);
        cy.get(cartPage.confirmOrderBtn).click();
        cy.get(cartPage.maintext).should('contain.text', testData.orderConfirm);
    });*/

    it("testing", () => {
        cy.visit('https://billing.zoho.com/subscribe/7ae03df46cfe48144860f3c858e13b882d1433f07e0c1f74ad482bf477cf719e/free')
        cy.wait(20000);

        cy.iframe('[title="Secure card number input frame"]').within(() => {
            cy.get('input[name="cardnumber"]').type('4570790113714453');
        });

        cy.wait(1000)


        cy.iframe('[title="Secure expiration date input frame"]').within(() => {
            cy.get('[placeholder="MM / YY"]').type('0130');
        });

        cy.wait(1000)

        cy.iframe('[title="Secure CVC input frame"]').within(() => {
            cy.get('[placeholder="CVV"]').type('123');
        });

        // cy.get('iframe[title="Secure card number input frame"]').within(() => {
        //     cy.get('input').type('123456789');
        //   });
      
        //   // Switch to the iframe for card expiry using title
        //   cy.get('iframe[title="Secure expiration date input frame"]').within(() => {
        //     cy.get('input').type('01/30');
        //   });
      
        //   // Switch to the iframe for CVV number using title
        //   cy.get('iframe[title="Secure CVC input frame"]').within(() => {
        //     cy.get('input').type('008');
        //   });
        // cy.get('#stripe-ccn').should('exist').then(($iframe)=>{
        //     cy.wrap($iframe).find('input').type('12345678',{ force: true });
        // })

    // Switch to the second iframe for card expiry
    // cy.iframe('#stripe-exp').should('exist').find('input').type('MM/YY');

    // // Switch to the third iframe for CVV number
    // cy.iframe('#stripe-cvc').should('exist').find('input').type('YourCVV');

    // // Input Card Expiry
    // cy.get('#stripe-exp').type('1223', { force: true });

    // // Input CVV
    // cy.get('#stripe-cvc').type('123', { force: true });
        
        // cy.findStripeIframe()
        //     .then(() => {
        //         cy.log('**Simulated:** Entered card number "12345678"');
        //     });
        // cy.get('iframe[src^="https://js.stripe.com/v3/elements-inner"]') // Adjusted selector example
        //     .iframe().first()
        //     .then(() => {
        // });

        // cy.get('[title="Secure card number input frame"]') // Replace with your iframe selector
        //     .iframe()
        //     .then(() => {
        //         cy.get('input[name="cardnumber"]') // Replace with your input selector
        //             .type('12345678');
        //     });
        

        // cy.get('iframe[src*="js.stripe.com"][class*="your-iframe-class"]').then(($iframe) => {
        //     cy.wrap($iframe).iframe().within(() => {
        //       cy.get('input[name="cardexpiry"]').type('01/30'); // Replace with the actual name or selector
        //     });
        //   });

    })


});
