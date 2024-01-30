import axios, {AxiosError} from 'axios';
import {IProduct} from "./products_interface";
import {useEffect, useState} from "react";

export function useProduct(){
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    async function GetProducts(){
        try {
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProducts(response.data)
            setLoading(false)
        }catch (e: unknown){
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }

    }
    useEffect(()=>{
        GetProducts()
    },[])
    return {products, loading, error}
}