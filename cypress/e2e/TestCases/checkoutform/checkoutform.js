import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const SELECTORS = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '[data-test="login-button"]',
  checkoutButton: '[data-test="checkout"]',
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continueButton: '[data-test="continue"]',
  errorMessage: '[data-test="error"]',
};

Given('I am logged in as a standard user', () => {
  cy.visit('https://www.saucedemo.com/');
  cy.get(SELECTORS.username).type('standard_user');
  cy.get(SELECTORS.password).type('secret_sauce');
  cy.get(SELECTORS.loginButton).click();
  cy.url().should('include', '/inventory'); 
});

//Testcase 14
When('I navigate to the checkout form', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get(SELECTORS.checkoutButton).click();
    cy.url().should('include', '/checkout-step-one');
  });
  
//Testcase 15
  Then('I submit the form with invalid data', () => {
    cy.get(SELECTORS.firstName).clear(); // Leave first name blank
    cy.get(SELECTORS.lastName).type('Doe'); // Provide last name only
    cy.get(SELECTORS.postalCode).type('12345'); // Provide postal code
    cy.get(SELECTORS.continueButton).click();
    cy.get(SELECTORS.errorMessage)
      .should('be.visible')
      .and('have.text', 'Error: First Name is required');
  });

//Testcase 16
  
  Then('I submit the form with valid data', () => {
    cy.get(SELECTORS.firstName).type('John');
    cy.get(SELECTORS.lastName).type('Doe');
    cy.get(SELECTORS.postalCode).type('12345');
    cy.get(SELECTORS.continueButton).click();
    cy.url().should('include', '/checkout-step-two'); // Verify navigation to next step
  });