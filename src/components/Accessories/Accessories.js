import React, { useState } from 'react'
import accessoriesData from './accessoriesData';
import { Box, Card,IconButton, CardActions, CardContent, CardMedia, Grid, Pagination,Button,Rating, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Accessories({onAddToCart}) {
   
    const [page, setPage] = useState(1);
  
    const cardsPerPage = 12;
    const lastIndex = page * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;
    const currentCards =accessoriesData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(accessoriesData.length / cardsPerPage)

  

    // const handleCategoryChange = (category) => {
    //     setWomens(category);
    //     setPage(1);
    // }
    
    const acceCards = currentCards.map(
        accessories => (
            <Grid item xs={12} sm={6} md={3} key={accessories.id} sx={{mt:4}}>
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
                    <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
                        <Button size='small' variant='contained' onClick={onAddToCart}>
                            Add to cart
                        </Button>
                        <IconButton sx={{color:'inherit'}}>
                 <FavoriteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        )
    );
    
    return (
        <Box width="95%" sx={{ml:2}}>
            {/* <Box display='flex' justifyContent="center">
                {womensCategories.map(category => (
                    <Button key={category} sx={{ ml: 2, mt: 3 }} variant="contained" onClick={() => handleCategoryChange(category)}>
                        {category}
                    </Button>
                ))}
            </Box> */}
            {/* <Typography variant='h5' gutterBottom color="Highlight" >{womens}</Typography> */}
            <Grid container spacing={2}>
                {acceCards}
            </Grid>
            <Stack spacing={2}>
                <Pagination count={totalPages} page={page} onChange={(event,page) =>setPage(page)} sx={{display:'flex',justifyContent:'center',mt:1,color:'primary'}}/>
            </Stack>  
        </Box>
    );
}

