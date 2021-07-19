/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import WithSpinner from '../../components/hoc/with-spinner/WithSpinner';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import * as actions from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(actions.updateCollections(collectionsMap)),
});

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ShopPage);
