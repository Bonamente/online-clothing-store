import React from 'react';

import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const {
    name,
    imageUrl,
    price,
    quantity,
  } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <button type="button" className="remove-button">
        <span className="sr-only">remove this item from the cart</span>
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
