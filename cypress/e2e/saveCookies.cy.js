describe('Login and Save Cookies', () => {
  it('should log in and save session cookies', () => {
    cy.visit('/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('.oxd-button').click();
    cy.url().should('include', '/dashboard');

    cy.getCookies().then((cookies) => {
      cy.writeFile('cypress/fixtures/cookies.json', JSON.stringify(cookies));
    });
  });
});