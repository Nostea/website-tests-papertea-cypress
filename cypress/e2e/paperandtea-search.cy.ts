describe("User searches for a Product", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
    cy.visit("https://www.paperandtea.de/");
    cy.wait(100);
  });
  context("User can use the searchbar", () => {
    it("click and type Oolong tea in searchbar and display results, navigate to category page ", () => {
      cy.get('.header__secondary-links > .header__icon-list > [href="/search"]').should("exist").click();
      cy.get(".predictive-search__input").should("exist").click().type("Oolong");
      cy.get(":nth-child(1)").should("exist");
      cy.get('.tabs-nav__item-list > [aria-expanded="false"]').should("exist").click();
      // .children() ???
      cy.get(".predictive-search__linklist-link").should("exist").contains("Oolong").click();
      cy.url().should("eq", "https://www.paperandtea.de/collections/oolong-tee?_pos=1&_psq=Oolong&_ss=e&_v=1.0");
    });
  });
});
