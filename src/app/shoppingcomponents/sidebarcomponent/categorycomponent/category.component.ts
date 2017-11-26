import { Component, OnInit } from '@angular/core';
import { ShoppingServices } from '../../../Services/avsshoppingservices';

@Component({
    selector: 'category-component',
    templateUrl: './category.view.html'
})

export class CategoryComponent implements OnInit {
   
    categoryList:any[];
    constructor(private csList:ShoppingServices){}
    ngOnInit() {
      
       return this.csList.getCategories().subscribe(results=>{
            this.categoryList=results.result;
            console.log(this.categoryList);
        }); 
    }
}