import { createAction, props } from '@ngrx/store';
import { IProduct } from './product.interface';

export const addProducts = createAction('[Products Page] add products', props<{product: IProduct}>());
export const adjustProduct = createAction('[Products Page] adjust products', props<{product: IProduct}>());
export const deleteProduct = createAction('[Products Page] delete products', props<{productId: number}>());