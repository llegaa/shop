import {IProduct} from "../Products/products_interface";
import React from "react";

export function ProductPage(props: IProduct){
    return(
        <div>
            <img src={props.image} alt="productImage"/>
            <h1>{props.title}</h1>
            <p>{props.price}</p>
            <p>Артикул: {props.id}</p>
            <p>{props.category}</p>
            <p>{props.description}</p>
        </div>
    )
}