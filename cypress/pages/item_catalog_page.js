class ItemPage{
    lblImg = '#item_4_img_link > .inventory_item_img';

    verifyImg(should) {
        cy.get(this.lblImg).should(should);
    }

    clickImg(){
        cy.get(this.lblImg).click();
    }

    VerifyIfExistImg(){
        this.verifyImg("be.exist");
    }

    selectProduct(){
        this.VerifyIfExistImg(),
        this.clickImg();
    }

}


export default ItemPage;