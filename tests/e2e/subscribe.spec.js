it("should load successfully", () => {
  cy.visit("/");
});

it("should not display popup before subscribing", () => {
  cy.get('[data-cy="popup"]').should("not.be.visible");
});

describe("after subscribing", () => {
  before(() => {
    cy.get('[data-cy="email"]').scrollIntoView();
    cy.wait(5000); //wait for scrolling
    cy.get('[data-cy="email"]').type("newsbielt703@gmail.com");
    cy.get('[data-cy="submit"]').click();
  });

  it("should clean up input", () => {
    cy.get('[data-cy="email"]').should("have.value", "");
  });

  it("should display popup", () => {
    cy.get('[data-cy="popup"]').should("be.visible");
  });

  it("should not display popup after 5s", () => {
    cy.wait(5000);
    cy.get('[data-cy="popup"]').should("not.be.visible");
  });
});
