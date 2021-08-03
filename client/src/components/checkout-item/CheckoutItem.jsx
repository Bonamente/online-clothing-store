/* eslint-disable object-curly-newline */
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextForScreenReader,
  TextContainer,
  QuantityContainer,
  QuantityControlButtonContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(actions.addItem(item)),
  removeItem: (item) => dispatch(actions.removeItem(item)),
  clearItem: (item) => dispatch(actions.clearItemFromCart(item)),
});

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <QuantityControlButtonContainer type="button" onClick={() => removeItem(cartItem)}>
          <TextForScreenReader>
            decrease the quantity of this product in your cart
          </TextForScreenReader>
          &#10094;
        </QuantityControlButtonContainer>
        <span>{quantity}</span>
        <QuantityControlButtonContainer type="button" onClick={() => addItem(cartItem)}>
          <TextForScreenReader>
            increase the quantity of this product in your cart
          </TextForScreenReader>
          &#10095;
        </QuantityControlButtonContainer>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer type="button" onClick={() => clearItem(cartItem)}>
        <TextForScreenReader>
          remove this product from your cart
        </TextForScreenReader>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
