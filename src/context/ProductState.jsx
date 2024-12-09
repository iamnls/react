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
      "name": "camera1",
      "description": "this is a best camera",
      "price": 1000,
      "instock": 5

    },
    {
      "id": 2,
      "name": "camera2",
      "description": "this is 4 mp camera",
      "price": 2000,
      "instock": 4
    },
    {
        "id": 3,
        "name": "camera3",
        "description": "this is local product from Nepal",
        "price": 2000,
        "instock": 4
    },
    {
        "id": 4,
        "name": "camera4",
        "description": "this is local product from Nepal",
        "price": 4000,
        "instock": 4
    },
    {
      "id": 5,
      "name": "camera5",
      "description": "this is fresh and healthy",
      "price": 2100,
      "instock": 5

    },
    {
      "id": 6,
      "name": "camera6",
      "description": "this is local product from Nepal",
      "price": 1500,
      "instock": 4
    },
    {
        "id": 7,
        "name": "cemara7",
        "description": "this is local product from Nepal",
        "price": 200,
        "instock": 4
    },
    {
        "id": 8,
        "name": "camera8",
        "description": "this is local product from Nepal",
        "price": 200,
        "instock": 4
    },
    {
        "id": 9,
        "name": "camera9",
        "description": "this is fresh and healthy",
        "price": 100,
        "instock": 5
  
    },
    {
        "id": 10,
        "name": "camera10",
        "description": "this is local product from Nepal",
        "price": 200,
        "instock": 4
    },
    {
          "id": 11,
          "name": "camera11",
          "description": "this is local product from Nepal",
          "price": 200,
          "instock": 4
    },
    {
          "id": 12,
          "name": "camera12",
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



  // const update = () => {
  //   setTimeout(() => {
  //     setProduct({
  //       name: "orange",
  //       price: 50
  //     })
  //   }, 5000);
  // }
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
  const allProduct = async() => {
    const response = await fetch("https://localhost:5000/api/product/getallproduct",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
        },
    })
  
     
    let parsData = await response.json()
    console.log(parsData);
    
    setProduct(parsData)
    
    
  }

  const editProduct = async (selectedProduct, updateData) => {
    console.log("edditing product with selected product", selectedProduct);
    const { title, description, price, instock } = updateData
    try {
        const response = await fetch(`http://localhost:5000/api/product/updateproduct/${selectedProduct}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, instock, price })
        })
        if (!response.ok) {
            throw new Error('fail to update product')
        }
        const json = await response.json();
        console.log("product updated successfully" ,json);
        allProduct();

    } catch (error) {
        throw new Error('fail to update product')
    }
}

const deleteProduct = async(id)=>{
  try {
      const response= await fetch(`http://localhost:5000/api/product/deleteproduct/${id}`,{
          method: 'DELETE',
          headers: {
              "Content-Type":"application/json",
              "auth-token": localStorage.getItem('token')
          }
      })
      if(response.ok){
          console.log("product deleted successfully");
          allProduct()
          
      }
      else{
          console.error("failed to delete the product item")
      }
  } catch (error) {
      console.error("internal server error")
  }
}

  return (
    <ProductContext.Provider value={{ state, editProduct,dispatch, product }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
