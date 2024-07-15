import Signup from "../POM/signup";

describe('buttonShift', function() { 

  before(function() {
    // Load the email data before running the tests
    cy.fixture('example').then((data) => {
      this.email = data.email;
      this.otp = data.otp;
      this.pass = data.pass;
      this.username = data.username;
      this.emailforvalidations = data.emailforvalidations;
      this.invalidemailformat = data.invalidemailformat;
      this.minpass = data.minpass;
      this.maxpass = data.maxpass;
      this.retypepass = data.retypepass;
      this.invalidusername = data.invalidusername;
      this.phonenumber = data.phonenumber;

    });
  });

  //Testcase1
  it('tc1_Verify that User is able to navigate to the Signup Screen', function() { 
    
    // Initializing the Signup Page Object Model
    const signup = new Signup();

    // Navigate to the Given URL 
    signup.navigateTOUrl();

    // Click Signup Button
    signup.clickSignupButton();

    // Verify User Successfully navigated to the Signup Screen
    signup.verifyUserInTheSignupPage();
  });

 //TestCase2
  it('tc2_Verify that User is able to create a new user with the Valid Credentials', function() { 
  
    // Initializing the Signup Page Object Model
    const signup = new Signup();

    // Navigate to the Given URL 
    signup.navigateTOUrl();

    // Click Signup Button
    signup.clickSignupButton();

    // Wait for the email input to be visible
    signup.verifyEmailInputFieldIsVisible();

    // Provide the valid Email ID in the Email Field
    signup.getenterValidEmailInTheEmailField().type(this.email);

    //click the Proceed Icon
    signup.clickForwardIcon()

    // Verify user is in the Create Password Page
    signup.verifyUserInCreatePasswordPage();

    // Wait for the password input to be visible 
    signup.verifyPasswordInputFieldIsVisible();

    // Enter Valid Password in the Enter Password Field
    signup.getEnterPassword().type(this.pass);

    // Enter the Same Password in the Re-Type Password Field
    signup.getReTypePassword().type(this.pass);

    //Click Proceed button
    signup.clickForwardIcon();

    //Wait for OTP input field
    signup.Wait(); 

    //Enter the Valid OTP(Default)
    signup.getOtpVerification().type(this.otp);

    //Click Proceed button
    signup.clickForwardIcon();

    //wait for the Username displayed
    signup.Wait();

    //Enter the valid username
    signup.getValidUserName().clear().type(this.username);

    //Wait for the Location field
    signup.Wait();

    //Select the Location
    signup.selectTheLocation();
    
    //Wait for the Phone number field
    signup.Wait();

    // Select the "India" option
     signup.selectIndiaInTheLocationField();

    //Enter the valid phonenumber
    signup.getPhoneNumber().type(this.phonenumber);

    //Click Verify button in the Phone number
    signup.clickVerifyButtonInThePhoneNumberField();

    //Enter the Valid OTP(Default)
    signup.getOtpVerification().type(this.otp);

    //Wait
    signup.Wait();

    //Verify Signup button is enabled
    signup.verifySignupButtonIsEnabled();

    //Click Signup Button
    signup.clickSignupButtonIntheFinish();

    //Wait for the Dashbord
    signup.Wait();

    //Verify User Successfully Logged In
    signup.VerifyMenuIconIsVisible();

    //Click the Menu Icon
    signup.clickMenuIcon();

    //Wait for Logout button is loading
    signup.Wait();

    //Verify successful user signup by checking for the display of the Logout button.
    signup.VerifyLogOutButtonIsVisible();

    //Verify User In the Community Page
    signup.verifyUserInTheCommunityPage();

    //Click the Logout Button
    signup.clickTheLogOutButton();

  });

  //TestCase3
  it('tc3_Verify that the User can Signup with already existing email', function() { 
  
    // Initializing the Signup Page Object Model
    const signup = new Signup();

    // Navigate to the Given URL 
    signup.navigateTOUrl();

    // Click Signup Button
    signup.clickSignupButton();

    // Wait for the email input to be visible
    signup.verifyEmailInputFieldIsVisible();

    // Provide the valid Email ID in the Email Field
    signup.getenterValidEmailInTheEmailField().type(this.email);

    //click the Proceed Icon
    signup.clickForwardIcon()

    //Wait 
    signup.Wait();

    //verify Login Button is Visible
    signup.verifyLoginButtonIsVisibleAfterEnteringTheAlreadyExistingEmail();
});

//TestCase4
it('tc4_Verify that the User can sign up without providing an email ID in the email field.', function() { 
  
  // Initializing the Signup Page Object Model
  const signup = new Signup();

  // Navigate to the Given URL 
  signup.navigateTOUrl();

  // Click Signup Button
  signup.clickSignupButton();

  // Wait for the email input to be visible
  signup.verifyEmailInputFieldIsVisible();

  //Leave the Email field blank

  //click the Proceed Icon
  signup.clickForwardIcon();

  //Wait of validation message
  signup.Wait();

  //Verify Email is Required Validation message is displayed
  signup.verifyEmailFieldIsRequiredValidationMessageIsDisplayed();

});

//TestCase5
it('tc5_Verify that the User can Signup with providing the Invalid email id format in the email field', function() { 
  
  // Initializing the Signup Page Object Model
  const signup = new Signup();

  // Navigate to the Given URL 
  signup.navigateTOUrl();

  // Click Signup Button
  signup.clickSignupButton();

  // Wait for the email input to be visible
  signup.verifyEmailInputFieldIsVisible();

  // Provide the valid Email ID in the Email Field
  signup.getenterValidEmailInTheEmailField().type(this.invalidemailformat);

  //click the Proceed Icon
  signup.clickForwardIcon();

  //Wait of validation message
  signup.Wait();

  //Verify Email is Required Validation message is displayed
  signup.verifyPleaseEnterValidEmailValidationMessageIsDisplayed();

});

//TestCase6
it('tc6_Verify that the User can Signup without providing the password in the Password field', function() { 
  
  // Initializing the Signup Page Object Model
  const signup = new Signup();

  // Navigate to the Given URL 
  signup.navigateTOUrl();

  // Click Signup Button
  signup.clickSignupButton();

  // Wait for the email input to be visible
  signup.verifyEmailInputFieldIsVisible();

  // Provide the valid Email ID in the Email Field
  signup.getenterValidEmailInTheEmailField().type(this.emailforvalidations);

  //click the Proceed Icon
  signup.clickForwardIcon()

  // Verify user is in the Create Password Page
  signup.verifyUserInCreatePasswordPage();

  // Wait for the password input to be visible 
  signup.verifyPasswordInputFieldIsVisible();

  //Leave the Password field and Retype password field blank

  //Click Proceed button
  signup.clickForwardIcon();

  //Wait for the validation messages
  signup.Wait();

  //Verify Password is required Valdiation Message displayed in the Enter Password field
  signup.verifyPasswordFieldRequiredValidationMessageDisplayedInTheEnterPasswordField();

  //Verify Password is required Valdiation Message displayed in the Re-Type Password field
  signup.verifyPasswordFieldRequiredValidationMessageDisplayedInTheRetypePasswordField();

});
//TestCase7
it('tc7_Verify that the User can Signup with providing the 7 characters in the Password field ', function() { 
  
  // Initializing the Signup Page Object Model
  const signup = new Signup();

  // Navigate to the Given URL 
  signup.navigateTOUrl();

  // Click Signup Button
  signup.clickSignupButton();

  // Wait for the email input to be visible
  signup.verifyEmailInputFieldIsVisible();

  // Provide the valid Email ID in the Email Field
  signup.getenterValidEmailInTheEmailField().type(this.emailforvalidations);

  //click the Proceed Icon
  signup.clickForwardIcon()

  // Verify user is in the Create Password Page
  signup.verifyUserInCreatePasswordPage();

  // Wait for the password input to be visible 
  signup.verifyPasswordInputFieldIsVisible();

  //Enter 7 characters in the Enter Password Field
  signup.getEnterPassword().type(this.minpass);

  // Enter the Same Password in the Re-Type Password Field
  signup.getReTypePassword().type(this.minpass);

  //Click Proceed button
  signup.clickForwardIcon();

  //Wait for Validation 
  signup.Wait(); 

  //Verify Minimum Character Validation In the Password Field
  signup.verifyPassworfieldAtleastContain8CharactersValidationMessageDisplayedInThePasswordField();

  //Verify Minimum Character Validation In the Re Type Password Field
  signup.verifyRePassworfieldAtleastContain8CharactersValidationMessageDisplayedInTheRetypePasswordField();
});

//TestCase8
it('tc8_Verify that the User can Signup with providing the 101 characters in the Password field', function() { 
  
  // Initializing the Signup Page Object Model
  const signup = new Signup();

  // Navigate to the Given URL 
  signup.navigateTOUrl();

  // Click Signup Button
  signup.clickSignupButton();

  // Wait for the email input to be visible
  signup.verifyEmailInputFieldIsVisible();

  // Provide the valid Email ID in the Email Field
  signup.getenterValidEmailInTheEmailField().type(this.emailforvalidations);

  //click the Proceed Icon
  signup.clickForwardIcon()

  // Verify user is in the Create Password Page
  signup.verifyUserInCreatePasswordPage();

  // Wait for the password input to be visible 
  signup.verifyPasswordInputFieldIsVisible();

  //Enter 101 characters in the Enter Password Field
  signup.getEnterPassword().type(this.maxpass);

  // Enter the Same Password in the Re-Type Password Field
  signup.getReTypePassword().type(this.maxpass);

  //Click Proceed button
  signup.clickForwardIcon();

  //Wait for Validation 
  signup.Wait(); 

  //Verify Maximum Character Validation In the Password Field
  signup.verifyPasswordFieldAllowedMaximum100CharactersOnly();

});

//TestCase9
it('tc9_Verify that the User can Signup with the different passwords in the Password and Retype password fields', function() { 
  
  // Initializing the Signup Page Object Model
  const signup = new Signup();

  // Navigate to the Given URL 
  signup.navigateTOUrl();

  // Click Signup Button
  signup.clickSignupButton();

  // Wait for the email input to be visible
  signup.verifyEmailInputFieldIsVisible();

  // Provide the valid Email ID in the Email Field
  signup.getenterValidEmailInTheEmailField().type(this.emailforvalidations);

  //click the Proceed Icon
  signup.clickForwardIcon()

  // Verify user is in the Create Password Page
  signup.verifyUserInCreatePasswordPage();

  // Wait for the password input to be visible 
  signup.verifyPasswordInputFieldIsVisible();

  //Enter 7 characters in the Enter Password Field
  signup.getEnterPassword().type(this.pass);

  // Enter the Same Password in the Re-Type Password Field
  signup.getReTypePassword().type(this.retypepass);

  //Click Proceed button
  signup.clickForwardIcon();

  //Wait for Validation 
  signup.Wait(); 

  //Verify passwords didn't match validation message is displayed
  signup.verifyPasswordDoesntMatchValidationMessageIsDisplayed();

});

//TestCase10
it('tc10_Verify that user can able to login with valid credentials', function() { 
  
   // Initializing the Signup Page Object Model
   const login = new Signup();

   // Navigate to the Given URL 
   login.navigateTOUrl();

   // Click Login Button
   login.clickLoginButton();

   // Wait for the email input to be visible
   login.verifyEmailInputFieldIsVisible();

   // Provide the valid Email ID in the Email Field
   login.getenterValidEmailInTheEmailField().type(this.email);

   //click the Proceed Icon
   login.clickForwardIcon();

   //Wait for the Password Screen
   login.Wait();
   
   //Wait for the Password field to load
   login.verifyPasswordFieldIsDisplayedInTheLoginPage();

   //Enter the Valid Password
   login.getPasswordFieldInTheLogin().type(this.pass);

   //Click Login Button After Entering the Password
   login.clickLoginButtonAfterEnteringPassword();

   //Wait for the Dashbord
   login.Wait();

   //Verify User Successfully Logged In
   login.VerifyMenuIconIsVisible();

   //Click the Menu Icon
   login.clickMenuIcon();
 
   //Wait for Logout button is loading
   login.Wait();
 
   //Verify successful user signup by checking for the display of the Logout button.
   login.VerifyLogOutButtonIsVisible();
 
   //Verify User In the Community Page
   login.verifyUserInTheCommunityPage();

   //Click the Logout Button
   login.clickTheLogOutButton();
 
});

  //Testcase11
  it('tc11_Verify that user can able to login without providing email id', function() { 
    
    // Initializing the Signup Page Object Model
    const login = new Signup();
  
    // Navigate to the Given URL 
    login.navigateTOUrl();
  
    // Click Login Button
    login.clickLoginButton();
  
    // Wait for the email input to be visible
    login.verifyEmailInputFieldIsVisible();
  
    //Leave the Email field blank
  
    //click the Proceed Icon
    login.clickForwardIcon();
  
    //Wait of validation message
    login.Wait();
  
    //Verify Email is Required Validation message is displayed
    login.verifyEmailFieldIsRequiredValidationMessageIsDisplayed();
  
  });
  
  //TestCase12
  it('tc12_Verify that the User can Signup with providing the Invalid email id format in the email field', function() { 
    
    // Initializing the Signup Page Object Model
    const login = new Signup();
  
    // Navigate to the Given URL 
    login.navigateTOUrl();
  
    // Click Login Button
    login.clickLoginButton();
  
    // Wait for the email input to be visible
    login.verifyEmailInputFieldIsVisible();
  
    // Provide the valid Email ID in the Email Field
    login.getenterValidEmailInTheEmailField().type(this.invalidemailformat);
  
    //click the Proceed Icon
    login.clickForwardIcon();
  
    //Wait of validation message
    login.Wait();
  
    //Verify Email is Required Validation message is displayed
    login.verifyPleaseEnterValidEmailValidationMessageIsDisplayed();
  
  });

  //TestCase13
  it('tc13_Verify that the User can login without providing the password in the Password field', function() { 
    
    // Initializing the Signup Page Object Model
    const login = new Signup();
  
    // Navigate to the Given URL 
    login.navigateTOUrl();
  
    // Click Login Button
    login.clickLoginButton();
  
    // Wait for the email input to be visible
    login.verifyEmailInputFieldIsVisible();
  
    // Provide the valid Email ID in the Email Field
    login.getenterValidEmailInTheEmailField().type(this.email);
  
    //click the Proceed Icon
    login.clickForwardIcon();
  
    //Wait of validation message
    login.Wait();

    //Wait for the Password field to load
    login.verifyPasswordFieldIsDisplayedInTheLoginPage();

    //Leave the Password field is blank
    
    //Click Login Button After Entering the Password
    login.clickLoginButtonAfterEnteringPassword();

    //Wait for the Dashbord
    login.Wait();

    //Verify Password cannot be blank validation message is displayed
    login.verifyPasswordCannotBeBlankValidationMessageIsDisplayedInTheLogin();
  
      
  });

  //Testcase14
  it('tc14_Verify that the User can login with providing the Invalid password in the Password field', function() { 
    
    // Initializing the Signup Page Object Model
    const login = new Signup();
  
    // Navigate to the Given URL 
    login.navigateTOUrl();
  
    // Click Login Button
    login.clickLoginButton();
  
    // Wait for the email input to be visible
    login.verifyEmailInputFieldIsVisible();
  
    // Provide the valid Email ID in the Email Field
    login.getenterValidEmailInTheEmailField().type(this.email);
  
    //click the Proceed Icon
    login.clickForwardIcon();
  
    //Wait of validation message
    login.Wait();

    //Wait for the Password field to load
    login.verifyPasswordFieldIsDisplayedInTheLoginPage();

    //Leave the Password field is blank
    login.getPasswordFieldInTheLogin().type(this.retypepass);

    //Click Login Button After Entering the Password
    login.clickLoginButtonAfterEnteringPassword();

    //Wait for the Dashbord
    login.Wait();

    //Verify Password cannot be blank validation message is displayed
    login.verifyUnableToLogInWithProvidedCredentialsValidationMessageIsDisplayedInTheLogin();
  
      
  });

});