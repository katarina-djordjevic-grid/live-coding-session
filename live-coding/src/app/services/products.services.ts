import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IState } from '../store/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor() {}

  getData(): Observable<IState> {
    return of({
      products: [
        {
          id: 1,
          name: 'iPhone',
          price: 500,
        },
        {
          id: 2,
          name: 'iPad',
          price: 200,
        },
      ],
    });
  }
}
