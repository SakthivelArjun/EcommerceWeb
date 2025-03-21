import React from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import { Filter, Grid1, ElementEqual } from "iconsax-react";
import ProductCard from "../components/common/ProductCard";
import { RootState } from "../state/store/features/store";
import { useSelector } from "react-redux";




const DayDeals: React.FC = () => {
  const productList = useSelector((state: RootState) => state.productData?.productList);
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

      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 6, mb: 1, }}>
        <Box component="span" sx={{ color: "#4b5966" }}>Deals Of The Day</Box>{" "}
      </Typography>
      <Typography variant="body2" sx={{ color: "#777777", mb: 4 }}>
        Hurry Up!! and get free shipping
      </Typography>


      {/* Product Grid */}
      <Grid container spacing={3} justifyContent="center">
        {productList.map((product: any, index) => (
          <Grid item key={product.title || index} xs={12} sm={6} md={4} lg={2}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DayDeals;
