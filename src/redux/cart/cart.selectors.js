import { createSelector } from "reselect";

/*
input selector is a function that gets the state 
and return one layer deep of the state
*/

const selectCart = (state) => state.cart;

export const selectCartHide = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, cartItem) => (acc += cartItem.quantity), 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc, cartItem) => (acc += cartItem.quantity * cartItem.price),
    0
  )
);
