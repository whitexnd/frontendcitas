describe('Crear Citas', () => {
  it('Prueba guardar citas', () => {
    cy.visit('/')

    // Navega hasta la página de creación de citas
    cy.get('.navbar').should('contain', 'Citas')
    cy.get('.nav-link').contains('Citas').click()
    cy.get('.dropdown-item').contains('Crear Citas').click()
    cy.url().should('include', '/citas')
    cy.get('h2').should('contain', 'Crear Cita')

    // Comprueba si el botón de guardar está deshabilitado
    cy.get('button').contains('Guardar').should('be.disabled')

    // Rellena el formulario
    cy.get('form').get('#motivoCita').type('Dolor de pie')
    cy.get('form').get('#pacienteNSS').select('12367')
    cy.get('form').get('#medicoNumColegiado').select('22')
    cy.get('form').get('#fechaHora').type('2017-06-01T08:30')

    // Comprueba si el botón de guardar está habilitado
    cy.get('button').contains('Guardar').should('be.enabled')

    // Guarda la cita
    cy.get('button').contains('Guardar').click()

    // Comprueba si redirige a la página de ver citas
    cy.url().should('include', '/vercitas')

    // Comprueba si la inserción en la tabla es correcta
    cy.get('table').find('tr').should('have.length.greaterThan', 2)
    cy.get('table').find('tr').last().find('td').eq(2).should('contain', 'Dolor de pie')
    cy.get('table').find('tr').last().find('td').eq(3).should('contain', '12367')
    cy.get('table').find('tr').last().find('td').eq(4).should('contain', '22')
    cy.get('table').find('tr').last().find('td').eq(1).should('contain', '01/06/2017 08:30')

  })
})