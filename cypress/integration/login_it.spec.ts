import { When, Then } from 'cypress-cucumber-preprocessor/steps'
describe("My First Test", () => {
	
  it("should visit login page", () => {
    cy.visit("/login");
	cy.get('.mat-button').click();
	cy.url().should('include', '/register')
  });
	
  it("Visits the initial project page", () => {
    cy.visit("/")
    cy.get("h1").should("contain.text", "Unforgettable Holidays");
  })
})
