"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/context/ProductsContext";
import { Box, Typography, Button, Stack, Paper, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function ProductSlugPage() {
  const { slug } = useParams();
  const { getProductsBySlug } = useProducts();
  const product = getProductsBySlug(slug);
  const { addToCart } = useCart();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [zoomStyle, setZoomStyle] = useState({
    backgroundPosition: "center",
    backgroundSize: "contain",
  });

  const [activeImage, setActiveImage] = useState(product?.images?.[0]);

  if (!product) return null;

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
          px: 2,
        }}
      >
        <Paper
          elevation={4}
          sx={{
            width: "100%",
            maxWidth: 1000,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
            justifyContent={{ md: "space-around" }}
          >
            <Box sx={{ width: { xs: "100%", md: 460 }, maxWidth: 460 }}>
              {/* Big pic*/}
              <Box
                sx={{
                  height: { xs: 300, md: 320 },
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundImage: `url(${activeImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: zoomStyle.backgroundPosition,
                  backgroundSize: zoomStyle.backgroundSize,
                  cursor: { xs: "default", md: "zoom-in" },
                }}
                onMouseMove={(e) => {
                  if (window.innerWidth < 900) return;

                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;

                  setZoomStyle({
                    backgroundPosition: `${x}% ${y}%`,
                    backgroundSize: "150%",
                  });
                }}
                onMouseLeave={() => {
                  if (window.innerWidth < 900) return;

                  setZoomStyle({
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                  });
                }}
              />

              {/* Small pics  */}
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{ mt: 2, flexWrap: "wrap" }}
                gap={1}
              >
                {product.images.map((img) => (
                  <Box
                    key={img}
                    onClick={() => setActiveImage(img)}
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: 2,
                      border:
                        activeImage === img
                          ? "2px solid #1976d2"
                          : "1px solid #ccc",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "0.4s",
                    }}
                  >
                    <Box
                      component="img"
                      src={img}
                      alt=""
                      sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box sx={{ width: { xs: "100%", md: 380 } }}>
              <Typography variant="h4" fontWeight="bold" mb={2}>
                {product.title}
              </Typography>

              <Typography variant="h6" color="primary" mb={3}>
                {product.price.toLocaleString()} تومان
              </Typography>

              <Typography sx={{ lineHeight: 2, mb: 4 }}>
                {product.content}
              </Typography>

              <Button
                onClick={() => {
                  addToCart(product), setOpenSnackbar(true);
                }}
                variant="contained"
                size="large"
              >
                افزودن به سبد خرید
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Box>
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
          {product.title} به سبد خرید اضافه شد
        </Alert>
      </Snackbar>
    </>
  );
}
