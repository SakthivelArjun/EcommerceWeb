import React, { useState } from "react";
import { Button, Paper, Box } from "@mui/material";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { motion } from "framer-motion";

interface DropdownButtonProps {
  title: string;
  options: string[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ title, options }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box position="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Button sx={{ color: "#5caf90" }}
        endIcon={hovered ? <ArrowDown2 size="16" color="#5caf90" /> : <ArrowUp2 size="16" color="#5caf90" />}
      >
        {title}
      </Button>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ position: "absolute", top: "100%", left: 0, width: "150px", zIndex: 10 }}
        >
          <Paper elevation={3} sx={{ bgcolor: "white", p: 1 }}>
            {options.map((option, index) => (
              <Box key={index} sx={{ p: 1, cursor: "pointer", color: "#7d7d7d", "&:hover": { bgcolor: "#5caf90" } }}>
                {option}
              </Box>
            ))}
          </Paper>
        </motion.div>
      )}
    </Box>
  );
};

export default DropdownButton;