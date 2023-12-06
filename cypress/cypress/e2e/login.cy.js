describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('login test', () => {
    cy.contains('Log in').click()
    cy.get('#mail').type('test@test.com')
    cy.get('#pass').type('test')
    cy.get('[type=submit]').click()
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })
  it('test empty email', ()=>{
    cy.contains("Log in").click();
    cy.get("#mail").type(" ");
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#mail")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле.");
  })
  it('test empty pass', ()=>{
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  })
})