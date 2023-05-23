import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Pagination, Rating, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useState } from 'react'
import womensData from './womensData'
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Womens({onAddToCart}) {
    const [womens, setWomens] = useState("Tshirts and Tops");
    const [page, setPage] = useState(1);
    const womensCategories = ["Jeans", "Shoes", "Skirts", "dresses", "Jumpsuits and Joggers", "Tshirts and Tops"];
  

    const cardsPerPage = 12;
    const lastIndex = page * cardsPerPage;
    const firstIndex = lastIndex - cardsPerPage;

    const filteredData = womensData.filter(items => items.category === womens);
    const currentCards = filteredData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredData.length / cardsPerPage)

    const womensFilteredCards = currentCards;

    const handleCategoryChange = (category) => {
        setWomens(category);
        setPage(1);
    }
    
 
    const womensCards = womensFilteredCards.map(
        womens => (
            <Grid item xs={12} sm={6} md={3} key={womens.id}>
                <Card>
                    <CardMedia
                        component="img"
                        height="500"
                        width="500"
                        image={womens.image}
                        alt={womens.title}
                    />
                    <CardContent>
                        <Typography variant='h7' >{womens.title}</Typography>
                        <Typography>{womens.price}</Typography>
                        <Rating size='small' defaultValue={womens.rating} readOnly/>
                    </CardContent>
                    <CardActions  sx={{display: 'flex',justifyContent:'space-between'}}>
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
            <Box display='flex' justifyContent="center">
                {womensCategories.map(category => (
                    <Button key={category} sx={{ ml: 2, mt: 3 }} variant="contained" onClick={() => handleCategoryChange(category)}>
                        {category}
                    </Button>
                ))}
            </Box>
            <Typography variant='h5' gutterBottom color="Highlight" >{womens}</Typography>
            <Grid container spacing={2}>
                {womensCards}
            </Grid>
            <Stack spacing={2}>
                <Pagination count={totalPages} page={page} onChange={(event,page) =>setPage(page)} sx={{display:'flex',justifyContent:'center',mt:1,color:'primary'}}/>
            </Stack>  
        </Box>
    );
}