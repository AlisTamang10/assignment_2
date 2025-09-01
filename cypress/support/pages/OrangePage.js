class OrangePage {
  visitLoginPage() {
    cy.visit("/web/index.php/auth/login");
  }

  assertLoginPageResponsive() {
    cy.viewport("iphone-6"); 

  
    cy.get(".orangehrm-login-branding").should("be.visible");
    cy.get(".orangehrm-login-form").should("be.visible");
    cy.get('input[name="username"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");

    
    cy.get(".orangehrm-login-layout-blob").should("exist");
  }


  login(username = "Admin", password = "admin123") {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

  
    cy.url().should("include", "/dashboard");
  }

 
  assertDashboardResponsive() {
    cy.viewport("iphone-6");

 
    cy.get(".oxd-topbar-header-breadcrumb").should("be.visible");
    // cy.get(".oxd-topbar-body-nav").should("not.be.visible"); 
    cy.get(".oxd-userdropdown-tab").should("be.visible");
    // cy.get(".orangehrm-main-content").should("be.visible");
  }
}

module.exports = new OrangePage();
