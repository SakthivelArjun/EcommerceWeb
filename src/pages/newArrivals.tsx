import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import ProductCard from "../components/common/ProductCard";
import { RootState } from "../state/store/features/store";
import { useSelector } from "react-redux";
import Filters from "../components/common/Filters";

const NewArrivals: React.FC = () => {
    const productList = useSelector((state: RootState) => state.productData?.productList);
    const uniqueCategories = Array.from(new Set(productList?.map((product: any) => product.category)));
    const uniqueBrands = Array.from(new Set(productList?.map((product: any) => product.brand)));

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

    const [filteredProducts, setFilteredProducts] = useState(productList);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    // Handle Brand Change
    const handleBrandChange = (brand: string) => {
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
        );
    };


    const applyFilters = () => {
        let filtered = productList;

        // Filter by Category
        if (selectedCategories.length > 0) {
            filtered = filtered.filter((product: any) => selectedCategories.includes(product.category));
        }

        // Filter by Brand
        if (selectedBrands.length > 0) {
            filtered = filtered.filter((product: any) => selectedBrands.includes(product.brand));
        }

        setFilteredProducts(filtered);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                {/* Filter & Layout Icons */}
                <Grid item xs={12} sm={4} md={3} lg={2.5}>
                    <Filters
                        uniqueCategories={uniqueCategories}
                        uniqueBrands={uniqueBrands}
                        selectedCategories={selectedCategories}
                        selectedBrands={selectedBrands}
                        handleCategoryChange={handleCategoryChange}
                        handleBrandChange={handleBrandChange}
                        applyFilters={applyFilters}
                    />
                </Grid>

                <Grid item xs={12} sm={8} md={9} lg={9.5}>
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, }}>
                        <Box component="span" sx={{ color: "#4b5966" }}>New Arrivals</Box>{" "}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#777777", mb: 4 }}>
                        Hurry Up!! and get free shipping
                    </Typography>


                    {/* Product Grid */}
                    <Grid container spacing={3}>
                        {filteredProducts.map((product: any, index) => (
                            <Grid item key={product.title || index} xs={12} sm={6} md={4} lg={3}>
                                <ProductCard {...product} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NewArrivals;
