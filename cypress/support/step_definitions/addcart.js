import { Before ,After,Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';



const SELECTORS = {
  addToCartBtn: '[data-test="add-to-cart"]',
  shoppingCrt:'[data-test="shopping-cart-link"]',
  removeBtn: '[data-test="remove"]',

};

Given('I log in as a standard user for check add to cart', () => {
  cy.login('standard_user', 'secret_sauce');
});

///Test 04
When('I click the add to cart on product list page', () => {
    cy.get('button[id="add-to-cart-sauce-labs-backpack"]', { timeout: 10000 }).click();
  });

  //Test05
Then('It should changed Add to cart button to remove button on product list page', () => {
  cy.get('button[id="remove-sauce-labs-backpack"]')
    .should('be.visible')
    .and('have.text', 'Remove');
});

//Test 06
Then('Cart count should be updated to {string} on product list page', (count) => {
  cy.get(SELECTORS.shoppingCrt)
    .should('be.visible')
    .and('have.text', count);
});


