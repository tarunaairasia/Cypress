// Simple cypress test to register a new account

describe('Register new account on Para Bank', () => {
  it('should launch home page', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })

  it('should redirect to registration page', () => {
    cy.get('#loginPanel > :nth-child(3) > a')
      .click()
    cy.get('.title').should('contain', 'Signing up is easy!')
  })

  it('should register new account', () => {
    cy.get("input[id='customer.firstName']")
      .type('QA')
    cy.get("input[id='customer.lastName']")
      .type('Test')
    cy.get("input[id='customer.address.street']")
      .type('123 Main St')
    cy.get("input[id='customer.address.city']")
      .type('New York')
    cy.get("input[id='customer.address.state']")
      .type('NY')
    cy.get("input[id='customer.address.zipCode']")
      .type('10001')
    cy.get("input[id='customer.phoneNumber']")
      .type('1234567890')
    cy.get("input[id='customer.ssn']")
      .type('123-45-6789')
    cy.get("input[id='customer.username']")
      .type('qatest')
    cy.get("input[id='customer.password']")
      .type('password')
    cy.get('#repeatedPassword')
      .type('password')
    cy.get("input[value='Register']")
      .click()
    cy.get('#rightPanel > p').should('contain', 'Your account was created successfully. You are now logged in.')
  })

})
