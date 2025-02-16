import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const SELECTORS = {
  productImage: '[data-test="inventory-item-img"]',
  productDesc: '[data-test="inventory-item-desc"]',
  productPrice: '[data-test="inventory-item-price"]',
  addToCartBtn: '[data-test="add-to-cart"]',
  removeBtn: '[data-test="remove"]',
  shoppingCrt:'[data-test="shopping-cart-link"]'
};




Given('I log in as a standard user for check product catelog', () => {
  cy.login('standard_user', 'secret_sauce');
  cy.url().should('include', '/inventory.html');
});

//Test 01
When('I click the product image with data-test {string}', (dataTest) => {
  cy.get(`[data-test="${dataTest}"]`)
    .first()
    .invoke('attr', 'src')
    .as('productImage');
    
  cy.get(`[data-test="${dataTest}"]`)
    .first()
    .click();
});

//Test 02
Then('I should be navigated to the specific product catalog page', () => {
  cy.url().should('include', 'inventory-item.html');
  cy.get(SELECTORS.productDesc)
    .should('be.visible')
    .and('not.be.empty');
});

//Test 03
Then('I should be displayed selected product price', () => {
  cy.get(SELECTORS.productPrice)
    .should('be.visible')
    .invoke('text')
    .should('match', /^\$\d+\.\d{2}$/);
});

//Test 04
When('I click the add to cart', () => {
  cy.get(SELECTORS.addToCartBtn)
    .should('be.visible')
    .click();
});

//Test 05

Then('It should changed Add to cart button to remove button', () => {
  cy.get(SELECTORS.removeBtn)
    .should('be.visible')
    .and('have.text', 'Remove');
});

//Test 06
Then('Cart count should be updated to {string}', (count) => {
  cy.get(SELECTORS.shoppingCrt)
    .should('be.visible')
    .and('have.text', count);
});

//Test 07
When('I click the back button', () => {
  cy.get('[data-test="back-to-products"]').click();
});
//Test 08
Then('I should be redirected to the inventory page', () => {
  cy.url().should('include', '/inventory.html');
  cy.get('.inventory_list').should('be.visible');
});

