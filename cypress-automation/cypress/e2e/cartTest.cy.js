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
        cartPage.verifyProductPrice('Stuffed Frog', '$10.99');
        cartPage.verifyProductPrice('Fluffy Bunny', '$9.99');
        cartPage.verifyProductPrice('Valentine Bear', '$14.99');

        // Verify subtotals
        cartPage.verifyProductSubtotal('Stuffed Frog', '$21.98'); // 2 * 10.99
        cartPage.verifyProductSubtotal('Fluffy Bunny', '$49.95'); // 5 * 9.99
        cartPage.verifyProductSubtotal('Valentine Bear', '$44.97'); // 3 * 14.99

        // Verify total
        cy.wait(500); // Extra wait
        cartPage.verifyTotal('116.9');
    });
});