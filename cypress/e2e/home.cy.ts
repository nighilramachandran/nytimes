describe("Home Page spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });
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
  // select button exist
  it("should render the select exist", () => {
    cy.get('[data-testid="form-control-select"]').should("exist");
  });
  // background color check
  it("should toggle theme mode on switch change and find background color #F5F8FE", () => {
    cy.get('[data-testid="change-theme-form-control"]').within(() => {
      cy.get('input[type="checkbox"]').click();
    });

    // Wait for the background color change
    cy.get("body")
      .should("have.css", "background-color")
      .and("eq", "rgb(245, 248, 254)");
  });
  // logo color check
  it("should find the logo color #000000 after toggling theme", () => {
    cy.get('[data-testid="change-theme-form-control"]').within(() => {
      cy.get('input[type="checkbox"]').click();
    });

    // Wait for the logo color change
    cy.get('[data-testid="ny-logo"]')
      .should("exist")
      .invoke("attr", "fill")
      .should("eq", "#000000");
  });
  // check initial state
  it("should toggle theme back to initial state and find background color #101010", () => {
    cy.get('[data-testid="change-theme-form-control"]').within(() => {
      cy.get('input[type="checkbox"]').click().click();
    });

    // Wait for the background color to revert
    cy.get("body")
      .should("have.css", "background-color")
      .and("eq", "rgb(16, 16, 16)");
  });
  // check logo color
  it("should find the logo color #FFFFFF after toggling theme back", () => {
    cy.get('[data-testid="change-theme-form-control"]').within(() => {
      cy.get('input[type="checkbox"]').click().click();
    });

    // Wait for the logo color to revert
    cy.get('[data-testid="ny-logo"]')
      .should("exist")
      .invoke("attr", "fill")
      .should("eq", "#FFFFFF");
  });
  // check articles
  it("renders articles and checks for indices from 1 to 20", () => {
    // Wait for articles to load
    cy.wait(2000);

    // Check if at least one article is rendered
    cy.get('[data-testid^="article-index-"]').should("have.length.above", 0);

    // Check specific articles by index
    for (let i = 0; i < 20; i++) {
      cy.get(`[data-testid="article-index-${i}"]`).should("exist");
    }
  });
});
