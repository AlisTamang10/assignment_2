import AdminPage from '../support/pages/AdminPage';
const adminPage = new AdminPage();

describe('Admin Page - Search Non-existent User', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');      // Start from login page
    cy.restoreSessionFromCookies();             // Restore cookies
    cy.reload();                                // Activate session
    cy.url().should('include', '/dashboard');   // Confirm session is valid
  });

  it.only('should navigate to Admin via UI and search for a non-existent user', () => {
    cy.contains('Admin').click();               // Click Admin from sidebar
    cy.url().should('include', '/admin/viewSystemUsers'); // Confirm Admin page

    adminPage.searchUser('test124');
    adminPage.assertNoRecordsFound();
  });
});