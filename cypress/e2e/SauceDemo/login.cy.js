import LoginPage from '../../pages/login_page'
import ProductsPage from '../../pages/products_page';

var loginPage = new LoginPage();
var productsPage = new ProductsPage();

describe("Funcionalidade de login",()=>{
    
    beforeEach(()=>{
        cy.visit("www.saucedemo.com/");
    });
    
    it("Login com sucesso",()=>{

        loginPage.realizeLogin("standard_user", "secret_sauce");
        productsPage.verifyIfExistProducts();

    });

    it("Login com falha login incorreto",()=>{
        
        loginPage.realizeLogin("testeuser","123teste");
        loginPage.assertErrorContains("Username and password do not match");//Mesmo que o should
      
    });

    it("Login com falha senha incorreta",()=>{

        loginPage.realizeLogin("standard_user","123teste");
        loginPage.assertErrorShould("contain.text","Username and password do not match"); //Mesmo que o contains
   
    });

 
});