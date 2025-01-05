import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I visit inventory page as registered user to sort items", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user'); 
    cy.get('#password').type('secret_sauce'); 
    cy.get('#login-button').click(); 
    cy.url().should('include', '/inventory.html'); 
});

When("I click the sort icon", () => {
    cy.get(".select_container").click(); 
});

Then("The sort list should be displayed", () => {
    cy.get(".product_sort_container").find("option").should("have.length", 4); 
    cy.get(".product_sort_container").find("option").eq(0).should("have.text", "Name (A to Z)"); 
    cy.get(".product_sort_container").find("option").eq(1).should("have.text", "Name (Z to A)"); 
    cy.get(".product_sort_container").find("option").eq(2).should("have.text", "Price (low to high)"); 
    cy.get(".product_sort_container").find("option").eq(3).should("have.text", "Price (high to low)"); 
});

When("I enter 'Name A to Z'", () => {
    cy.get(".product_sort_container").select("Name (A to Z)"); 
});

Then("The items name should list according to A to Z", () => {
    let previousName = '';
    cy.get('.inventory_item_name').each(($el) => {
        const currentName = $el.text();
        expect(currentName.localeCompare(previousName)).to.be.gte(0); 
        previousName = currentName;
    });
});

When("I enter 'Name Z to A'", () => {
    cy.get(".product_sort_container").select("Name (Z to A)"); 
});

Then("The items name should list according to Z to A", () => {
    let previousName = 'ZZZZZZZ'; // Start with a very high alphabetical value
    cy.get('.inventory_item_name').each(($el) => {
        const currentName = $el.text().trim();
        cy.log(`Previous: ${previousName}, Current: ${currentName}`);
        expect(currentName.localeCompare(previousName)).to.be.lte(0); // Z-A
        previousName = currentName;
    });
});

When("I enter 'price low to high'", () => {
    cy.get(".product_sort_container").select("Price (low to high)"); 
});

Then("The items price should list according to low to high", () => {
    let previousPrice = 0;
    cy.get('.inventory_item_price').each(($el) => {
        const currentPrice = parseFloat($el.text().replace('$', '')); 
        expect(currentPrice).to.be.gte(previousPrice); 
        previousPrice = currentPrice;
    });
});

When("I enter 'price high to low'", () => {
    cy.get(".product_sort_container").select("Price (high to low)"); 
});

Then("The items price should list according to high to low", () => {
    let previousPrice = Number.MAX_VALUE;
    cy.get('.inventory_item_price').each(($el) => {
        const currentPrice = parseFloat($el.text().replace('$', '')); 
        expect(currentPrice).to.be.lte(previousPrice); 
    });
});
