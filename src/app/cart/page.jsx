"use client";

import { useCart } from "@/context/CartContext";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartPage() {
  const { cart, removeFromCart, updateCount, totalPrice } = useCart();


  if (cart.length === 0)
    return (
      <Typography
        sx={{
          width: "100vw",
          height: "100vh",
          fontSize:50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        سبد خرید شما خالی است
      </Typography>
    );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        سبد خرید شما
      </Typography>

      {cart.map((item) => (
        <Paper
          key={item._id}
          elevation={2}
          sx={{ mb: 2, p: 2, borderRadius: 2 }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={2}
          >
            {/* pic of products  */}
            <Box
              component="img"
              src={item.images[0]}
              alt={item.title}
              sx={{
                width: 100,
                height: 100,
                objectFit: "contain",
                borderRadius: 1,
              }}
            />

            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography color="text.secondary">
                {item.price.toLocaleString()} تومان
              </Typography>
            </Box>

            {/* count */}
            <Stack direction="" gap={1} spacing={1} alignItems="center">
              <Button
                variant="outlined"
                size="small"
                onClick={() => updateCount(item._id, item.count - 1)}
              >
                -
              </Button>
              <Typography>{item.count}</Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => updateCount(item._id, item.count + 1)}
              >
                +
              </Button>
            </Stack>

            {/* del */}
            <IconButton onClick={() => removeFromCart(item._id)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Paper>
      ))}

      {/* total sum  */}
      <Box sx={{ mt: 4, textAlign: "right" }}>
        <Typography variant="h6">
          مجموع: {totalPrice.toLocaleString()} تومان
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          پرداخت
        </Button>
      </Box>
    </Box>
  );
}
