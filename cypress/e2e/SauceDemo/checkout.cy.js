import LoginPage from '../../pages/login_page'
import CartPage from '../../pages/cart_page';
import CheckoutInformation from '../../pages/checkout_information_page';
import CheckoutOverview from '../../pages/checkout_overview_page';

var loginPage = new LoginPage();
var cartPage = new CartPage();
var checkoutInformation = new CheckoutInformation();
var checkoutOverview = new CheckoutOverview();

describe("Checkout",()=>{
    
    beforeEach(()=>{
        cy.visit("www.saucedemo.com/");
        loginPage.realizeLogin("standard_user", "secret_sauce");
        cartPage.shoppingCart();
    });

    it("Cadastro e Compra Finalizada",()=>{
       checkoutInformation.realizeCheckout("Mariana","Thomaz","14800000");
       checkoutOverview.realizeFinish();
    });

 });