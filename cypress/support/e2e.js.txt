import './commands'

cy.loginWith({
  email: 'user@example.org',
  password: 'this is my password'
})
  .url()
  .should('eq', '/')
  .window().its('localStorage.email')
  .should('eq', 'user@example.org')