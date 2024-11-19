import React, { useReducer, useState } from 'react'
import ProductContext from './productContext'
import { cartReducer } from './Reducers'

const ProductState = (props) => {
  let p1 = {
    name: "apple",
    price: 100
  }
  const prod = [
    {
      "id": 1,
      "name": "1",
      "description": "this is a best camera",
      "price": 1000,
      "instock": 5

    },
    {
      "id": 2,
      "name": "2",
      "description": "this is 4 mp camera",
      "price": 2000,
      "instock": 4
    },
    {
        "id": 3,
        "name": "3",
        "description": "this is local product from Nepal",
        "price": 2000,
        "instock": 4
    },
    {
        "id": 4,
        "name": "4",
        "description": "this is local product from Nepal",
        "price": 4000,
        "instock": 4
    },
    {
      "id": 5,
      "name": "5",
      "description": "this is fresh and healthy",
      "price": 2100,
      "instock": 5

    },
    {
      "id": 6,
      "name": "6",
      "description": "this is local product from Nepal",
      "price": 1500,
      "instock": 4
    },
    {
        "id": 7,
        "name": "7",
        "description": "this is local product from Nepal",
        "price": 200,
        "instock": 4
    },
    {
        "id": 8,
        "name": "8",
        "description": "this is local product from Nepal",
        "price": 200,
        "instock": 4
    },
    {
        "id": 9,
        "name": "9",
        "description": "this is fresh and healthy",
        "price": 100,
        "instock": 5
  
    },
    {
        "id": 10,
        "name": "10",
        "description": "this is local product from Nepal",
        "price": 200,
        "instock": 4
    },
    {
          "id": 11,
          "name": "11",
          "description": "this is local product from Nepal",
          "price": 200,
          "instock": 4
    },
    {
          "id": 12,
          "name": "12",
          "description": "this is local product from Nepal",
          "price": 200,
          "instock": 4
    }
  ]
  const [product, setProduct] = useState(prod)
  
  const [state, dispatch] = useReducer(cartReducer,
    {
        products: product,
        cart: []
    }
)



  const update = () => {
    setTimeout(() => {
      setProduct({
        name: "orange",
        price: 50
      })
    }, 5000);
  }
  // const fetchApi =async()=>{
  //   try {
  //     const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a")
  //     if (!response.ok){
  //       throw new Error("response not comming")
  //     }
  //     const data= await response.json()
  //     setArticle(data.articles)
  //   } catch (error) {
  //     throw new Error("response not comming")
  //   }
  // }

  return (
    <ProductContext.Provider value={{ state, dispatch, product }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
