describe("test quiz", () => {
  it("test quiz", () => {
    cy.visit("https://quizzical-app-scrimba.netlify.app/");
    cy.get("#root > div > main > section:nth-child(1)>select").select("1");
    cy.get("#root > div > main > section:nth-child(2)>select").select(
      "General Knowledge"
    );
    cy.get("#root > div > main > section:nth-child(3)>select").select("Hard");
    cy.get("#root > div > main > section:nth-child(4)>select").select(
      "Any Type"
    );
    cy.get("button", { name: /start quiz/i }).click();
    cy.get(
      "#root > div > section:nth-child(2) > section:nth-child(2)>div:nth-child(2)"
    ).click();
    cy.get("button", { name: /check answers/i }).click();
    cy.get("button", { name: /try again/i }).click();
  });
});
