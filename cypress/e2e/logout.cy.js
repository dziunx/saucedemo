import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'
import sidebarPage from '../pages/sidebarPage';

describe('Logout', () => {
    it('Logout user', () => {
        cy.login('standard_user', 'secret_sauce')
        homePage.elements.titleSpan().should('have.text', 'Products');
        sidebarPage.clickHamburgerIcon();
        sidebarPage.clickLogoutLink();
        loginPage.elements.loginTitle().should('have.text', 'Swag Labs');

    })
})