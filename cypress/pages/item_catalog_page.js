class ItemPage{
    lblImg = '#item_4_img_link > .inventory_item_img';
    lblValueItem = '.inventory_details_desc_container';
    lblValueItem29 = '.inventory_details_price';

    verifyValueItem(){
        cy.get(this.lblValueItem).find(this.lblValueItem29).invoke("text").then((element)=>{
            cy.log(element);
        })
    }
    verifyImg(should) {
        cy.get(this.lblImg).should(should);
    }

    clickImg(){
        cy.get(this.lblImg).click();
    }

    verifyIfExistImg(){
        this.verifyImg("be.exist");
    }
    verifyIfExistValueItem(){
        this.verifyValueItem("be.exist");
    }

    selectProduct(){
        this.verifyIfExistImg(),
        this.clickImg();
    }
    verifyingValueItem(){
        this.verifyIfExistValueItem();
    }

}


export default ItemPage;