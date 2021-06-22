import React from 'react';

import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import SHOP_DATA from './shop.data';

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {
          collections.map(({
            id,
            title,
            routeName,
            items,
          }) => <CollectionPreview key={id} title={title} routeName={routeName} items={items} />)
        }
      </div>
    );
  }
}
