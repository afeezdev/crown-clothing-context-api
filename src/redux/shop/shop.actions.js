import ShopActionTypes from './shop.types';
//import collectionComponent from '../../pages/collection/collection.component';

export const updateCollections = collectionMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
})