describe('SauceDemo', () => {

  const username = "standard_user"
  const senha = "secret_sauce"

  beforeEach(() => {
    cy.visit(' https://www.saucedemo.com/')
    cy.wait(1000)
    cy.get('#login_button_container input[name="user-name"]').type(username)
    cy.get('#login_button_container input[name="password"]').type(senha)
    cy.contains('Login').click()
  })

  it('LISTAGEM DE PRODUTOS VÁLIDA - Após o login de um usuário válido, a listagem de produtos deve ser exibida', () => {
    cy.get('.inventory_container').should('be.visible')
  })

  it('LISTAGEM DE PRODUTOS EM ORDEM CRESCENTE DE A-Z - Após o login de um usuário válido, a listagem de produtos deve ser exibida em ordenação crescente', () => {
    cy.get('.inventory_container').then($inventory => {
      const texto = Array.from($inventory).map(item => item.textContent.trim())
      const valoresOrdenados = texto.map(texto => parseFloat(texto)).sort((a, b) => a - b)
      const valoresPagina = texto.map(texto => parseFloat(texto))
      expect(valoresPagina).to.deep.equal(valoresOrdenados)
    })
  })

  it('LISTAGEM DE PRODUTOS EM ORDEM DECRESCENTE DE Z-A - Após o login de um usuário válido, a listagem de produtos deve ser exibida em ordenação decrescente', () => {
    cy.get('.inventory_container').then($inventory => {
      const texto = Array.from($inventory).map(item => item.textContent.trim())
      const valoresOrdenados = texto.map(texto => parseFloat(texto)).sort((b, a) => b - a)
      const valoresPagina = texto.map(texto => parseFloat(texto))
      expect(valoresPagina).to.deep.equal(valoresOrdenados)
    })
  })
    
})