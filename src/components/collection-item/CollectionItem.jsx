import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/CustomButton';

import * as actions from '../../redux/cart/cart.actions';

import './CollectionItem.styles.scss';

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(actions.addItem(item)),
});

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CollectionItem);
