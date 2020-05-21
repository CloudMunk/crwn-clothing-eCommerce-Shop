// Memoization is the caching of the selectors value, which can be done using a library called re-select.

import { createSelector } from 'reselect';

// There are two types of selectors: input type, and output typebundleRenderer.renderToStream


// An input selector takes the whole state and returns a slice back(one layer deep usually). starts with 'select'
const selectCart = state => state.cart;

// Takes two arguments, the first is an array of the input selectors. (CartItems is an actual property in our data)
// And then the second argument is a funciton that returns the value we want out of the selector.
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0)
)