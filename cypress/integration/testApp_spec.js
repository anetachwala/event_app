describe("Event App Test", () => {
  it("Testing adding and deleting events", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="Header"]')
      .should("contain", "0")
      .then(() => {
        cy.get("[data-cy=AddEvent]")
          .click()
          .then(() => {
            cy.contains("Event form");
            cy.get("[data-cy=FirstName]").type("Amadeus");
            cy.get("[data-cy=SecondName]").type("Mozart");
            cy.get("[data-cy=Email]").type("amadeusmozart@email.com");
            cy.get("[data-cy=Date]")
              .type("2021-12-24")
              .then(() => {
                cy.get("[data-cy=SubmitForm]")
                  .click()
                  .then(() => {
                    cy.get('[data-cy="Header"]')
                      .should("contain", "1")
                      .then(() => {
                        cy.get("[data-cy=Event]")
                          .should("contain", "Amadeus Mozart")
                          .and("contain", "amadeusmozart@email.com")
                          .and("contain", "2021-12-24")
                          .then(() => {
                            cy.get("[data-cy=DeleteEvent]")
                              .click()
                              .then(() => {
                                cy.get('[data-cy="Header"]').should(
                                  "contain",
                                  "0"
                                );
                              });
                          });
                      });
                  });
              });
          });
      });
  });
});
