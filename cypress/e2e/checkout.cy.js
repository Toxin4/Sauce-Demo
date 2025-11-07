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

  it('ADIÇÃO DE PRODUTO AO CARRINHO - Após o login de um usuário válido, em uma listagem de produtos, o produto pode ser adicionado ao carrinho', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.contains('1').should('be.visible')
  })

  it('ADIÇÃO DE 2 PRODUTOS AO CARRINHO - Após o login de um usuário válido, em uma listagem de produtos, mais de um produto pode ser adicionado ao carrinho', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.contains('2').should('be.visible')
  })

  it('REMOÇÃO DE PRODUTO DO CARRINHO - Após o login de um usuário válido, em uma listagem de produtos, um produto anteriormente adicionado ao carrinho, pode ser removido', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#remove-sauce-labs-backpack').click()
    cy.contains('0').should('be.visible')
  })

  it.only('VISUALIZAÇÃO DE PRODUTO NO CARRINHO - Após o login de um usuário válido, em uma listagem de produtos, um produto adicionado ao carrinho, pode ser visualizado na página do carrinho', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').click()
    cy.contains('Remove').should('be.visible')
  })
    
})