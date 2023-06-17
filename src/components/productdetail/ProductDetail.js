import { Button, Input, Rating, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import {
  mensData,
  womensData,
  newMensData,
  newWomensData,
  accessoriesData,
} from "../Data/data";

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();

  const product =
    mensData.find((product) => product.id === parseInt(id)) ||
    womensData.find((product) => product.id === parseInt(id)) ||
    newMensData.find((product) => product.id === parseInt(id)) ||
    newWomensData.find((product) => product.id === parseInt(id)) ||
    accessoriesData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "center",
          mt: 4,
          m: 5,
        }}
      >
        <img src={product.image} alt="productimage" />

        <Stack spacing={2} sx={{ ml: 3 }}>
          <Typography variant="h4">{product.title}</Typography>
          <Typography>Product Id:{id}</Typography>
          <Typography>{product.price}</Typography>
          <Typography>Sizes:M,L,Xl,2XL,3XL</Typography>
          <Rating defaultValue={product.rating} readOnly />
          <Typography>Category: {product.category}</Typography>
          <Typography>
            Quantity:
            <Input type="number" sx={{ width: 50 }} />
          </Typography>
          <Button variant="contained" onClick={() => onAddToCart(product)}>
            Add to cart
          </Button>
        </Stack>
      </Box>
    </>
  );
}
