describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://www.qwant.com/');
    cy.log('I am on qwant website');
    cy.url().should('include', 'qwant');
    cy.get('input')
      .type('my search term')
      .should('have.value', 'my search term');
    cy.get('[type=Submit]').click();
    cy.get('[href="https://www.linguee.fr/anglais-francais/traduction/search+term.html"]').first().click();
    cy.origin('https://www.linguee.fr', () => {
      cy.get('#accept-choices').first().click();
      cy.url().should('include', 'linguee');
      cy.contains('DeepL');
    })

  })
})