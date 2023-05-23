import { Card, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useState } from 'react'
import { mensData, womensData } from './data';
import Pagination from '@mui/material/Pagination';



export default function MensNewArrival() {
  const [page, setPage] = useState(1);
  const cardsPerPage = 4;
  const lastPage = page * cardsPerPage;
  const firstPage = lastPage - cardsPerPage;
  const currentCards = mensData.slice(firstPage, lastPage)
  const totalPages = Math.ceil(mensData.length / cardsPerPage)

  const [womensPage, setWomensPage] = useState(1);
  const cardsPage = 4;
  const LastPage = womensPage * cardsPage;
  const FirstPage = LastPage - cardsPage;
  const womensCards = womensData.slice(FirstPage, LastPage)
  const womenstotalPages = Math.ceil(womensData.length / cardsPage)

  const NewArrivalsCards = currentCards.map(mens =>
    <Grid item key={mens.id} xs={12} md={3} sm={6}>
      <Card>
        <CardMedia component="img" height="500" image={mens.image} alt="image" />
        <CardContent>
          <Typography>{mens.title}</Typography>
          <Typography>{mens.price}</Typography>
          <Rating size='small' defaultValue={mens.Rating} readOnly/>
        </CardContent>
      </Card>
    </Grid>)
  const womensNewArrivals = womensCards.map(womens =>
    <Grid item key={womens.id} xs={12} md={3} sm={6}>
      <Card>
        <CardMedia component="img" height="500" image={womens.image} alt="image" />
        <CardContent>
          <Typography>{womens.title}</Typography>
          <Typography>{womens.price}</Typography>
          <Rating size='small' defaultValue={womens.rating}readOnly />
        </CardContent>
      </Card>
    </Grid>)
  return (
    <Box sx={{ ml: 2, mr: 2, mt: 3 }}>
      <Typography variant='h4'>Mens New Arrivals</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {NewArrivalsCards}
      </Grid>
      <Stack spacing={2} >
        <Pagination count={totalPages} page={page} onChange={(event, page) => setPage(page)} sx={{ display: 'flex', mt: 1, justifyContent: 'center' }} color="primary" />
      </Stack>


      <Typography variant='h4'>Womens New Arrivals</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {womensNewArrivals}
      </Grid>
      <Stack spacing={2} >
        <Pagination count={womenstotalPages} page={womensPage} onChange={(event, page) => setWomensPage(page)} sx={{ display: 'flex', mt: 1, justifyContent: 'center' }} color="primary" />
      </Stack>
    </Box>
  )
}

