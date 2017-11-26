import {Injectable} from '@angular/core';
import {HttpModule, Http, RequestOptions, Response, JsonpModule} from '@angular/http';
import {Observable} from 'rxjs/Rx';//reactive extensions
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import * as data from './config.json';
//const word = (<any>data).BaseUrl;
//console.log(word);

@Injectable()
export class ShoppingServices {
    
    
    
    avsGetCategoriesUrl = "http://ayyavaikundaswamy.com/avs/onlineShoppingServices/getCategories.php";
    avsProductListUrl = "http://ayyavaikundaswamy.com/avs/onlineShoppingServices/viewProductLst.php";
    avsGetProductById = "http://ayyavaikundaswamy.com/avs/onlineShoppingServices/viewProductById.php";
    constructor(private httpRequest:Http){}
    public showSpinner: boolean = false;
    
    getCategories(){
         
       return this.httpRequest.get(this.avsGetCategoriesUrl)
        .map((response:Response)=>response.json()
        ).catch(this.handleError);
    }
    getProducts(){
        this.showLoadingSpinner();
        var params = {
            "categorySearch" : 'All'
        }
       return this.httpRequest.post(this.avsProductListUrl, params)
        .map((response:Response)=> { 
           this.hideLoadingSpinner();
           return response.json()
        }).catch(this.handleError);
    }

    getProductById(productId){
        this.showLoadingSpinner();
        var params = {
            "id" : productId
        }
       return this.httpRequest.post(this.avsGetProductById, params)
        .map((response:Response)=> { 
           this.hideLoadingSpinner();
           return response.json()
        }).catch(this.handleError);
    }

    handleError(error:any){
        return null;
    }
    showLoadingSpinner() {
        this.showSpinner = true;
    }
    
    hideLoadingSpinner() {
        this.showSpinner = false;
    }    
}
