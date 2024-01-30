import {IProduct} from "../../../Products/products_interface";
import {createSlice} from "@reduxjs/toolkit";

interface ProductState{
    products: IProduct[],
    isLoading: boolean,
    error: string
}
const initialState:ProductState = {
    products: [],
    isLoading: false,
    error:''
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{

    }
})

export default productSlice.reducer