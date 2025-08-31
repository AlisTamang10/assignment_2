


Cypress.Commands.add('loginAndSaveCookie', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.get('input[name="username"]').type('Admin'); 
  cy.get('input[name="password"]').type('admin123'); 
  cy.get('button[type="submit"]').click();

  cy.url().should('not.include', '/auth/login');

  cy.getCookie('orangehrm').then(cookie => {
    expect(cookie).to.exist;
    cy.writeFile('cypress/fixtures/cookie.json', cookie).then(() => {
      
      cy.readFile('cypress/fixtures/cookie.json').then(savedCookie => {
        expect(savedCookie).to.have.property('name', 'orangehrm');
        expect(savedCookie).to.have.property('value', cookie.value);
      });
    });
  });
});