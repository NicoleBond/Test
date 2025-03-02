import ShopPage from '../pages/ShopPage';
import CartPage from '../pages/CartPage';

describe('Cart Tests', () => {
    const shopPage = new ShopPage();
    const cartPage = new CartPage();

    it('should add products to cart and verify details', () => {
        shopPage.visit();
        shopPage.addProduct('Stuffed Frog', 2);
        shopPage.addProduct('Fluffy Bunny', 5);
        shopPage.addProduct('Valentine Bear', 3);

        cartPage.visit();
      
        // Verify product prices
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', '$10.99');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', '$9.99');
        cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', '$14.99');

        // Verify subtotals
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain', '$21.98'); // 2 * 10.99
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('contain', '$49.95'); // 5 * 9.99
        cy.get('tbody > :nth-child(3) > :nth-child(4)').should('contain', '$44.97'); // 3 * 14.99

        // Verify total
        cy.wait(500); // Extra wait
        cy.get('strong.total.ng-binding').should('contain', 'Total: 116.9');
    });
});
