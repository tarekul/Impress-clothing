import { createSelector } from "reselect";
/*
Library to memoize whole function 
selectCollection is not memoized due to collectionUrlParam being 
passed in from collection components mapStateToProps whenever the
state changes and calling a new instance of our selectCollection
*/
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
