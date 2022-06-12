import CartPage from "../../pages/cart_page"
import LoginPage from "../../pages/login_page"

var cartPage = new CartPage();
var loginPage = new LoginPage();

describe("Funcionalidade de Carrinho",()=>{

    beforeEach(()=>{
        cy.visit("www.saucedemo.com/");
        loginPage.realizeLogin("standard_user","secret_sauce");
    });

    it("Adicionar item do carrinho",()=>{
        cartPage.verifyIfExistAdd(),
        cartPage.shoppingCart();
    });
});
