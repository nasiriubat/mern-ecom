import { useState, useEffect } from "react"

export const useFetchSingleProduct = (productId) =>{

    const [product, setProduct] = useState([null]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(()=>{
        setIsLoading(true)
        const fetchProduct = async () => {
          try{
            const url = `https://fakestoreapi.com/products/${productId}`
            const response = await fetch(url)
            if(response.ok){
              const product = await response.json()
              setProduct(product)
              setIsLoading(false)
            }else{
              setIsLoading(false)
              throw new Error(`Can't fetch the product with id ${id}"`)
            }
          }catch(error){
            setError("Can't fetch the productd")
            setIsLoading(false)
          }
        }
    
        fetchProduct()
    }, [productId])

    return [product, isLoading, error]
}