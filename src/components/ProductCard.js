import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Divider,

} from '@mui/material';

const getCommaFormattedNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

}


const ProductCard = ({ title, description, imageUrl, price }) => {
  const styles = {
    card: {
      maxWidth: 300,
      margin: 'auto',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
      },
      height: 'auto',
      marginTop: '1rem',
      padding: '1rem',
    },
    media: {
      // height: 140,
    },
    price: {
      color: '#888',
      fontWeight: 'bold',
    },
  }
  console.log({ imageUrl })
  return (
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          sx={styles.media}
          component="img"
          alt={title}
          // height="140"
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" sx={styles.price}>
            ₹{getCommaFormattedNumber(price)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <Button size="large" color="primary" variant="contained" sx={{
        margin: '1rem ',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginBottom: '0rem',
      }} >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;

