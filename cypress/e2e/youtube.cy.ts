describe(" user's first visit to Youtube", () => {
  context("Cookies", () => {
    it("Cookie dialog exists and is displayed properly", () => {
      cy.visit("https://www.youtube.com/");
      cy.wait(100);
      cy.get("#dialog").should("exist");
      cy.get("#icon-container > #logo-icon").should("exist");
      cy.get(".lang-picker-container").should("exist");
      cy.get(".signin").should("exist");
      cy.get(".legal-text").should("exist");
      cy.get(".eom-buttons > :nth-child(2)").should("exist");
      cy.get(".eom-buttons > :nth-child(1").should("exist").click();
    });
  });
});
