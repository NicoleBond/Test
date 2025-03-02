import ContactPage from '../pages/ContactPage';

describe('Contact Page Test for validation 5 times', () => {
    for (let i = 0; i < 5; i++) {
        it(`Verify successful submission message - attempt ${i + 1}`, () => {
            const contactPage = new ContactPage();
            contactPage.visit();
            cy.get('form').should('be.visible');
            contactPage.submitForm();//fix page, prevent of jumping
            contactPage.fillMandatoryFields('John Doe', 'john@example.com', 'This is a test message.');
            contactPage.submitForm();
            cy.contains('Thanks John Doe, we appreciate your feedback.', { timeout: 15000 }).should('be.visible');
            cy.wait(500); // Extra wait before next iteration
        });
    }
});

