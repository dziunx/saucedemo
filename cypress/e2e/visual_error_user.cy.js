import homePage from '../pages/homePage'
import checkoutPage from '../pages/checkoutPage'


describe('Visual error user ', () => {

    it('buting proccess', () => {
        cy.login('visual_user', 'secret_sauce')
        homePage.elements.titleSpan().should('have.text', 'Products');
        homePage.addToCart()
        homePage.elements.CartBadge().should('have.text', '1');
        homePage.goToCart();
        checkoutPage.elements.ItemInCart().should('have.text', '1');
        checkoutPage.elements.checkoutBtn().should('have.css', 'position', 'static')
        checkoutPage.goToCheckout();
        checkoutPage.typeFirstName('Alan');
        checkoutPage.typeLastName('Test');
        checkoutPage.typeZipCode('12345');
        checkoutPage.continueCheckout();
        checkoutPage.finishOrder();
        checkoutPage.elements.completeHeader().should('have.text', 'Thank you for your order!');
        checkoutPage.backHome();
        homePage.elements.titleSpan().should('have.text', 'Products');

    });
})
