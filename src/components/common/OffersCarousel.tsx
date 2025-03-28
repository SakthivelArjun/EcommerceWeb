import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import cover1 from '../../assets/cover1.png';
import cover2 from '../../assets/cover2.png';
import cover3 from '../../assets/cover3.png';
import cover4 from '../../assets/cover4.png';


const offerImages = [cover4, cover2, cover3, cover1, cover3];

const OffersCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % offerImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: "1300px",
                height: "450px",
                mx: "auto",
                mt: 4,
                mb: 5,
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    transition: "transform 1s ease-in-out",
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${offerImages.length * 100}%`,
                    height: "100%",
                }}
            >
                {offerImages.map((src, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={src}
                            alt={`Offer ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default OffersCarousel;
