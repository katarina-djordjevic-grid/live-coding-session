import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import * as fromShop from './store/product.reducer';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(
      fromShop.shopFeatureKey,
      fromShop.reducer
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
