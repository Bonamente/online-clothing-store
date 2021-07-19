/* eslint-disable import/prefer-default-export */
import ShopActionsTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: ShopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
