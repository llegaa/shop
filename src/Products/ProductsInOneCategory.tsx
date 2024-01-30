import s from "../App.module.css";
import Product from "./Product";
import React, {useEffect} from "react";
import {useAppDispatch} from "../hooks/redux";
import {fetchProducts} from "../api/api";
import {productAPI} from "../services/ProductService";
import {useParams} from "react-router-dom";
//import product from "./Product";
function ProductsInOneCategory(){
    //const queryParams = new URLSearchParams(window.location.search);
    const { category } = useParams();
    const {data:products, isLoading, error}= productAPI.useFetchProductsInOneCategoryQuery({limit: 20, category: category||''})
    //const {data:products, isLoading, error} = productAPI.useFetchAllProductQuery(20)
    const dispatch = useAppDispatch()
    //const {products, isLoading, error}= useAppSelector(state => state.productReducer)
    useEffect(()=>{dispatch(fetchProducts())}, [])
    return  (
        <>
            {error && <div>Ошибка загрузки</div>}
    {isLoading && <div>Loading...</div>}
        {products && <div className={s.all_product}>{products.map((product) => <Product product={product} key={product.id}/>)}</div>}
            </>
        )
        }
        export default ProductsInOneCategory