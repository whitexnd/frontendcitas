describe('Carga Citas', () => {
  it('Navega hasta citas', () => {
    cy.visit('/')  // Visita la página de inicio de tu aplicación

    cy.get('.navbar').should('contain', 'Citas')
    cy.get('.nav-link').contains('Citas').click()
    cy.get('.dropdown-item').contains('Ver Citas').click()
    cy.url().should('include', '/vercitas')
    cy.get('table').find('tr').should('have.length.greaterThan', 2)
    
    /*
    cy.visit('/citas')
    cy.get('h2').should('contain', 'Crear Cita')
    */
  })
})