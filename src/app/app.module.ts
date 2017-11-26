import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './shoppingcomponents/homecomponent/home.component';
import { CategoryComponent } from './shoppingcomponents/sidebarcomponent/categorycomponent/category.component';
import { ShoppingServices } from './Services/avsshoppingservices';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './shoppingcomponents/productcomponent/product.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ViewProductComponent } from './shoppingcomponents/viewproductcomponent/viewproduct.component';
import {  MatCardModule, MatButtonModule} from '@angular/material';
import { MatDialogModule, MatDialog} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,HomeComponent, CategoryComponent , CategoryComponent,ProductComponent,ViewProductComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule, 
    MaterialModule, MatDialogModule, 
    MatCardModule, MatButtonModule
  ],
  exports: [
    MatProgressSpinnerModule
  ],
  entryComponents:[
      ViewProductComponent, ProductComponent
  ],
  providers: [ShoppingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
