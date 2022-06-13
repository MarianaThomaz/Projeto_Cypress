import ItemPage from "../../pages/item_catalog_page"
import LoginPage from "../../pages/login_page"
import ProductsPage from "../../pages/products_page";

var itemPage = new ItemPage();
var loginPage = new LoginPage();
var productsPage = new ProductsPage();

describe("Funcionalidade Produto",()=>{

    beforeEach(()=>{
        cy.visit("www.saucedemo.com/");
        loginPage.realizeLogin("standard_user","secret_sauce");
    });

    it("Visualizar tela do produto",()=>{
        itemPage.selectProduct();
    });

    it("Verifica o valor na vitrine", ()=>{
        productsPage.selectProduct();
        itemPage.verifyingValueItem();
    });

    it("Verifica o valor na tela do produto", ()=>{
        productsPage.verifyingValueProductsItem1();
    });
});