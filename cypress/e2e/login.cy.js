describe('Orange HRM Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')//Visit indica qual o site estou verificando (e qual vamos entrar)
    cy.get("[name='username']").type ('Admin') //O get indica qual o elemento do site que vc irá interagir e o Type, o que irá escrever nesse elemento que está interagindo(campo)
    cy.get("[name='password']").type ('admin123')// Idem ao anterior
    cy.get("[type='submit']").click()//selecionou o botão de entrar com o get e o click indica clicar no botão selecionado pelo get
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')//Precisamos saber se realmente estamos no local de login, para isso usamos o location para indicar se estamos no pathname correto e copiamos esse patname após o should
    cy.get (".oxd-topbar").contains ('Dashboard')//A última forma que utilizamos para checar se estamos no local correto é verificar na página algum elemento que apareça exclusivamente nessa página, nesse caso a palavra Dashboard, verificando atrá do comando Conatains
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type ('xxx')
    cy.get("[name='password']").type ('xxxx')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
})