import React from "react";
import { AppBar, Grid, Toolbar, Typography, IconButton } from "@mui/material";
import { ShoppingCart, Bag2, NotificationFavorite, User } from "iconsax-react";
import MenuIcon from "@mui/icons-material/Menu";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#5caf90" }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4} md={3} display="flex" alignItems="center">
            <IconButton edge="start" color="inherit">
              <ShoppingCart size="40" color="#FFFFFF" />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold"
              }}
            >
              Grabbit
            </Typography>
          </Grid>


          <Grid item xs={6} sm={8} md={9} display="flex" justifyContent="flex-end" alignItems="center">
            {/* Hide Icons on Mobile */}
            <Grid item display={{ xs: "none", sm: "flex" }} gap={2}>
              <IconButton color="inherit">
                <Bag2 size="28" color="#FFFFFF" />
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
