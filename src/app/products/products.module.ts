import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';


@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ProductsComponent]

})
export class ProductsModule { }
