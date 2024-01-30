import s from "../App.module.css";
import Product from "./Product";
import React from "react";
function Products(){
    return  (
        <div className={s.all_product}>
            {products.map((product)=><Product product={product} key={product.id}/>)}
    </div>
    )
}