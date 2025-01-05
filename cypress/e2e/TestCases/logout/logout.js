import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I am logged in as a standard user", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user'); 
    cy.get('#password').type('secret_sauce');  
    cy.get('#login-button').click();           
    cy.url().should('include', '/inventory.html'); 
});

When("I click the menu icon", () => {
    cy.get(".bm-burger-button").click(); 
});

Then("The sidebar should be displayed", () => {
    cy.get(".bm-menu").should("be.visible"); 
});

When("I click the logout button", () => {
    cy.get("#logout_sidebar_link").click(); 
});

Then("I should be navigated to the login page", () => {
    cy.url().should("include", "/"); 
    cy.get("#login-button").should("be.visible"); 
});






