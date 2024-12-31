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

