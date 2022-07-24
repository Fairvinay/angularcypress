import { When, Then } from 'cypress-cucumber-preprocessor/steps'
describe("User", () => {
  it("should register user", () => {
    cy.visit("/register");
	
	cy.get('#Username').type('Michael');
cy.get('#Email').type('dehs@fierg.com');

cy.get('#Password').type('qwerty');
//cy.get('#username').type('mk');
cy.get('.btn-block').click();
  });
});