import { Component } from '@angular/core';
import { ViewProductComponent } from '../viewproductcomponent/viewproduct.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'home-component',
    templateUrl: './home.view.html'
})

export class HomeComponent{  
     constructor(public dailog: MatDialog) {}
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