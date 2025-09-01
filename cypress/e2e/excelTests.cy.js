describe("Read data from Excel file in Cypress", () => {
  it("should use Excel data to perform login tests", () => {
    cy.readExcelFile("testData.xlsx").then((data) => {
      data.forEach((row) => {
        cy.visit("https://freelance-learn-automation.vercel.app/login");
        cy.get('input[name="email1"]').type(row.email);
        cy.get('input[name="password1"]').type(row.password);
        cy.get('button[type="submit"]').click();

        if (row.expected === "success") {
          cy.contains("Manage").should("be.visible");
        } else {
          cy.contains("USER Email Doesn't Exist").should("be.visible");
        }
    
      });
    });
  });

  it('should log test results to Excel file', () => {
    const testResults = [
      { testName: 'Login Test 1', status: 'Passed' },
      { testName: 'Login Test 2', status: 'Failed' },
      { testName: 'Signup Test', status: 'Passed' }
    ];

    cy.writeToExcel(testResults, 'testResults.xlsx');
  });
});

