import { Action, createReducer, on } from "@ngrx/store";
import { IState } from "./product.interface";
import { addProducts } from "./product.actions";

const initialState: IState = {
    products: [],
    errors: null
}

const productsReducer = createReducer(
    initialState,
    on(addProducts, (state: any, product: any) => {
        const productId = product.id ? product.id : Math.random();
        const newProducts = state.products.push({
            ...product,
            id: productId
        })
        return {
            ...state,
            products: state.products
        }
    }),
    // on(adjustProduct, (state: IState, product: IProduct) => {
        
    // }),
    // on(deleteProduct)
)
export function reducer(state: any, action: Action) {
    return productsReducer(state, action);
}