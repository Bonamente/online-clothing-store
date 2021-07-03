import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_item, index) => index < 4)
        .map((item) => <CollectionItem key={item.id} item={item} />)}
    </div>
  </div>
);

export default CollectionPreview;
