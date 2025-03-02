class ShopPage {
    visit() {
        cy.visit('http://jupiter.cloud.planittesting.com/#/shop');
    }

    addProduct(productName, quantity) {
        for (let i = 0; i < quantity; i++) {
            cy.contains(productName).parent().find('.btn-success').click();
        }
    }
}
export default ShopPage;