import React from 'react';

import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './CartItem.styles';

const CartItem = ({ item }) => {
  const {
    imageUrl,
    name,
    price,
    quantity,
  } = item;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span>{name}</span>
        <span>{`${quantity} x $${price}`}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
