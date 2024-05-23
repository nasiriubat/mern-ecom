import React from 'react'
import { useState, useEffect } from 'react';
import { CategoryList } from './CategoryList';
import {useFetchProducts} from '../hooks/useFetchProducts'
import { useNavigate } from "react-router-dom";


export const Home = () => {
  
  const categories = [
    {
      id: 1,
      name: "electronics"

    },
    {
      id: 2,
      name: "jewelery"

    },
    {
      id: 3,
      name: "men's clothing"

    },
    {
      id: 4,
      name: "women's clothing"
    },
    {
      id: 5,
      name: "sample"
    }
    
  ]



  const [selectedCategoryName, setSelectedCategoryName] = useState('electronics');
  
  const [categorisedProducts, isLoading, error] = useFetchProducts(selectedCategoryName)
 
  const onSelectCategory = (clickedCategoryName) =>{
    // const filteredProducts = products.filter((product)=> product.categoryId === clickedCategoryId)
    // console.log(filteredProducts);

    // console.log(clickedCategoryName);
    // setSelectedProducts(filteredProducts)

    setSelectedCategoryName(clickedCategoryName)
  }

  const navigate = useNavigate();

  

  return (
    <div className="home content">
        <CategoryList 
          categories = {categories}
          title = "All Categories"
          onSelectCategory= {onSelectCategory}
        />
        <div className='products-container'>
        {error && 
          <div>
            {error}
          </div>

        }
        {
          isLoading ? (<div className='loader'></div>):

          categorisedProducts.map((product)=>(
            <div key={product.id} className='product-box'>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className='price'>Price: {product.price}</p>
              <p>{product.rating?.rate} ({product.rating?.count} reviews)</p>
              <button onClick={()=> navigate(`/products/${product.id}`)}>See Details</button>
            </div>
          ))
        }
        </div>
    </div>
  )
}

