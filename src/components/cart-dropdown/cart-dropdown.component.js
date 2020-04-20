import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component.js';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
          ))
      }
    </div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  // memoised to prevent unnecessary rerendering for unrelated state changes
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);