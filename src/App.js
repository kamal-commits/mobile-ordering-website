import React, { useEffect, useState } from 'react'
import ProductCard from "./components/ProductCard"
import axios from "axios"
import { Box, Button } from "@mui/material"
import Header from "./components/Header"
import FilterSection from "./components/FilterSection"
import { Grid } from "@mui/material";
import Loader from "./components/Loader"

export default function App() {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [params, setParams] = useState({
    limit: 100,
    page: 1
  })

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product`, {
        params
      })
      setLoading(false)
      setProducts(response?.data?.data)
    }
    getProducts()
  }
    , [params])

  useEffect(() => {
    const getFilters = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/filters`, {
        params
      })

      setFilters(response?.data?.data)
    }
    getFilters()
  }
    , [])


  console.log({ filters })




  return (
    <Box>
      <Header />
      <Grid
        container
        sx={{
          gap: '1rem',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Grid item sm={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              "@media (max-width: 600px)": {
                display: 'none'
              }
            }}
          >
            <Button sx={{
              backgroundColor: '#fff',
              color: 'black',
              border: '1px solid #000',
              padding: '0.5rem',
              fontSize: '0.8rem',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#000',
                color: '#fff'
              },

            }}
              onClick={() => {
                setParams({
                  limit: 100,
                  page: 1
                })

              }}
              disabled={Object.keys(params).length === 2}
            >
              Reset Filter
            </Button>
            {Object.keys(filters).map((filter) => {
              return (
                <FilterSection
                  key={filter}
                  groupName={filter}
                  options={filters[filter]}
                  filters={params}
                  setFilters={setParams}
                />
              );
            })}

          </Box>
        </Grid>

        <Grid item sx={12} sm={9} flexDirection={"row"}>
          {!loading && products.length === 0 && <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            No Products Found for the selected filters
          </Box>}
          {loading ? <Loader /> : <Grid container spacing={2}>
            {products.map((product) => {
              return (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard
                    title={product.title}
                    description={product.description}
                    imageUrl={product.image}
                    price={product.price}
                  />
                </Grid>
              );
            })}
          </Grid>}
        </Grid>
      </Grid>
    </Box>
  );

}
