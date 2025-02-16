import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});

Given('I log in as a standard user for check cart functionality', () => {
    cy.login('standard_user', 'secret_sauce');
  });

  //Test 07

When('I add an item to the cart', () => {
  // Replace with the selector for your "Add to Cart" button
  cy.get('#add-to-cart-sauce-labs-backpack').first().click();
});


Then('the cart number should increase by {int} in inventory page', (increment) => {
  cy.get('[data-test="shopping-cart-badge"]') // Adjust the selector for the cart number element
    .invoke('text')
    .then((text) => {
      const currentCartNumber = parseInt(text, 10);
      const expectedCartNumber = 0 + increment;
      expect(currentCartNumber).to.eq(expectedCartNumber);
      Cypress.env('previousCartNumber', currentCartNumber); // Save the updated cart number
    });
});

//Test 08
When('I add another item to the cart', () => {
    // Replace with the selector for your "Add to Cart" button
    cy.get('#add-to-cart-sauce-labs-bike-light').first().click();
  });
  
//Test 09
  Then('the cart number should increase by {int} again in inventory page', (increment) => {
    cy.get('[data-test="shopping-cart-badge"]') // Adjust the selector for the cart number element
      .invoke('text')
      .then((text) => {
        const currentCartNumber = parseInt(text, 10);
        const expectedCartNumber = 2;
        expect(currentCartNumber).to.eq(expectedCartNumber);
        Cypress.env('previousCartNumber', currentCartNumber); 
      });
  });
