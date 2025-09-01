class LoginPage {
    visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    enterUsername(username) {
        cy.get("input[name='username']").type(username);
    }

    enterPassword(password) {
        cy.get("input[name='password']").type(password);
    }

    submit() {
        cy.get("button[type='submit']").click();
    }

    login(username, password) {
        this.visit();
        this.enterUsername(username);
        this.enterPassword(password);
        this.submit();
    }
}

export default LoginPage;
