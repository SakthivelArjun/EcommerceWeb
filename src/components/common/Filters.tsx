import React from "react";
import { Box, Typography, Button, Checkbox, Divider, FormControlLabel, FormGroup } from "@mui/material";

interface FiltersProps {
  uniqueCategories: string[];
  uniqueBrands: string[];
  selectedCategories: string[];
  selectedBrands: string[];
  handleCategoryChange: (category: string) => void;
  handleBrandChange: (brand: string) => void;
  applyFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  uniqueCategories,
  uniqueBrands,
  selectedCategories,
  selectedBrands,
  handleCategoryChange,
  handleBrandChange,
  applyFilters,
}) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2,
        border: "1px solid #ddd",
        backgroundColor: "#fff",
        position: "sticky",
        top: 20,
        height: "fit-content",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        Filters
      </Typography>

      {/* Category Filter */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Category
      </Typography>
      <FormGroup>
        {uniqueCategories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      {/* Brand Filter */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Brand
      </Typography>
      <FormGroup>
        {uniqueBrands.map((brand) => (
          <FormControlLabel
            key={brand}
            control={
              <Checkbox
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
            }
            label={brand}
          />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      {/* Rating Filter */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Ratings
      </Typography>
      <FormGroup>
        {[4, 3, 2, 1].map((rating) => (
          <FormControlLabel key={rating} control={<Checkbox />} label={`${rating} Stars & above`} />
        ))}
      </FormGroup>

      <Divider sx={{ my: 2 }} />

      {/* Availability Filter */}
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
        Availability
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="In Stock" />
        <FormControlLabel control={<Checkbox />} label="Out of Stock" />
      </FormGroup>

      <Button
        variant="contained"
        color="primary"
        onClick={applyFilters}
        fullWidth
        sx={{ mt: 3, color: "#fff", backgroundColor: "#5caf90" }}
      >
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filters;
