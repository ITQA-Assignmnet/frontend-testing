import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I visit pages", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user'); 
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').click(); 
    cy.url().should('include', '/inventory.html'); 
});

When("I click menu icon for side bar", () => {
    cy.get(".bm-burger-button").should("be.visible").click(); 
});

Then("should disply side bar", () => {
    cy.get(".bm-menu").should("be.visible"); 
});

When("I click the close button", () => {
    cy.get("#react-burger-cross-btn").should("be.visible").click(); 
});

Then("The side bar should disappear", () => {
    cy.get(".bm-menu").should("not.be.visible"); 
});
