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
      cy.get("#product-card-image-40808278458636").should("exist").click();
      cy.get(".product_info__main-prices").should("exist");
      cy.get(".product_info__secondary-prices > :nth-child(1)").should("exist");
      cy.get(".product_info__buy-buttons > .product_info__shipping").should("exist");
      //cy.get(".product_quantity_selector").select("2");
      cy.get("#AddToCart").should("exist").click();
    });
  });
});
