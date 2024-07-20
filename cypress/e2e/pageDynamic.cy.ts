describe("Dynamic Page spec", () => {
  // Visit the page before each test
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.wait(2000);
    cy.get('[data-testid^="article-index-"]').first().click();
  });

  // it("should click on an article index", () => {
  //   cy.wait(2000);

  //   cy.url().should("include", "/");
  // });

  // background color exist
  it("should have background color #101010", () => {
    cy.get("body")
      .invoke("css", "background-color")
      .should("eq", "rgb(16, 16, 16)");
  });
  // ny logo exist
  it("should find the NY Logo SVG", () => {
    cy.get('[data-testid="ny-logo"]').should("exist");
  });
  // logo color
  it("should find the logo color #FFFFFF", () => {
    cy.get('[data-testid="ny-logo"]')
      .should("exist")
      .invoke("attr", "fill")
      .should("eq", "#FFFFFF");
  });
  // theme button exist
  it("should render the ChangeThemeButton", () => {
    cy.get('[data-testid="change-theme-form-control"]').should("exist");
  });
});
