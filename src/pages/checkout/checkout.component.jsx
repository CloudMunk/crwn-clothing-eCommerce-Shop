import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


// Components
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

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
    </div>
)

const mapStateToProps  = createStructuredSelector({
    cartItems: selectCartItems,
    total: selecteCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);