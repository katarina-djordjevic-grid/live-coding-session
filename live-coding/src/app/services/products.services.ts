import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  constructor() { }

  getData(): Observable<any> {
    return of(
      [
        {
          id: 1,
          name: 'iPhone',
          price: 500,
        },
        {
          id: 2,
          name: 'iPad',
          price: 200,
        }
      ]);
  }
}
