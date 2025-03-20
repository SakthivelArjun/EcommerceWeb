import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { SearchNormal1, Filter, ElementEqual, Grid1 } from "iconsax-react";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search for products..." }) => {
  return (
    <TextField
      placeholder={placeholder}
      fullWidth
      sx={{
        maxWidth: "800px",
        backgroundColor: "white",
        borderRadius: "8px",
        "& .MuiOutlinedInput-root": {
          paddingRight: "100px",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchNormal1 size="24" color="#5caf90" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Filter size="24" color="#5caf90" />
            </IconButton>
            <IconButton>
              <ElementEqual size="24" color="#5caf90" />
            </IconButton>
            <IconButton>
              <Grid1 size="24" color="#5caf90" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
