import React from "react";
import { Box, Typography, Button, IconButton, Card, CardMedia, CardContent } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store/features/store";
import { addToCart, removeFromCart } from "../state/store/features/cartData";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold">
        🛒 Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography sx={{ mt: 2 }}>Your cart is empty.</Typography>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <Card key={index} sx={{ display: "flex", alignItems: "center", my: 2, p: 2 }}>
              <CardMedia
                component="img"
                image={item.images[0]}
                alt={item.title}
                sx={{ width: 100, height: 100, objectFit: "contain", borderRadius: 2 }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${item.price.toFixed(2)}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <IconButton onClick={() => dispatch(removeFromCart(item.title))}>
                    <Remove />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton onClick={() => dispatch(addToCart(item))}>
                    <Add />
                  </IconButton>
                  <IconButton onClick={() => dispatch(removeFromCart(item.title))} sx={{ color: "red", ml: 1 }}>
                    <Delete />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}

          <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </Box>
  );
};

export default Cart;
