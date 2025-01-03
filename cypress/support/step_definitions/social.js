// social-icons.steps.js
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the homepage', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
});

//Test 21
Then('I should see the Twitter icon', () => {
  cy.get('[data-test="social-twitter"]')
    .should('be.visible');
});

//Test 22
Then('I should see the Facebook icon', () => {
  cy.get('[data-test="social-facebook"]')
    .should('be.visible');
});

//Test 23
Then('I should see the LinkedIn icon', () => {
  cy.get('[data-test="social-linkedin"]')
    .should('be.visible');
});

//Test 24
Then('the Twitter link should open in a new tab', () => {
  cy.get('[data-test="social-twitter"]')
    .should('have.attr', 'target', '_blank')
    .and('have.attr', 'rel', 'noreferrer');
});

//Test 25
Then('the Facebook link should open in a new tab', () => {
  cy.get('[data-test="social-facebook"]')
    .should('have.attr', 'target', '_blank')
    .and('have.attr', 'rel', 'noreferrer');
});

//Test 26
Then('the LinkedIn link should open in a new tab', () => {
  cy.get('[data-test="social-linkedin"]')
    .should('have.attr', 'target', '_blank')
    .and('have.attr', 'rel', 'noreferrer');
});

//Test 27
Then('the Twitter link should have the correct URL', () => {
  cy.get('[data-test="social-twitter"]')
    .should('have.attr','href','https://twitter.com/saucelabs');
});

//Test 28
Then('the Facebook link should have the correct URL', () => {
  cy.get('[data-test="social-facebook"]')
  .should('have.attr', 'href', 'https://www.facebook.com/saucelabs');

});


//Test 29
Then('the LinkedIn link should have the correct URL', () => {
  cy.get('[data-test="social-linkedin"]')
    .should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
});