// class CartPage {
//     visit() {
//         cy.get('#nav-cart').click();
//     }
// }

// export default CartPage;
class CartPage {
    visit() {
        cy.get('#nav-cart').click();
    }

    verifyProductPrice(productName, expectedPrice) {
        cy.contains('tbody tr', productName)
          .find('td:nth-child(2)')
          .should('contain', expectedPrice);
    }

    verifyProductSubtotal(productName, expectedSubtotal) {
        cy.contains('tbody tr', productName)
          .find('td:nth-child(4)')
          .should('contain', expectedSubtotal);
    }

    verifyTotal(expectedTotal) {
        cy.get('strong.total.ng-binding')
          .should('contain', `Total: ${expectedTotal}`);
    }
}

export default CartPage;
