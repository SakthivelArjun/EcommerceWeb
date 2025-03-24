import React, { useEffect } from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store/features/store";
import { getProductList } from "../state/action/product";
import SearchBar from "../components/common/SearchBar";
// import CategoryCard from "../components/common/CategoryCard";
import ProductCard from "../components/common/ProductCard";
import DropdownButton from "../components/common/button/DropdownButton";
// import fruits from "../assets/fruits.png";
// import bakeryproducts from "../assets/bakeryproducts.png";
// import veg from "../assets/veg.png";
// import dairy from "../assets/dairy.png";
// import snacks from "../assets/snacks.png";
// import juices from "../assets/juices.png";
import { ArrowRight } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import OffersCarousel from "../components/common/OffersCarousel";

const Home: React.FC = () => {
  // const categories = [
  //   { icon: <Bag2 size="50" color="white" />, title: "Fruits", items: 320, discount: 30, bgImage: fruits },
  //   { icon: <Cup size="50" color="white" />, title: "Bakery", items: 65, bgImage: bakeryproducts },
  //   { icon: <Grid1 size="50" color="white" />, title: "Vegetables", items: 548, discount: 15, bgImage: veg },
  //   { icon: <Milk size="50" color="white" />, title: "Dairy & Milk", items: 48, discount: 10, bgImage: dairy },
  //   { icon: <Bag2 size="50" color="white" />, title: "Snack & Spice", items: 59, bgImage: snacks },
  //   { icon: <User size="50" color="white" />, title: "Juice & Drinks", items: 845, bgImage: juices },
  // ];

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const productList = useSelector((state: RootState) => state.productData?.productList);

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <Box sx={{ padding: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <SearchBar />
      </Box>

      <Box display="flex" alignItems="center" gap={3} p={2}>
        <DropdownButton title="All Categories" options={["Electronics", "Clothing", "Accessories"]} />
        <DropdownButton title="Home Categories" options={["Furniture", "Kitchen", "Decor"]} />
        <DropdownButton title="Pages" options={["About", "Contact", "Blog", "FAQ", "Login", "Register"]} />
        <DropdownButton title="Offers" options={["Deals", "Discounts", "Coupons"]} />
      </Box>

      <Box>
        <OffersCarousel />
      </Box>

      {/* <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        Shop by Categories
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categories.map((category: any) => (
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <CategoryCard {...category} />
          </Grid>
        ))}
      </Grid> */}

      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 6, mb: 1, textAlign: "center" }}>
        <Box component="span" sx={{ color: "#4b5966" }}>Day of the</Box>{" "}
        <Box component="span" sx={{ color: "#5caf90" }}>Deals</Box>
      </Typography>

      <Typography variant="body2" sx={{ textAlign: "center", color: "#777777", mb: 4 }}>
        Don't wait!
      </Typography>
      <Box position="relative">
        <Grid container spacing={3} justifyContent="center">
          {productList.slice(0, 12).map((product: any, index) => (
            <Grid item key={product.title || index} xs={12} sm={6} md={4} lg={2}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>

        {/* Next Page Arrow */}
        <Box display="flex" justifyContent="center" mt={2}>
          <IconButton
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/dayDeals");
            }}
            sx={{ backgroundColor: "#FF5252", color: "white", "&:hover": { backgroundColor: "#D32F2F" } }}
          >
            <ArrowRight />
          </IconButton>
        </Box>
      </Box>


      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 6, mb: 1, textAlign: "center" }}>
        <Box component="span" sx={{ color: "#4b5966" }}>New Arrivals</Box>{" "}
      </Typography>

      <Typography variant="body2" sx={{ textAlign: "center", color: "#777777", mb: 4 }}>
        Shop online for new arrivals and get free shipping
      </Typography>

      <Box position="relative">
        <Grid container spacing={3} justifyContent="center">
          {productList.slice(12, 24).map((product: any, index) => (
            <Grid item key={product.title || index} xs={12} sm={6} md={4} lg={2}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>

        {/* Next Page Arrow */}
        <Box display="flex" justifyContent="center" mt={2}>
          <IconButton
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/newArrivals");
            }}
            sx={{ backgroundColor: "#FF5252", color: "white", "&:hover": { backgroundColor: "#D32F2F" } }}
          >
            <ArrowRight />
          </IconButton>
        </Box>
      </Box>

    </Box>
  );
};

export default Home;
