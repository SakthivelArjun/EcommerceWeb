import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, CardMedia, Typography, Box, Button, IconButton, Divider, Grid } from "@mui/material";
import { Star, CloseSquare, ShoppingCart } from "iconsax-react";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: {
    images: string[]; 
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    weight?: number;
  };
}

const ProductModal: React.FC<ProductModalProps> = ({ open, onClose, product }) => {
  const { images, title, description, price, discountPercentage, rating, stock, weight } = product;
  const [selectedImage, setSelectedImage] = useState(images[0]); // State for main image
  const originalPrice = price + (price * discountPercentage) / 100;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.4rem", textAlign: "center", p: 2, position: "relative" }}>
        {title}
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 16, top: 16, bgcolor: "#f5f5f5" }}>
          <CloseSquare size="24" />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ p: 3 }}>
        <Grid container spacing={3} alignItems="center">
          {/* Product Images Section */}
          <Grid item xs={12} md={5}>
            {/* Main Product Image */}
            <CardMedia
              component="img"
              image={selectedImage}
              alt={title}
              sx={{ width: "100%", height: 300, objectFit: "contain", borderRadius: 2, boxShadow: 1 }}
            />

            {/* images Images Carousel */}
            <Box sx={{ display: "flex", gap: 1, mt: 2, justifyContent: "center" }}>
              {images.map((img, index) => (
                <CardMedia
                  key={index}
                  component="img"
                  image={img}
                  alt={`images ${index}`}
                  sx={{
                    width: 60,
                    height: 60,
                    objectFit: "cover",
                    borderRadius: 1,
                    cursor: "pointer",
                    border: selectedImage === img ? "2px solid #FF6F00" : "1px solid #ddd",
                    transition: "0.2s",
                    "&:hover": { border: "2px solid #FF6F00" },
                  }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </Box>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={7}>
            <Typography variant="h6" fontWeight={600}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {description}
            </Typography>

            {/* Price & Discount */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#2E7D32" }}>
                ${price.toFixed(2)}
              </Typography>
              {discountPercentage > 0 && (
                <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray", fontSize: "14px" }}>
                  ${originalPrice.toFixed(2)}
                </Typography>
              )}
            </Box>

            {/* Stock & Weight */}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Stock: <strong>{stock}</strong> {weight && ` | Weight: ${weight}`}
            </Typography>

            {/* Rating */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 2 }}>
              <Typography variant="body2" fontWeight={600}>
                Rating:
              </Typography>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size="20" color={i < Math.round(rating) ? "#FFAB00" : "#E0E0E0"} variant="Bold" />
              ))}
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 2 }} />

            {/* Action Buttons */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ flex: 1, display: "flex", alignItems: "center", gap: 1, fontWeight: 600 }}
              >
                <ShoppingCart size="20" />
                Add to Cart
              </Button>
              <Button variant="outlined" onClick={onClose} sx={{ flex: 1, color: "#5caf90",borderColor: "#5caf90", fontWeight: 600 }}>
                Close
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
