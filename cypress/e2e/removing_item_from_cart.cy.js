import homePage from '../pages/homePage'
import checkoutPage from '../pages/checkoutPage'


describe('E2E buying process', () => {

    it('removing item from cart', () => {
        cy.login('standard_user', 'secret_sauce')
        homePage.elements.titleSpan().should('have.text', 'Products');
        homePage.addToCart()
        homePage.elements.CartBadge().should('have.text', '1');
        homePage.goToCart();
        checkoutPage.elements.ItemInCart().should('have.text', '1');
        checkoutPage.removeItem();
        checkoutPage.elements.ItemInCart().should('not.exist');
        checkoutPage.continueShoppingFromCart();
        homePage.elements.titleSpan().should('have.text', 'Products');


    })
})