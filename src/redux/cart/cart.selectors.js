import { createSelector } from 'reselect';

// input
const selectCart = state => state.cart;

// output selector to get cartItems aray for memoization
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// reduce array to get total cart quantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
    cartItems => 
      cartItems.reduce((
        accQuantity, cartItem) => accQuantity + cartItem.quantity * cartItem.price,0
      )
);