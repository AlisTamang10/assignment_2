class AdminPage {
  clickAdminMenu() {
    cy.contains('Admin').click();
    cy.url().should('include', '/admin/viewSystemUsers');
  }

  searchUser(username) {
    cy.get('input[placeholder="Type for hints..."]').clear().type(username);
  }

  assertNoRecordsFound() {
    cy.contains('No Records Found').should('be.visible');
  }
}

export default AdminPage;