import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from "@mui/material";
import { Heart, Eye, Refresh2, Trash, Star } from "iconsax-react";

interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  weight: string;
  badge?: "NEW" | "SALE";
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  category,
  name,
  price,
  originalPrice,
  rating,
  weight,
  badge,
}) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        p: 2,
        textAlign: "center",
        position: "relative",
        "&:hover .hover-icons": { opacity: 1, transform: "translateY(0px)" },
      }}
    >
      {/* Badge */}
      {badge && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: badge === "NEW" ? "#4CAF50" : "#FF5252",
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

      {/* Product Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ borderRadius: 2, height: 180, objectFit: "contain" }}
        />

        {/* Hover Icons */}
        <Box
          className="hover-icons"
          sx={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%) translateY(10px)",
            opacity: 0,
            transition: "0.3s",
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton sx={{ bgcolor: "white", p: 0.8 }}>
            <Heart size="20" />
          </IconButton>
          <IconButton sx={{ bgcolor: "white", p: 0.8 }}>
            <Eye size="20" />
          </IconButton>
          <IconButton sx={{ bgcolor: "white", p: 0.8 }}>
            <Refresh2 size="20" />
          </IconButton>
          <IconButton sx={{ bgcolor: "white", p: 0.8 }}>
            <Trash size="20" />
          </IconButton>
        </Box>
      </Box>

      {/* Product Details */}
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          {category}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {name}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, my: 0.5 }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size="18" color={i < rating ? "#FFAB00" : "#E0E0E0"} variant="Bold" />
          ))}
        </Box>

        {/* Price */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#2E7D32" }}>
            ${price.toFixed(2)}
          </Typography>
          {originalPrice && (
            <Typography variant="body2" sx={{ textDecoration: "line-through", color: "gray" }}>
              ${originalPrice.toFixed(2)}
            </Typography>
          )}
        </Box>

        {/* Weight */}
        <Typography variant="body2" color="text.secondary">
          {weight}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
