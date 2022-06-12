import ItemPage from "../../pages/item_catalog_page"
import LoginPage from "../../pages/login_page"

var itemPage = new ItemPage();
var loginPage = new LoginPage();

describe("Funcionalidade tela do produto",()=>{

    beforeEach(()=>{
        cy.visit("www.saucedemo.com/");
        loginPage.realizeLogin("standard_user","secret_sauce");
    });

    it("Visualizar tela do produto",()=>{
        itemPage.selectProduct();
    });
});