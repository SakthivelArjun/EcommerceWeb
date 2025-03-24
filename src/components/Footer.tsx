import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#F8F9FA", py: 5, px: 3 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Left Side - Logo & Description */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#2D3748" }}>
            <span style={{ color: "#5caf90" }}>🛍️ Grab</span>it
          </Typography>
          <Typography variant="body2" sx={{ color: "#4A5568", mt: 1 }}>
            Grabit is the biggest market of grocery products. Get your daily needs from our store.
          </Typography>
          {/* Download Buttons */}
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <img src="src/assets/google1.png" alt="Google Play" style={{ width: "120px" }} />
            <img src="src/assets/google1.png" alt="App Store" style={{ width: "120px" }} />
          </Box>
        </Grid>

        {/* Categories Section */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#2D3748", mb: 1 }}>
            Category
          </Typography>
          {["Dried Fruit", "Cookies", "Foods", "Fresh Fruit", "Tuber Root", "Vegetables"].map((item) => (
            <Typography key={item} variant="body2" sx={{ color: "#4A5568", mb: 0.5 }}>
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Company Section */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#2D3748", mb: 1 }}>
            Company
          </Typography>
          {["About us", "Delivery", "Legal Notice", "Terms & Conditions", "Secure Payment", "Contact us"].map((item, index) => (
            <Typography key={index} variant="body2" sx={{ color: index === 0 ? "#5caf90" : "#4A5568", mb: 0.5 }}>
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Account Section */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#2D3748", mb: 1 }}>
            Account
          </Typography>
          {["Sign In", "View Cart", "Return Policy", "Become a Vendor", "Affiliate Program", "Payments"].map((item) => (
            <Typography key={item} variant="body2" sx={{ color: "#4A5568", mb: 0.5 }}>
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Contact Section */}
        <Grid item xs={6} md={3}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#2D3748", mb: 1 }}>
            Contact
          </Typography>
          <Typography variant="body2" sx={{ color: "#4A5568" }}>
            📍 2548 Broaddus Maple Court, Madisonville KY 4783, USA.
          </Typography>
          <Typography variant="body2" sx={{ color: "#4A5568", mt: 1 }}>
            📞 +00 9876543210
          </Typography>
          <Typography variant="body2" sx={{ color: "#4A5568", mt: 1 }}>
            📧 example@email.com
          </Typography>
          {/* Social Icons */}
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <IconButton sx={{ bgcolor: "#4A5568", color: "white", "&:hover": { bgcolor: "#5caf90" } }}>
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton sx={{ bgcolor: "#4A5568", color: "white", "&:hover": { bgcolor: "#5caf90" } }}>
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton sx={{ bgcolor: "#4A5568", color: "white", "&:hover": { bgcolor: "#5caf90" } }}>
              <LinkedIn fontSize="small" />
            </IconButton>
            <IconButton sx={{ bgcolor: "#4A5568", color: "white", "&:hover": { bgcolor: "#5caf90" } }}>
              <Instagram fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Footer Text */}
      <Box textAlign="center" mt={5}>
        <Typography variant="body2" sx={{ color: "#4A5568" }}>
          © 2025 Exclusive. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
