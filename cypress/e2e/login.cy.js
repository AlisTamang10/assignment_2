describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});

describe('Session Setup', () => {
  it.only('Logs in once and stores session cookie', () => {
    cy.loginOnce();
  });
});
