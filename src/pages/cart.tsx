import React from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store/features/store";
import { addToCart, removeFromCart } from "../state/store/features/cartData";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate("/home");
  };

  // Calculate total price
  // const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box sx={{ p: 3, mx: "auto" }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, textAlign: "left" }}>
        Shopping Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography sx={{ mt: 2, textAlign: "center", fontSize: 18, color: "gray" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          {/* Table Layout */}
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          style={{ width: 50, height: 50, objectFit: "contain", borderRadius: 8 }}
                        />
                        <Typography variant="body1" fontWeight="bold">
                          {item.title}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>${item.price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IconButton
                          onClick={() => dispatch(removeFromCart(item.id))}
                          sx={{ border: "1px solid #ddd", borderRadius: 1 }}
                        >
                          <Remove />
                        </IconButton>
                        <Typography sx={{ minWidth: 24, textAlign: "center", fontWeight: "bold" }}>
                          {item.quantity}
                        </Typography>
                        <IconButton
                          onClick={() => dispatch(addToCart(item))}
                          sx={{ border: "1px solid #ddd", borderRadius: 1 }}
                        >
                          <Add />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => dispatch(removeFromCart(item.id))}
                        sx={{ color: "red" }}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Bottom Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3 }}>
            <Button variant="text" onClick={navigateToCheckout} sx={{ color: "#5caf9", fontSize: 16, textTransform: "none" }}>
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              sx={{
                px: 3,
                backgroundColor: "#5caf90",
                color: "#fff",
                "&:hover": { backgroundColor: "#4a9c7d" },
              }}
            >
              Check Out
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
