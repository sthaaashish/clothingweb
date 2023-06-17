import React, { useState } from 'react'
import { accessoriesData } from '../Data/data';
import { Box, Card, CardContent, CardMedia, Grid, Pagination,Rating, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

export default function Accessories() {
   
    const [page, setPage] = useState(1);
  
    const cardsPerPage = 12;
    const lastIndex = page * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;
    const currentCards =accessoriesData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(accessoriesData.length / cardsPerPage)

    const handlePageChange =(event, newPage) =>{
        setPage(newPage);
    }

  
    const acceCards = currentCards.map(
        accessories => (
            <Grid item xs={12} sm={6} md={3} key={accessories.id} sx={{mt:4}}>
                <Link to={`/productdetail/${accessories.id}`} style={{textDecoration:'none'}}>
                
                <Card>
                    <CardMedia
                        component="img"
                        height="500"
                        width="500"
                        image={accessories.image}
                        alt={accessories.title}
                    />
                    <CardContent>
                        <Typography variant='h7' >{accessories.title}</Typography>
                        <Typography>{accessories.price}</Typography>
                        <Rating size='small' defaultValue={accessories.rating} readOnly/>
                    </CardContent>
                </Card>
                </Link>
            </Grid>
        )
    );
    
    return (
        <Box width="95%" sx={{ml:2}}>
            <Grid container spacing={2}>
                {acceCards}
            </Grid>
            <Stack spacing={2}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} sx={{display:'flex',justifyContent:'center',mt:1,color:'primary'}}/>
            </Stack>  
        </Box>
    );
}







