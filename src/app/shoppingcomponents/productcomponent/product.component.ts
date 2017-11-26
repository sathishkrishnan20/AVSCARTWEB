import { Component, OnInit } from '@angular/core';
import { ShoppingServices } from '../../Services/avsshoppingservices';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewProductComponent } from '../viewproductcomponent/viewproduct.component';

@Component({
    selector: 'product-component',
    templateUrl: 'product.view.html',
    //styleUrls: ['progress-spinner-configurable-example.css']
})

export class ProductComponent implements OnInit {
    
    productList:any[];
    productDetails: any[];
    
    constructor(private pList:ShoppingServices, public dailog: MatDialog){}
    ngOnInit() {
      
       return this.pList.getProducts().subscribe(results=>{
            this.productList=results.result;
            console.log(this.productList);
        }); 
    }
    getProductById(productId:any) {
        
        return this.pList.getProductById(productId).subscribe(results=>{
            this.productDetails=results.result;
            console.log(this.productDetails);
        });
    }

    
    openDialog(){
         console.log('opening ')  
        let dialogRef = this.dailog.open(ViewProductComponent, {
            width : '600px',
            data : 'this is the text passed into dailough'
        });
    
        dialogRef.afterClosed().subscribe(result => {
            console.log('dailoug closed' + {result})
        })
   } 
    
    
}
