class sidebarPage{

    elements = {
        HamburgerIcon: () => cy.get('#react-burger-menu-btn'),
        allItemsSidebarLink: () => cy.get('[data-test="inventory-sidebar-link"]'),
        AboutSidebarLink: () => cy.get('[data-test="about-sidebar-link"]'),
        LogoutSidebarLink: () => cy.get('[data-test="logout-sidebar-link"]'),
        ResetAppSidebarLink: () => cy.get('[data-test="reset-sidebar-link"]'),

    }

    clickHamburgerIcon(){
        this.elements.HamburgerIcon().click()
    }

    clickLogoutLink(){
        this.elements.LogoutSidebarLink().click()
    }

}

export default new sidebarPage();