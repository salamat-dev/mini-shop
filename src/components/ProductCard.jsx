"use client";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 300, mt: 2 }}>
        <Link
          href={`/products/${product.slug}`}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            height="250"
            image={product.images[0]}
            alt={product.title}
            sx={{ objectFit: "contain" }}
          />
        </Link>

        <CardContent sx={{ textAlign: "right", mt: 2 }}>
          <Link
            href={`/products/${product.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="h6">{product.title}</Typography>
          </Link>

          <Typography color="text.secondary">
            {product.description}
          </Typography>

          <Typography sx={{ mt: 1, textAlign: "left" }}>
            {product.price.toLocaleString()} تومان
          </Typography>
        </CardContent>

        <Button
          onClick={() => {
            addToCart(product);
            setOpenSnackbar(true);
          }}
          sx={{
            textAlign: "center",
            width: "90%",
            backgroundColor: "#1976d2",
            mb: 2,
            color: "white",
            mx: "auto",
            display: "block",
          }}
        >
          افزودن به سبد خرید
        </Button>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
          sx={{display:'flex', gap:3}}
        >
          {product.title} سبد خرید اضافه شد
        </Alert>
      </Snackbar>
    </>
  );
}
