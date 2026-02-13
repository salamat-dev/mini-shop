"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

  const menuItems = [
    { title: "خانه", href: "" },
    { title: "محصولات", href: "" },
    { title: "درباره من/فوتر", href: "/about" },
    { title: "تماس با ما", href: "" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          mb: 5,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1300,
            mx: "auto",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            py: 1.5,
          }}
        >
          {/* MOBILE HAMBURGER */}
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO */}
          <Typography
            component={Link}
            href="/"
            variant="h5"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 800,
              letterSpacing: 1,
              transition: "0.3s",
              "&:hover": { color: "primary.main" },
            }}
          >
            Parnian
          </Typography>

          {/* DESKTOP MENU */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {menuItems.map((item) => (
              <Button
                key={item.title}
                component={Link}
                href={item.href}
                sx={{
                  fontSize: 16,
                  color: "text.primary",
                  px: 0,
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -4,
                    width: 0,
                    height: 2,
                    backgroundColor: "primary.main",
                    transition: "0.3s",
                  },
                  "&:hover::after": { width: "100%" },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: 999,
                px: 3,
                textTransform: "none",
                fontWeight: 500,
                display: { xs: "none", md: "inline-flex" },
              }}
            >
              ورود / ثبت نام
            </Button>

            <IconButton component={Link} href="/cart">
              <Badge badgeContent={totalCount} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        SlideProps={{ direction: "left" }}
        PaperProps={{
          sx: {
            width: 210,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            background: "linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)",
          },
        }}
      >
        <Box
          sx={{
            px: 2,
            py: 3,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" fontWeight="bold" textAlign="center" mb={3}>
            منو
          </Typography>

          <List sx={{ flexGrow: 1 }}>
            {menuItems.map((item) => (
              <ListItem key={item.title} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    py: 1.2,
                    justifyContent: "flex-end", 
                    textAlign: "right",
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 500,
                      textAlign: "right",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
