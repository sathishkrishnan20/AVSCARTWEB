import { Component ,Inject} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ProductComponent } from '../productcomponent/product.component';

@Component({
    selector: 'view-product',
    templateUrl: 'viewproduct.view.html'
})

export class ViewProductComponent {
 
    constructor(public thisDialogRef: MatDialogRef<ViewProductComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {}
    
     onCloseConfirm(){
         this.thisDialogRef.close('Confirm')   
     }
     onCloseCancel() {
        this.thisDialogRef.close('Cancel')   
     }
     
    //constructor() {}
    
}