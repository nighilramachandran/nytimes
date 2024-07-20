describe("Dynamic Page spec", () => {
  // Visit the page before each test
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  // should find page not found
  it("Page not found", () => {
    cy.wait(2000);
    cy.visit("http://localhost:3000/asdfasdfasdfasdfasdfasdf");
    cy.get('[data-testid="page-not-found"]').should("exist");
  });
  // find the source title
  it("should render the source title", () => {
    cy.wait(2000);
    cy.get('[data-testid="article-index-0"]').first().click();
    cy.get('[data-testid="source-title"]').should("exist");
  });
  // background color
  it("should have background color #101010", () => {
    cy.wait(2000);
    cy.get('[data-testid="article-index-0"]').first().click();
    cy.get("body")
      .invoke("css", "background-color")
      .should("eq", "rgb(16, 16, 16)");
  });
  // ny logo exist
  it("should find the NY Logo SVG", () => {
    cy.wait(2000);
    cy.get('[data-testid="article-index-0"]').first().click();
    cy.get('[data-testid="ny-logo"]').should("exist");
  });
  // logo color
  it("should find the logo color #FFFFFF", () => {
    cy.wait(2000);
    cy.get('[data-testid="article-index-0"]').first().click();
    cy.get('[data-testid="ny-logo"]')
      .should("exist")
      .invoke("attr", "fill")
      .should("eq", "#FFFFFF");
  });
});
