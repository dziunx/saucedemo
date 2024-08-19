class checkoutPage{
    elements = {
        ItemInCart:() => cy.get('[data-test="item-quantity"]'),
        removeItemBtn:() => cy.get('button').contains('Remove'),
        continueShoppingBtn:() => cy.get('[data-test="continue-shopping"'),
        cartDecription:() => cy.get('.cart_desc_label'),
        checkoutBtn: () => cy.get('[data-test="checkout"]'),
        firstNameInput: () => cy.get('[data-test="firstName"]'),
        lastNameInput: () => cy.get('[data-test="lastName"]'),
        zipCodeInput: () => cy.get('[data-test="postalCode"]'),
        cancelBtn: () => cy.get('[data-test="cancel"]'),
        continueBtn: () => cy.get('[data-test="continue"]'),
        finishBtn: () => cy.get('[data-test="finish"]'),
        completeHeader: () => cy.get('[data-test="complete-header"]'),
        backHomeBtn: () => cy.get('[data-test="back-to-products"]'),

    }
    goToCheckout(){
        this.elements.checkoutBtn().click();
    }

    typeFirstName(firstname){
        this.elements.firstNameInput().type(firstname);
    }

    typeLastName(lastname){
        this.elements.lastNameInput().type(lastname);
    }

    typeZipCode(zipcode){
        this.elements.zipCodeInput().type(zipcode);
    }

    continueCheckout(){
        this.elements.continueBtn().click();
    }

    finishOrder(){
        this.elements.finishBtn().click();
    }

    backHome(){
        this.elements.backHomeBtn().click();
    }

    removeItem(){
        this.elements.removeItemBtn().click();
    }

    continueShoppingFromCart(){
        this.elements.continueShoppingBtn().click();
    }

}

export default new checkoutPage();

