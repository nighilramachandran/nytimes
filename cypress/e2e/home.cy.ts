describe("Home Page spec", () => {
  // visit the page
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // find out the background
  it("should have background color #101010", () => {
    cy.get("body")
      .invoke("css", "background-color")
      .should("eq", "rgb(16, 16, 16)");
  });
  // find out the logo exist
  it("should find the NY Logo SVG", () => {
    cy.get('[data-testid="ny-logo"]').should("exist");
  });
  // find out the logo color
  it("should find the logo color #FFFFFF", () => {
    cy.get('[data-testid="ny-logo"]')
      .should("exist")
      .invoke("attr", "fill")
      .should("eq", "#FFFFFF");
  });
  // find the theme change button exist
  it("should render the ChangeThemeButton", () => {
    cy.get('[data-testid="change-theme-form-control"]').should("exist");
  });
  // find if toggle is working
  it("should toggle theme mode on switch change and find background color #F5F8FE", () => {
    cy.get('[data-testid="change-theme-form-control"]').within(() => {
      cy.get('input[type="checkbox"]').click();
    });

    cy.wait(500);

    cy.get("body")
      .invoke("css", "background-color")
      .should("eq", "rgb(245, 248, 254)");
  });
  // find the logo color after the toggle
  it("should find the logo color #000000 after toggling theme", () => {
    cy.get('[data-testid="change-theme-form-control"]').within(() => {
      cy.get('input[type="checkbox"]').click();
    });

    cy.wait(500);

    cy.get('[data-testid="ny-logo"]')
      .should("exist")
      .invoke("attr", "fill")
      .should("eq", "#000000");
  });
  // find the background while initial state again
  it("should toggle theme back to initial state and find background color #101010", () => {
    cy.get('[data-testid="change-theme-form-control"]').within(() => {
      cy.get('input[type="checkbox"]').click().click();
    });

    cy.wait(500);

    cy.get("body")
      .invoke("css", "background-color")
      .should("eq", "rgb(16, 16, 16)");
  });
  // find the logo color
  it("should find the logo color #FFFFFF after toggling theme back", () => {
    cy.get('[data-testid="change-theme-form-control"]').within(() => {
      cy.get('input[type="checkbox"]').click().click();
    });

    cy.wait(500);

    cy.get('[data-testid="ny-logo"]')
      .should("exist")
      .invoke("attr", "fill")
      .should("eq", "#FFFFFF");
  });
  // find the articles exist
  it("renders articles and checks for indices from 1 to 20", () => {
    cy.get('[data-testid^="article-index-"]').should("have.length.above", 0);
    for (let i = 0; i < 20; i++) {
      cy.get(`[data-testid="article-index-${i}"]`).should("exist");
    }
  });
});
