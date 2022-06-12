class CheckoutInformation{
    txtFirstName = '[data-test="firstName"]';
    txtLastName = '[data-test="lastName"]';
    txtPostal = '[data-test="postalCode"]';
    btnContinue = '[data-test="continue"]';

    typeFirstName(firstname) {
        cy.get(this.txtFirstName).type(firstname);
    }

    typeLastName(lastname) {
        cy.get(this.txtLastName).type(lastname);
    }

    typePostal(postal) {
        cy.get(this.txtPostal).type(postal);
    }

    clickContinue() {
        cy.get(this.btnContinue).click();
    }
    
    realizeCheckout(firstname, lastname, postal){
        this.typeFirstName(firstname);
        this.typeLastName(lastname);
        this.typePostal(postal);
        this.clickContinue();
    }

}

export default CheckoutInformation