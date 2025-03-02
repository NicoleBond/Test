class CartPage {
    visit() {
        cy.get('#nav-cart').click();
    }
}

export default CartPage;