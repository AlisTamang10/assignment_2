import AdminPage from '../support/pages/AdminPage';
import LoginPage from '../support/pages/LoginPage.js';
const adminPage = new AdminPage();
const loginPage = new LoginPage();

describe('Admin Page - Search Non-existent User', () => {
  beforeEach(() => {
    
    loginPage.login("Admin", "admin123");
    cy.url().should('include', '/dashboard');

    cy.visit('/web/index.php/dashboard/index'); 
    adminPage.clickAdminMenu();                 
  });

  it('should show "No Records Found" when searching for a non-existent user', () => {
    adminPage.searchUser('test124');
    adminPage.assertNoRecordsFound();
  });
});