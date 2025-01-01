import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the sidebar", () => {
    cy.visit("/inventory.html");  
});

When("I click the menu icon", () => {
    cy.get(".bm-burger-button").click(); 
});

Then("the sidebar should be displayed", () => {
    cy.get(".bm-menu").should("be.visible"); 
});

When("I click the logout button", () => {
    cy.get("#logout_sidebar_link").click(); 
});

Then("I should be navigated to the login page", () => {
    cy.visit("/"); 
});
