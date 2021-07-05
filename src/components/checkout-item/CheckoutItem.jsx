/* eslint-disable object-curly-newline */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/cart/cart.actions';

import './CheckoutItem.styles.scss';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(actions.addItem(item)),
  removeItem: (item) => dispatch(actions.removeItem(item)),
  clearItem: (item) => dispatch(actions.clearItemFromCart(item)),
});

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button type="button" className="decrease-button" onClick={() => removeItem(cartItem)}>
          <span className="sr-only">decrease the quantity of this product in your cart</span>
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button type="button" className="increase-button" onClick={() => addItem(cartItem)}>
          <span className="sr-only">increase the quantity of this product in your cart</span>
          &#10095;
        </button>
      </div>
      <span className="price">{price}</span>
      <button type="button" className="remove-button" onClick={() => clearItem(cartItem)}>
        <span className="sr-only">remove this product from your cart</span>
        &#10005;
      </button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
