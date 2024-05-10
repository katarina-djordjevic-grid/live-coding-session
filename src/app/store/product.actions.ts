import { createAction, props } from '@ngrx/store';
import { IProduct } from './product.reducer';


export const loadProductsFromAPI = createAction('[Product] Load products from API', props<{products: IProduct[]}>());
// add product
// adjust product
// delete product
