'use client';

import localFont from 'next/font/local';

const vazir = localFont({
  src: '../../public/fonts/vazir.ttf',
  variable: '--font-vazir',
});


import '@/style/global.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import { ProductsProvider } from '@/context/ProductsContext';
import { CartProvider } from '@/context/CartContext';


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProductsProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </ProductsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
