describe("User's first visit to Paper&Tea", () => {
  beforeEach(() => {
    cy.viewport(1600, 900);
  });
  context("User visits for the first time and wants to buy tea and chocolate", () => {
    it("User rejects cookies and selects items", () => {
      cy.visit("https://www.paperandtea.de/");
      cy.wait(100);
      cy.get("#CybotCookiebotDialogHeader").should("exist");
      cy.get("#CybotCookiebotDialogPoweredbyCybot").should("exist");
      cy.get("#CybotCookiebotDialogBodyEdgeMoreDetailsLink").should("exist").click();
      cy.get("#CybotCookiebotDialogBodyButtonDecline").should("exist").click();
      cy.get(".scroller .product-card").first().should("exist").click();
      cy.get(".product_info__main-prices").should("exist");
      cy.get(".product_info__secondary-prices > :nth-child(1)").should("exist");
      cy.get(".product_info__buy-buttons > .product_info__shipping").should("exist");
      cy.get(".product_quantity_selector").first().click();

      cy.get("#AddToCart").should("exist").click();
      cy.get(".drawer__content").should("exist");
      cy.get(".quantity-selector__button").last().should("exist").click();
      cy.wait(100);
      cy.get(".checkout-button").should("exist").click();
      cy.wait(100);
      cy.url().should("contain", "https://www.paperandtea.de/checkouts");
      cy.get("#ReductionsInput0").should("exist").type("RABATT20");
      cy.get("#Form0").find("button").click();
    });
  });
});
