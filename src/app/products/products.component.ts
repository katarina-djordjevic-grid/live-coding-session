import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsApiService } from 'src/app/services/products.services';
import { loadProductsFromAPI } from '../store/product.actions';
import { IProduct } from '../store/product.reducer';
import { selectProducts } from '../store/products.selectors';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(
    private productsService: ProductsApiService,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.select(selectProducts).subscribe((value) => {
      this.products = value;
    })
    this.productsService.getData().subscribe(response => {
      if (response) {
        this.store.dispatch(loadProductsFromAPI({ products: response}))
      }
    });
  }
}
