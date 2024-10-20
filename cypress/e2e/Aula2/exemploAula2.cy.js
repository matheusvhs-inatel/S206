/// <reference = cypress >

describe('teste registro e login', () => {
  it.skip('teste criação usuario', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Matheus')
    cy.get('#Text1').type('Matheus')
    cy.get('#username').type('Matheus')
    cy.get('#password').type('123456')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain', 'Registration successful')
  })

  it.skip('teste criação usuario com falha', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Matheus')
    cy.get('#Text1').type('Matheus')
    cy.get('#username').type('Matheus')
    cy.get('.btn-primary').should('be.disabled')
  })

  it.skip('teste login com sucesso', () => {
    let infos = criarUsuario()
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', infos[0])
  })

  it.skip("teste de deletar usuario", () => {
    let infos = criarUsuario()
    cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain', 'Username or password is incorrect')

  })

  it("teste de deletar usuario commands", () => {
    let infos = criarUsuario()
    cy.login(infos[0], infos[1])
    cy.get('.ng-binding > a').click()
    cy.get('.btn').click()
    cy.login(infos[0], infos[1])
    cy.get('.ng-binding').should('have.text', 'Username or password is incorrect')

  })

})

function criarUsuario() {
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundo = new Date().getSeconds().toString()
  let ID = hora + minuto + segundo + "ID"
  let senha = hora + minuto + segundo + "Senha"
  let infos = [ID, senha]

  cy.visit('https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain', 'Registration successful')

  return infos
}