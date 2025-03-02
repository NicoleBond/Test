class ContactPage {
    visit() {
        cy.visit('http://jupiter.cloud.planittesting.com/#/contact');
    }

    submitForm() {
        cy.get('.btn-contact').click();
    }

    verifyErrorMessages() {
        cy.get('.alert-error').should('be.visible');
        cy.contains('We welcome your feedback - but we won\'t get it unless you complete the form correctly.').should('be.visible');
    }
    fillMandatoryFields(name, email, message) {
        cy.get('#forename').type(name);
        cy.get('#email').type(email);
        cy.get('#message').type(message);
    }

    validateErrorsGone() {
        cy.get('.alert-info').should('be.visible');
        cy.contains('We welcome your feedback - tell it how it is.').should('be.visible');
    }
    }

export default ContactPage;