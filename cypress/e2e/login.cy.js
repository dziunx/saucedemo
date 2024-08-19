import homePage from '../pages/homePage'
import loginPage from '../pages/loginPage'

describe('Login', () => {

    it('standard user, successful login', () => {
        cy.login('standard_user', 'secret_sauce')
        homePage.elements.titleSpan().should('have.text', 'Products')

    });


    it('locked out user, unsuccessful login', () => {
        cy.login('locked_out_user', 'secret_sauce')
        loginPage.elements.loginErrorMsg().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        
    });

    it('incorrect login, unsuccessful login', () => {
        cy.login('not_existing_user', 'secret_sauce')
        loginPage.elements.loginErrorMsg().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
        
    });

    it('incorrect password, unsuccessful login', () => {
        cy.login('standard_user', 'incorrect_password')
        loginPage.elements.loginErrorMsg().should('have.text', 'Epic sadface: Username and password do not match any user in this service');
        
    });
})