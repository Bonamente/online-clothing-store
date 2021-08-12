import React, { useEffect, lazy, Suspense  } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner/Spinner';

import * as actions from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(
  () => import('../../components/collections-overview/CollectionsOverviewContainer')
);
const CollectionPageContainer = lazy(() => import('../collection/CollectionPageContainer'));

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(actions.fetchCollectionsStart()),
});

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ShopPage);
