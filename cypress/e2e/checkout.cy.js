describe('SauceDemo', () => {

  const username = "standard_user"
  const senha = "secret_sauce"
  const nome = "Ciclano"
  const sobrenome = "dos Santos"
  const codigoPostal = "53741-561"

  beforeEach(() => {
    cy.visit(' https://www.saucedemo.com/')
    cy.wait(1000)
    cy.get('#login_button_container input[name="user-name"]').type(username)
    cy.get('#login_button_container input[name="password"]').type(senha)
    cy.contains('Login').click()
    cy.wait(1000)
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#shopping_cart_container').click()
  })

  it('PRENCHER DADOS VÁLIDOS - Preenchendo dados válidos, no checkout manda para a página de revisão', () => {
    cy.get('#checkout').click();
    cy.get('#first-name').type(nome);
    cy.get('#last-name').type(sobrenome);
    cy.get('#postal-code').type(codigoPostal);
    cy.get('#continue').click();
    cy.contains('Checkout: Overview').should('be.visible')
  })

  it('CAMPOS VAZIOS - Campos vazios, retornam erro', () => {
    cy.get('#checkout').click();
    cy.get('#continue').click();
    cy.contains('Error').should('be.visible')
  })
    
  it('FINALIZAR COMPRA - Exibe mensagem agradecendo a compra', () => {
    cy.get('#checkout').click();
    cy.get('#first-name').type(nome);
    cy.get('#last-name').type(sobrenome);
    cy.get('#postal-code').type(codigoPostal);
    cy.get('#continue').click();  
    cy.get('#finish').click();
    cy.contains('Thank you for your order').should('be.visible')
  })

  it.only('CANCELAR COMPRA - Cancela a compra e manda novamente para a tela de listagem de produtos', () => {
    cy.get('#checkout').click();
    cy.get('#first-name').type(nome);
    cy.get('#last-name').type(sobrenome);
    cy.get('#postal-code').type(codigoPostal);
    cy.get('#continue').click();  
    cy.get('#cancel').click();
    cy.get('.inventory_container').should('be.visible')
  })

})