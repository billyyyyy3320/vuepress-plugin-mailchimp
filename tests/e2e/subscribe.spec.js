it("should load successfully", () => {
  cy.visit("/");
});

it("should clean input after subscribing", () => {
  cy.get('[data-cy="email"]').type("newsbielt703@gmail.com");
  cy.get('[data-cy="submit"]').click();
  cy.get('[data-cy="email"]').should("have.value", "");
});
