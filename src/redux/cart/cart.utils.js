export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // find matching cartItem to adjust quantity
  const existingItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );
  
  // remove item completely if only 1 left
  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  };

  // reduce quantity in cart
  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id 
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}