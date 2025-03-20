import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  items: number;
  discount?: number;
  bgImage?: string; // Background image instead of color
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  title,
  items,
  discount,
  bgImage,
}) => {
  return (
    <Card
      sx={{
        minWidth: 160,
        textAlign: "center",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${bgImage})`, // Background Image
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* Overlay for better readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.3)", // Dark overlay for text contrast
          zIndex: 1,
        }}
      />

      {/* Discount Badge */}
      {discount && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "#FF5252",
            color: "white",
            borderRadius: "20px",
            px: 1.5,
            py: 0.5,
            fontSize: "12px",
            fontWeight: "bold",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
            zIndex: 2,
          }}
        >
          -{discount}%
        </Box>
      )}

      {/* Card Content */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          zIndex: 2,
          position: "relative",
          color: "white",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 70,
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          {icon}
        </Box>

        {/* Title & Items */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2"> {items} Items </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
