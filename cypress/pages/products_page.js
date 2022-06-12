class ProductsPage{
    lblProducts = ".title";
    lblItem1 = '#item_4_img_link > .inventory_item_img';

    verifyProducts(should){
        cy.get(this.lblProducts).should(should);
    }

    verifyItem1(should) {
        cy.get(this.lblItem1).should(should);
    }

    clickItem1(){
        cy.get(this.lblItem1).click();
    }

    verifyIfExistProducts(){
        this.verifyProducts("be.exist");
    }

    VerifyIfExistItem1(){
        this.verifyItem1("be.exist");
    }

    selectProduct(){
        this.VerifyIfExistItem1(),
        this.clickItem1();
    }

}
export default ProductsPage