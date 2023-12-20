import { Box, CircularProgress, Typography } from "@mui/material"
import React from 'react'

export default function Loader() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <CircularProgress />
      <Typography variant="h6" sx={{ marginLeft: '1rem' }}>Please wait...
      </Typography>
      <Typography variant="h6" sx={{ marginLeft: '1rem' }}>We are Fetching your products...
      </Typography>
    </Box>
  )
}
