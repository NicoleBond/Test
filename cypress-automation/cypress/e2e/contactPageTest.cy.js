import ContactPage from '../pages/ContactPage';

describe('Contact Page Test for the error page and validation', () => {
    const contactPage = new ContactPage();
    
    it('Verify error messages when submitting empty form', () => {
        contactPage.visit();
        contactPage.submitForm();
        contactPage.verifyErrorMessages();
    });

    it('Fill mandatory fields and validate errors are gone', () => {
        contactPage.visit();
        contactPage.submitForm();
        contactPage.fillMandatoryFields('John Doe', 'john@example.com', 'This is a test message.');
        contactPage.validateErrorsGone();
    });
   
});