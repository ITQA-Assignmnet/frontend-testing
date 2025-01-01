import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the login page", () => {
  cy.visit("/");
});

When("I enter {string} and {string}", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

Then("I should see the inventory page", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("contain.text", "Products");
});

Then("I should see an error message", () => {
  cy.get(".error-button").should("be.visible");
  cy.get('[data-test="error"]').should("contain.text", "Epic sadface: Username and password do not match any user in this service");
});

Then("I should see an error message for locked user", () => {
  cy.get(".error-button").should("be.visible");
  cy.get('[data-test="error"]').should("contain.text", "Epic sadface: Sorry, this user has been locked out.");
});

