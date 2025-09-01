/// <reference types="cypress" />
import LoginPage from '../support/pages/LoginPage.js';
import RecruitmentPage from '../support/pages/RecruitmentPage.js';

describe("Add Candidate in OrangeHRM - POM", () => {
    const loginPage = new LoginPage();
    const recruitmentPage = new RecruitmentPage();

    before(() => {
       
        loginPage.login("Admin", "admin123");
        cy.url().should('include', '/dashboard');
    });

    it("Add a candidate using JSON data", () => {
        cy.fixture("candidateData.json").then((candidate) => {
            recruitmentPage.goToRecruitment();
            recruitmentPage.clickAdd();
            recruitmentPage.fillCandidateForm(candidate);
            recruitmentPage.submitForm();
            recruitmentPage.verifyCandidateAdded(candidate.firstName);
        });
    });
});
