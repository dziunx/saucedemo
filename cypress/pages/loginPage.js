class loginPage{

    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]'),
        loginErrorMsg: () => cy.get('[data-test="error"]'),
        loginTitle: () => cy.get('.login_logo'),
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)

    }

    typePassword(password){
        this.elements.passwordInput().type(password)

    }

    clickLoginButton(){
        this.elements.loginButton().click()
    }

}

export default new loginPage()