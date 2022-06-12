class LoginPage {
    //Seletores Ou Elementos
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnLogin = '[data-test="login-button"]';
    lblError = '[data-test="error"]';

    //Ações
    typeUsername(username) {
        cy.get(this.txtUsername).type(username);
    }

    typePassword(password) {
        cy.get(this.txtPassword).type(password);
    }

    clickLogin() {
        cy.get(this.btnLogin).click();
    }

    assertErrorShould(type, value){
        cy.get(this.lblError).should(type,value);
    }

    assertErrorContains(text){
        cy.get(this.lblError).contains(text);
    }

    //Funcionalidades
    realizeLogin(username, password){
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
    }
}

export default LoginPage;