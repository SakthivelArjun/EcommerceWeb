import React, { useState } from "react";
import { Box } from "@mui/material";

const ImageZoom = ({ src, alt }: { src: string; alt: string }) => {
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <Box
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      sx={{
        width: "100%",
        height: 300,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        cursor: "zoom-in",
        backgroundImage: `url(${src})`,
        backgroundSize: isHovering ? "200%" : "contain",
        backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
        transition: "background-size 0.3s ease-in-out",
      }}
    />
  );
};

export default ImageZoom;
