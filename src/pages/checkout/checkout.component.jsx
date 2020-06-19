import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

// Selectors
import { selectCartItems, selecteCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';


const CheckOutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="test-warning">
            *Please use the following test credit card for payment* 
            <br />
            4242 4242 4242 4242 - Exp: 01/21 CVV: 123
        </div>
        <StripeCheckoutButton className="button" price={total} />
    </div>
)

const mapStateToProps  = createStructuredSelector({
    cartItems: selectCartItems,
    total: selecteCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);