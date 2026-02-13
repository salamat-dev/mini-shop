'use client';
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item._id === product._id);
      if (exist) {
        return prev.map(item =>
          item._id === product._id
            ? { ...item, count: item.count + 1 }
            : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  const removeFromCart = (_id) => {
    if(window.confirm('آیا از حذف محصول مطمئنید؟')){
      setCart(prev => prev.filter(item => item._id !== _id));
    }
  };

  const updateCount = (_id, count) => {
    setCart(prev =>
      prev.map(item =>
        item._id === _id ? { ...item, count: Math.max(1, count) } : item
      )
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
