import { Badge, Box, Hidden, IconButton, TextField, Typography } from "@mui/material"
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Header() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      // gap: '1rem',
      padding: '1rem',
      backgroundColor: 'primary.main',

    }}>
      <Typography sx={{
        color: 'white',
        fontSize: '2rem',
      }}>
        Kamal's Shop
      </Typography>

      <Hidden mdDown>

        <TextField id="outlined-basic" label="Search by name,price,model" variant="outlined"
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            width: '40%',
          }}

        />
      </Hidden>

      <IconButton sx={{
        color: "white"
      }}>

        <Badge badgeContent={4} color="secondary" >
          <ShoppingCartIcon sx={{
            color: "white"
          }}
            fontSize="large"
          />
        </Badge>
      </IconButton>
    </Box>
  )
}
