describe('SauceDemo', () => {

    const username = "standard_user"
    const senha = "secret_sauce"

    beforeEach(() => {
        cy.visit(' https://www.saucedemo.com/')
        cy.wait(1000)
    })

    it('LOGIN VÁLIDO - Credenciais válidas, levam a tela de páginação de produtos', () => {
        cy.get('#login_button_container input[name="user-name"]').type(username)
        cy.get('#login_button_container input[name="password"]').type(senha)
        cy.contains('Login').click()
    })

    it('LOGIN COM SENHA INVÁLIDA - Username válido e senha inválida, retornam erro', () => {
        cy.get('#login_button_container input[name="user-name"]').type(username)
        cy.get('#login_button_container input[name="password"]').type('senha_incorreta')
        cy.contains('Login').click()
        cy.contains('Username and password do not match').should('be.visible')
    })

    it('LOGIN COM USUÁRIO BLOQUEADO - Username bloqueado e senha válida, retornam erro', () => {
        cy.get('#login_button_container input[name="user-name"]').type('locked_out_user')
        cy.get('#login_button_container input[name="password"]').type(senha)
        cy.contains('Login').click()
        cy.contains('Sorry, this user has been locked out').should('be.visible')
    })

    it('LOGIN COM CAMPOS VAZIOS - Credenciais vazias, retornam erro', () => {
        cy.get('#login_button_container input[name="user-name"]').type(' ')
        cy.get('#login_button_container input[name="password"]').type(' ')
        cy.contains('Login').click()
        cy.contains('Username and password do not match').should('be.visible')
    })
    
})