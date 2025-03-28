import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Star, ShoppingCart, Heart, Eye } from "iconsax-react";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  category: string;
  title: string;
  price: number;
  description?: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  images: string[];
  onAddToWishlist: () => void;
  onToggleCart: () => void;
  isInCart: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  category,
  title,
  price,
  discountPercentage,
  rating,
  description,
  stock,
  onAddToWishlist,
  onToggleCart,
}) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addCart, setAddCart] = useState(false);

  const originalPrice = price + (price * discountPercentage) / 100;
  const badge = stock < 5 ? "Low Stock" : discountPercentage > 0 ? "SALE" : undefined;

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist();
  };

  const handleCartToggle = () => {
    setAddCart(!addCart);
    onToggleCart();
  };


  return (
    <>
      <Box
        sx={{ cursor: "pointer", position: "relative" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Card
          sx={{
            borderRadius: 2,
            p: 1.5,
            textAlign: "center",
            position: "relative",
            maxWidth: 220,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "translateY(-5px)" },
          }}
        >
          {badge && (
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                backgroundColor: badge === "SALE" ? "#FF5252" : "#FFA500",
                color: "white",
                borderRadius: 1,
                px: 1,
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {badge}
            </Box>
          )}

          <CardMedia
            component="img"
            image={images[0]}
            alt={title}
            sx={{
              borderRadius: 2,
              height: 160,
              objectFit: "contain",
              mb: 1,
            }}
          />

          {hovered && (
            <Box
              sx={{
                position: "absolute",
                top: 8,
                left: 8,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {/* Wishlist Icon */}
              <IconButton onClick={handleWishlistToggle} sx={{ bgcolor: "white", p: 0.5, borderRadius: "50%" }}>
                <Heart size="20" color="#FF5252" variant={isWishlisted ? "Bold" : "Linear"} />
              </IconButton>

              {/* Cart Icon */}
              <IconButton onClick={handleCartToggle} sx={{ bgcolor: "white", p: 0.5, borderRadius: "50%" }}>
                <ShoppingCart size="20" color="#2E7D32" variant={addCart ? "Bold" : "Linear"} />
              </IconButton>

              {/* View Icon */}
              <IconButton onClick={() => setOpen(true)} sx={{ bgcolor: "white", p: 0.5, borderRadius: "50%" }}>
                <Eye size="20" color="#1976D2" variant="Linear" />
              </IconButton>
            </Box>
          )}

          <CardContent sx={{ p: 1 }}>
            <Typography variant="caption" color="text.secondary">
              {category}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
            >
              {title}
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, my: 0.5 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size="16" color={i < Math.round(rating) ? "#FFAB00" : "#E0E0E0"} variant="Bold" />
              ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, alignItems: "center" }}>
              <Typography variant="body1" sx={{ fontWeight: 600, color: "#2E7D32" }}>
                ${price.toFixed(2)}
              </Typography>
              {discountPercentage > 0 && (
                <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }}>
                  ${originalPrice.toFixed(2)}
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>

      <ProductModal
        open={open}
        onClose={() => setOpen(false)}
        product={{
          images: images,
          title: title,
          description: description,
          price: price,
          discountPercentage: discountPercentage,
          rating: rating,
          stock: stock,
        }}
      />
    </>
  );
};

export default ProductCard;
