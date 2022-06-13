class ProductsPage{
    lblProducts = ".title";
    lblItem1 = '#item_4_img_link > .inventory_item_img';
    lblValueItem1 = ':nth-child(1) > .inventory_item_description';
    lblInventoryItem1 = '.inventory_item_price';

    verifyValue(){
        cy.get(this.lblValueItem1).find(this.lblInventoryItem1).invoke("text").then((element)=>{
        cy.log(element);
        })
    }    

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
    verifyIfExistItem1(){
        this.verifyItem1("be.exist");
    }
    verifyIfExistValue(){
        this.verifyValue("be.exist");
    }

    selectProduct(){
        this.verifyIfExistItem1("be.exist"),
        this.clickItem1();
    }
    verifyingValueProductsItem1(){
        this.verifyIfExistValue();
    }
}
export default ProductsPage