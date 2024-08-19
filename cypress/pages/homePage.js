class homePage{
    elements = {
        pageUrl: () => cy.url().should('include', 'inventory'),
        titleSpan: () => cy.get('[data-test="title"]'),
        addToCardBtn: () => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
        CartIcon: () => cy.get('[data-test="shopping-cart-link"]'),
        CartBadge: () => cy.get('[data-test="shopping-cart-badge"]'),


    }

    addToCart(){
        this.elements.addToCardBtn().click();
    }

    goToCart(){
        this.elements.CartIcon().click();
    }

}

export default new homePage();