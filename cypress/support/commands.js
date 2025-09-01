// Cypress.Commands.add('restoreSessionFromCookies', () => {
//   cy.fixture('cookies.json').then((cookies) => {
//     cookies.forEach((cookie) => {
//       // restore only valid cookies
//       cy.setCookie(cookie.name, cookie.value, {
//         domain: cookie.domain,
//         path: cookie.path,
//         secure: cookie.secure,
//         httpOnly: cookie.httpOnly
//         // skip expiry to avoid invalid cookie issues
//       });
//     });
//   });
// });
import 'cypress-file-upload';
import LoginPage from './pages/LoginPage.js';

// Cypress.Commands.add('loginViaUI', () => {
//   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   cy.get('input[name="username"]').type('Admin');
//   cy.get('input[name="password"]').type('admin123');
//   cy.get('button[type="submit"]').click();
//   cy.url().should('include', '/dashboard');
// });



Cypress.Commands.add('loginOnce', () => {
  cy.fixture('users').then(({ validUser }) => {
    const loginPage = new LoginPage();
    loginPage.visit();
    loginPage.login(validUser.username, validUser.password);

    cy.getCookie('orangehrm').then((cookie) => {
      cy.writeFile('cypress/fixtures/session.json', cookie);
    });
  });
});

Cypress.Commands.add('restoreSession', () => {
  cy.readFile('cypress/fixtures/session.json').then((cookie) => {
    cy.setCookie(cookie.name, cookie.value);
  });
});


const XLSX = require('xlsx');

Cypress.Commands.add('readExcelFile', (filePath) => {
  return cy.task('readExcelFile', filePath);
});

Cypress.Commands.add('writeToExcel', (data, filePath) => {
  return cy.task('writeToExcel', { data, filePath });
});
