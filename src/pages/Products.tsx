import React from "react";
import { Grid, Box, IconButton } from "@mui/material";
import { Filter, Grid1, ElementEqual } from "iconsax-react";
import ProductCard from "../components/common/ProductCard";

const products: { image: string; category: string; name: string; price: number; originalPrice: number; rating: number; weight: string; badge?: "NEW" | "SALE" }[] = [
  {
    image: "/images/cherry.png",
    category: "Fresh Fruit",
    name: "Natural Hub Cherry Karonda",
    price: 49.0,
    originalPrice: 65.0,
    rating: 5,
    weight: "1kg",
    badge: "NEW",
  },
  {
    image: "/images/lychee.png",
    category: "Fresh Fruit",
    name: "Fresh Mango Juice Pack",
    price: 20.0,
    originalPrice: 21.0,
    rating: 3,
    weight: "2kg",
  },
  {
    image: "/images/dragonfruit.png",
    category: "Fresh Fruit",
    name: "Kamalam Fruit",
    price: 15.0,
    originalPrice: 17.0,
    rating: 4,
    weight: "3pcs",
    badge: "SALE",
  },
  {
    image: "/images/blueberry.png",
    category: "Fresh Fruit",
    name: "Blue Berry",
    price: 11.0,
    originalPrice: 12.0,
    rating: 3,
    weight: "500g",
    badge: "SALE",
  },
];

const Products: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Filter & Layout Icons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box>
          <IconButton>
            <Filter size="28" color="#5caf90" />
          </IconButton>
          <IconButton>
            <ElementEqual size="28" color="#5caf90" />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <Grid1 size="28" color="#5caf90" />
          </IconButton>
        </Box>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
