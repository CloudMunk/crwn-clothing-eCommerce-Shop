// Utility functions allow us to keep our files clean and organize functions that we may 
// need in multiple files in one location.


// Add items to cart, and allows them to be grouped together. On the first add to cart the quantity property
// gets added which allows us to reference it later in our if statement.
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1}]
}