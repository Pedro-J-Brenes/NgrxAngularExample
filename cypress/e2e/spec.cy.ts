describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    //cy.url().should('includes','login)
    //cy.get('[formControlName="username"]').type('profanis')
    //cy.get('button').click()
    //cy.url().should('not.include','dashboard')
    cy.contains('app is running!')
  })
  // it('Visits the initial project page', () => {
  //   cy.visit('/')
  //   cy.url().should('includes','login)
  //   cy.get('[formControlName="username"]').type('profanis')
  //   cy.get('[formControlName="password"]').type('secretpass')
  //   cy.get('button').click()
  //   cy.url().should('include','dashboard')
  //   cy.contains('app is running!')
  // })
})
