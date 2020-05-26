import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/* used to match collection id number with COLLETION_ID_MAP key. 
 * This determines route in shop component
*/
export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )