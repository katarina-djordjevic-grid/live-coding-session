import { Action, createReducer, on } from "@ngrx/store";
import { loadProductsFromAPI } from "./product.actions";

export interface IProduct {
    id: number;
    price: number;
    name: string;
}

export interface IState {
    products: IProduct[];
    errors?: any;
}

const initialState: IState = {
    products: [],
    errors: null
}

const productsReducer = createReducer(
    initialState,
    on(loadProductsFromAPI, (state: any, action: any) => {
        return {
            ...state,
            products: action.products
        }
    })
)
export function reducer(state: IState, action: Action) {
    return productsReducer(state, action);
}
export const shopFeatureKey = 'shop';