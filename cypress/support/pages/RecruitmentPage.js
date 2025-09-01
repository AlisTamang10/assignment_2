class RecruitmentPage {
    goToRecruitment() {
        cy.get("a[href*='/recruitment']").click();
    }

    clickAdd() {
        
        cy.contains("button", "Add").click(); 

    }

    fillCandidateForm(candidate) {
        cy.get("input[name='firstName']").type(candidate.firstName);
        cy.get("input[name='middleName']").type(candidate.middleName);
        cy.get("input[name='lastName']").type(candidate.lastName);
        cy.get("input[placeholder='Type here']").first().type(candidate.email);
        // cy.get("input[placeholder='Type here']").type(candidate.email);
        // cy.get("input[name='contactNo']").type(candidate.contactNo);
        

       
        cy.get("input[type='file']").attachFile(candidate.resumePath);
    }

    submitForm() {
        cy.get("button[type='submit']").click();
    }

    verifyCandidateAdded(firstName) {
        cy.get("button").contains("Shortlist").should("be.visible")
            .and("have.css", "background-color", "rgb(0, 128, 0)");
        cy.contains(firstName).should("be.visible");
    }
}

export default RecruitmentPage;
