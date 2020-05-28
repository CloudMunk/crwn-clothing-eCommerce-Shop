import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

// Selectors
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

// Actions 
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';


// Put history in arguments
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? (
                cartItems.map(cartItem => ( 
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ) : (
                <span className="empty-message">Your cart is empty</span>
                )
            }
        </div>
        {/* Then render it with an onClick event that takes a function and pushes to the url ending. */}
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


// We are given access to history because of withRouter
export default withRouter(connect(mapStateToProps)(CartDropdown)); 