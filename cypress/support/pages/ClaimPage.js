class ClaimPage {

  getEvents() {
    return cy.request({
      method: "GET",
      url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/events?limit=0&status=true",
    });
  }

  
  assertMedicalReimbursement(response) {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.keys(["data", "meta", "rels"]);

    const medicalReimbursement = response.body.data.find(
      (item) => item.id === 2 && item.name === "Medical Reimbursement"
    );
    expect(medicalReimbursement).to.not.be.undefined;
  }
}

export default ClaimPage;
