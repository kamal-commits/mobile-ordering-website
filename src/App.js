import React, { useEffect, useState } from 'react'
import ProductCard from "./components/ProductCard"
import axios from "axios"
import { Box } from "@mui/material"
import Header from "./components/Header"

export default function App() {

  const [products, setProducts] = useState([])
  const [params, setParams] = useState({
    limit: 100,
    page: 1
  })

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product`, {
        params
      })

      setProducts(response?.data?.data)
    }
    getProducts()
  }
    , [])


  console.log(products)


  return (
    <Box>
      <Header />
      <Box sx={{
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        // padding: '1rem',
        backgroundColor: '#f5f5f5',

      }}>

        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.image}
              price={product.price}
            />
          )
        })}
      </Box>


    </Box>
  )
}
