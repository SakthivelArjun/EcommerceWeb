import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Bag2, Milk, User, Cup, Grid1 } from "iconsax-react";
import CategoryCard from "../components/common/CategoryCard";
import ProductCard from "../components/common/ProductCard";
import SearchBar from "../components/common/SearchBar";
import fruits from "../assets/fruits.png";
import bakeryproducts from "../assets/bakeryproducts.png";
import veg from "../assets/veg.png";
import dairy from "../assets/dairy.png";
import snacks from "../assets/snacks.png";
import juices from "../assets/juices.png";

const Home: React.FC = () => {
  const categories = [
    { icon: <Bag2 size="50" color="white" />, title: "Fruits", items: 320, discount: 30, bgImage: fruits },
    { icon: <Cup size="50" color="white" />, title: "Bakery", items: 65, bgImage: bakeryproducts },
    { icon: <Grid1 size="50" color="white" />, title: "Vegetables", items: 548, discount: 15, bgImage: veg },
    { icon: <Milk size="50" color="white" />, title: "Dairy & Milk", items: 48, discount: 10, bgImage: dairy },
    { icon: <Bag2 size="50" color="white" />, title: "Snack & Spice", items: 59, bgImage: snacks },
    { icon: <User size="50" color="white" />, title: "Juice & Drinks", items: 845, bgImage: juices },
  ];

  const products = [
    {
      image: "/images/cherry.png",
      category: "Fresh Fruit",
      name: "Natural Hub Cherry Karonda",
      price: 49.0,
      originalPrice: 65.0,
      rating: 5,
      weight: "1kg",
      badge: "NEW" as "NEW",
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
      badge: "SALE" as "SALE",
    },
    {
      image: "/images/blueberry.png",
      category: "Fresh Fruit",
      name: "Blue Berry",
      price: 11.0,
      originalPrice: 12.0,
      rating: 3,
      weight: "500g",
      badge: "SALE" as "SALE",
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      {/* Search Bar */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <SearchBar />
      </Box>

      {/* Category Grid */}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Shop by Categories
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <CategoryCard {...category} />
          </Grid>
        ))}
      </Grid>

      {/* Products Grid */}
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 2 }}>
        Featured Products
      </Typography>
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

export default Home;
