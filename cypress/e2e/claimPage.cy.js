/// <reference types="cypress" />

import ClaimPage from "../support/pages/ClaimPage";
const claimPage = new ClaimPage();

beforeEach(() => {
 
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  cy.fixture("cookies.json").then((cookies) => {
    cookies.forEach((cookie) => {
      cy.setCookie(cookie.name, cookie.value, {
        domain: cookie.domain,
        secure: cookie.secure,
      });
    });
  });
  cy.reload();
  cy.url().should("include", "/dashboard");
});

describe("Claim Page - API Validation", () => {
  it("should verify claim events and Medical Reimbursement", () => {
   
    claimPage.getEvents().then((response) => {
      claimPage.assertMedicalReimbursement(response);
    });
  });
});
