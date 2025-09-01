import AdminPage from '../support/pages/AdminPage';
const adminPage = new AdminPage();

describe('Admin Page - Search Non-existent User', () => {
  beforeEach(() => {
    cy.session('admin-session', () => {
      cy.loginViaUI();
    });

    cy.visit('/web/index.php/dashboard/index'); 
    adminPage.clickAdminMenu();                 
  });

  it('should show "No Records Found" when searching for a non-existent user', () => {
    adminPage.searchUser('test124');
    adminPage.assertNoRecordsFound();
  });
});