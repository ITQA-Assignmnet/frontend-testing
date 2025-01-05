import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const SELECTORS = {
  addToCartBtn: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]', // Assuming the "Add to Cart" button uses this attribute
  shoppingCartLink: '[data-test="shopping-cart-link"]',
  cartItem: '[data-test="title"]', 
};


Given('I log in as a standard user for check your cart page', () => {
  cy.login('standard_user', 'secret_sauce');
});

//Test 10
When('I add product to the cart', () => {
  cy.get(SELECTORS.addToCartBtn).click(); // Click the "Add to Cart" button
});

When('I click the cart icon to check your cart page', () => {
  cy.get(SELECTORS.shoppingCartLink).click(); // Click the shopping cart link
});

//Test 11
Then('I should see the title as your Cart', () => {
  cy.get(SELECTORS.cartItem).should('contain.text', 'Your Cart');  ; // Adjust this to the actual cart item check
});

//Test 12
When ('I click checkout button',()=>{
  cy.get('[data-test="checkout"]').click()
})

//Test 13
Then ("I should redirect to the chcekout page",()=>{
  cy.get('[data-test="title"]').should('contain.text', 'Checkout: Your Information')
})

