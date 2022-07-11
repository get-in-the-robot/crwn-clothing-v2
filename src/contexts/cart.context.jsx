import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const newItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (newItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === newItem.id)
        return { ...cartItem, quantity: ++cartItem.quantity };
      return cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cartItems.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0);

    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    cartOpen,
    setCartOpen,
    addItemToCart,
    cartItems,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
