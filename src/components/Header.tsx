import React from "react";
import { AppBar, Grid, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { Bag2, NotificationFavorite, User } from "iconsax-react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { RootState } from "../state/store/features/store";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {

  const navigate = useNavigate();

  const cartCount = useSelector((state: RootState) => state.cart.totalCount);
  console.log(cartCount, "cartCount");


  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#5caf90" }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4} md={3} display="flex" alignItems="center">
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2D3748" }}>
              <span style={{ color: "#fff" }}>🛍️ Grab</span>it
            </Typography>
          </Grid>


          <Grid item xs={6} sm={8} md={9} display="flex" justifyContent="flex-end" alignItems="center">
            {/* Hide Icons on Mobile */}
            <Grid item display={{ xs: "none", sm: "flex" }} gap={2}>
              <IconButton color="inherit" onClick={() => navigate('/cart')}>
                <Badge badgeContent={cartCount}>
                  <Bag2 size="28" color="#FFFFFF" />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <NotificationFavorite size="28" color="#FFFFFF" />
              </IconButton>
              <IconButton color="inherit">
                <User size="28" color="#FFFFFF" />
              </IconButton>
            </Grid>

            {/* Mobile Menu Icon (Only on Small Screens) */}
            <IconButton sx={{ display: { sm: "none" } }} color="inherit">
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
