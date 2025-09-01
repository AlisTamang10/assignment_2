const OrangePage = require("../support/pages/OrangePage");

describe("OrangeHRM Mobile Responsiveness Tests", () => {

  it("Login page should be responsive on mobile", () => {
    OrangePage.visitLoginPage();
    OrangePage.assertLoginPageResponsive();
  });

  it("Dashboard should be responsive after login", () => {
    OrangePage.visitLoginPage();
    OrangePage.login(); 
    OrangePage.assertDashboardResponsive();
  });
});
