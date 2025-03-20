import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const MainLayout: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column">
      {/* Header */}
      <Header />

      {/* Main Content - Outlet */}
      <Box component="main" flexGrow={1} p={2} mt={8}> 
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
