describe("AutoComplete Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show 'No suggestions' for invalid data", () => {
    cy.get("input.search").type("zzz");
    cy.wait(500); // wait for debounce
    cy.get("li.no-results").should("contain", "No suggestions");
  });

  it("should show suggestions for valid input", () => {
    cy.get("input.search").type("a");
    cy.wait(500); // wait for debounce
    cy.get("li.suggestion-item").should("contain", "apple");
  });

  it("should show zero suggestions if input cleared", () => {
    cy.get("input.search").type("a");
    cy.wait(500);
    cy.get("input.search").clear();
    cy.wait(500);
    cy.get("ul.suggestions li").should("have.length", 0);
  });
});

