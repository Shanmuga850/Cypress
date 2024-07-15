class Signup
{
     navigateTOUrl()
    {
        cy.visit('https://dev-fe.buttonshift.com');
    }

    clickSignupButton()
    {
        cy.xpath("//button[text()='Sign up']").click();
    }

    verifyUserInTheSignupPage()
    {
        cy.xpath("//span[text()='By creating an account , I accept the']").contains('creat');
    }

    verifyEmailInputFieldIsVisible()
    {
        cy.xpath("//input[@placeholder='Enter email address']").should('be.visible');
    }

    getenterValidEmailInTheEmailField()
    {
       return cy.xpath("//input[@placeholder='Enter email address']");
    }

    clickForwardIcon()
    {
        cy.xpath("//div[@class='MuiBox-root css-bs0ocn']/button").click();
    }

    verifyUserInCreatePasswordPage()
    {
        cy.get('.css-k6d7k8 > .MuiTypography-h2').contains('Password');
    }

    verifyPasswordInputFieldIsVisible()
    {
        cy.get('#mui-3').should('be.visible');
    }

    getEnterPassword()
    {
     return cy.get('#mui-3');
    }

    getReTypePassword()
    {
       return cy.get('#mui-4');
    }

    getOtpVerification()
    {
        return cy.get('[aria-label="Please enter OTP character 1"]');
    }

    getValidUserName()
    {
        return  cy.get('[data-cy="signup-username-input"]');
    }

    selectTheLocation()
    {
        cy.xpath("//input[@placeholder='choose location']").type('India');
    }

    selectIndiaInTheLocationField()
    {
        cy.get('#mui-8-option-1').click();
    }

    getPhoneNumber()
    {
       return  cy.get('[data-cy="signup-phone-input"]');
    }

    clickVerifyButtonInThePhoneNumberField()
    {
        cy.get('[data-cy="signup-phone-verify-button"]').click();
    }

    verifySignupButtonIsEnabled()
    {
        cy.get('[data-cy="signup-submit-button"]').should('be.visible');
    }

    clickSignupButtonIntheFinish()
    {
        cy.get('[data-cy="signup-submit-button"]').click();
    }

    VerifyMenuIconIsVisible()
    {
        cy.xpath("//div[@class='MuiBox-root css-1w0dmnq']").should('be.visible');
        cy.log("User Logged In Successfully");
    }

    clickMenuIcon()
    {
        cy.xpath("//div[@class='MuiBox-root css-1w0dmnq']").click();
    }

    VerifyLogOutButtonIsVisible()
    {
        cy.xpath("//button[@aria-label='Logout']").should('be.visible');
    }

    verifyUserInTheCommunityPage()
    {
        cy.url().should('eq', 'https://dev-fe.buttonshift.com/community');
    }

    clickTheLogOutButton()
    {
        cy.xpath("//button[@aria-label='Logout']").click();
    }

    //tc3 validation - Already Existing Mail
    verifyLoginButtonIsVisibleAfterEnteringTheAlreadyExistingEmail()
    {
        cy.get('[data-cy="auth-login-button"]').should('be.visible');
    }

    //tc4 validation - Without providing the email id
    verifyEmailFieldIsRequiredValidationMessageIsDisplayed()
    {
        cy.get('#mui-2-helper-text').should('have.text','Email is required');
    }

    //tc5 validation - invalid email format
    verifyPleaseEnterValidEmailValidationMessageIsDisplayed()
    {
        cy.get('#mui-2-helper-text').should('have.text','Please enter a valid email address');
    }

    //tc6 validation - without providing password
    verifyPasswordFieldRequiredValidationMessageDisplayedInTheEnterPasswordField()
    {
        cy.get('#mui-3-helper-text').should('have.text','password field is required');
    }

     //tc6 validation - without providing Retype password
    verifyPasswordFieldRequiredValidationMessageDisplayedInTheRetypePasswordField()
    {
        cy.get('#mui-4-helper-text').should('have.text','password field is required');;
    }
    
    //tc7 validation - minimum character validation in the password field
    verifyPassworfieldAtleastContain8CharactersValidationMessageDisplayedInThePasswordField()
    {
        cy.get('#mui-3-helper-text').should('have.text','password must be at least 8 characters');
    }

    //tc7 validation - minimum character validation in the retype password field
    verifyRePassworfieldAtleastContain8CharactersValidationMessageDisplayedInTheRetypePasswordField()
    {
        cy.get('#mui-4-helper-text').should('have.text','password must be at least 8 characters');
    }

    //tc8 validaion - maximum character validation in the password field
    verifyPasswordFieldAllowedMaximum100CharactersOnly()
    {
        cy.get('#mui-4-helper-text').should('have.text','Ensure this field has no more than 100 characters.');
    }

    //tc9 validaton - Password doesn't match
    verifyPasswordDoesntMatchValidationMessageIsDisplayed()
    {
        cy.get('#mui-4-helper-text').should('have.text',"passwords didn't match");
    }

    //tc10
    clickLoginButton()
    {
        cy.xpath("//button[text()='Log in']").click();
    }

    verifyPasswordFieldIsDisplayedInTheLoginPage()
    {
        cy.get('[data-cy="auth-password-input"]').should('be.visible');
    }

    getPasswordFieldInTheLogin()
    {
        return cy.get('[data-cy="auth-password-input"]');
    }
    
    clickLoginButtonAfterEnteringPassword()
    {
        cy.get('[data-cy="auth-login-button"]').click();
    }

    //t13 Validation - without providing the password
    verifyPasswordCannotBeBlankValidationMessageIsDisplayedInTheLogin()
    {
        cy.get('#mui-3-helper-text').should('have.text','Password cannot be blank');
    }

    //t14 Validation -  providing the password
    verifyUnableToLogInWithProvidedCredentialsValidationMessageIsDisplayedInTheLogin()
    {
        cy.get('#mui-3-helper-text').should('have.text','Unable to log in with provided credentials');
    }

    Wait()
    {
        cy.wait(3000);
    }
}
export default Signup;