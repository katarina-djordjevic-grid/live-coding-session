import {
    createFeatureSelector,
    createSelector
} from "@ngrx/store";

import * as fromShop from './product.reducer';

export const selectShopState = createFeatureSelector<fromShop.IState>(fromShop.shopFeatureKey);
export const selectProducts = createSelector(selectShopState,
    state => state.products);
