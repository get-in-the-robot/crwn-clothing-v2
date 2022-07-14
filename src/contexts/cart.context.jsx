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

const removeCartItem = (
  cartItems,
  productToRemove,
  removeCompletely = false
) => {
  const itemToRemove = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  return itemToRemove.quantity <= 1 || removeCompletely
    ? cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
    : cartItems.map((cartItem) => {
        if (cartItem.id === itemToRemove.id)
          return { ...itemToRemove, quantity: --itemToRemove.quantity };

        return cartItem;
      });
};

export const CartContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // const newTotalQuantity = cartItems.reduce((acc, item) => {
    //   return (acc += item.quantity);
    // }, 0);

    const totals = cartItems.reduce(
      (acc, item) => {
        acc.totalPrice += item.price * item.quantity;
        acc.totalQuantity += item.quantity;
        return acc;
      },
      {
        totalPrice: 0,
        totalQuantity: 0,
      }
    );

    setTotalQuantity(totals.totalQuantity);
    setTotalPrice(totals.totalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove, removeCompletely = false) => {
    setCartItems(removeCartItem(cartItems, productToRemove, removeCompletely));
  };

  const value = {
    cartOpen,
    setCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    totalQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
