import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsApiService } from 'src/app/services/products.services';
import { addProducts } from 'src/app/store/product.actions';
import { IState } from 'src/app/store/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  data!: any[];

  constructor(
    private productsService: ProductsApiService,
    private store: Store
  ) { }

  ngOnInit() {
    this.productsService.getData().subscribe((state: IState) => {
      if (state.products) {
        state.products.forEach((product: any) =>
          this.store.dispatch(addProducts(product))
        );
      }
    });
  }

  adjustProduct() { }

  deleteProduct() { }
}
