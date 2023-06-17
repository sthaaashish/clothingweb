import { Button, Card, CardContent, CardMedia, Grid, Rating, Typography, Stack, Pagination } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import { mensData } from '../Data/data';
import { Link } from 'react-router-dom';


export default function Mens() {
  const [mens, setMens] = useState("Jeans");
  const mensCategory = ["Jeans", "Tshirts and Tank-Tops", "Shoes", "Shirts and Blazers", "Jackets and Sweaters"]
  const [page, setpage] = useState(1);
  
  const cardsPerPage = 12;
  const lastIndex = page * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  const filteredData = mensData.filter(item => item.category === mens)
  const currentCards = filteredData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(mensData.length / cardsPerPage);

  const mensFilteredCards = currentCards;

  const handleCategoryChange = (category) => {
    setMens(category);
    setpage(1);
  }

  const cards = mensFilteredCards.map(mens => (
    <Grid item xs={12} sm={6} md={3} key={mens.id}>
      <Link to={`/productdetail/${mens.id}`}  style={{textDecoration:'none'}}>
     
      <Card>
        <CardMedia component="img"
          height="500"
          width="500"
          image={mens.image}
          alt={mens.title}
        />
        <CardContent>
          <Typography variant='h7'>{mens.title}</Typography>
          <Typography>{mens.price}</Typography>
          <Rating size='small' defaultValue={mens.rating} readOnly />
        </CardContent>
      </Card>
      </Link>
    </Grid>
  ))

  return (
    <Box width="95%" sx={{ ml: 2 }}>
     
      <Box 
      sx={{ display:{md:'flex', xs:'block'}, justifyContent:'center'}}>
        {mensCategory.map(categories => (
          <Button sx={{ ml: 2, mt:2 }} 
          key={categories} 
          variant="contained" onClick={() => handleCategoryChange(categories)}>
            {categories}
          </Button>
        ))}
      </Box>
      <Typography variant='h5'sx={{textAlign:'center', margin:1, }} color="Highlight" >{mens}</Typography>
      <Grid container spacing={2}>
        {cards}
      </Grid>
      <Stack spacing={2} >
        <Pagination count={totalPages} page={page} onChange={(event, page) => setpage(page)} sx={{ display: 'flex', mt: 1, justifyContent: 'center' }} color="primary" />
      </Stack>
    </Box>
  )
}
