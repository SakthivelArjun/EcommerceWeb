import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { SearchNormal1 } from "iconsax-react";

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
        borderRadius: "16px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
          "& fieldset": { borderColor: "#ccc" }, 
          "&:hover fieldset": { borderColor: "#5caf90" }, 
          "&.Mui-focused fieldset": { borderColor: "#5caf90" }, 
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchNormal1 size="24" color="#5caf90" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
