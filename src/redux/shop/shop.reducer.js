import SHOP_DATA from './shop.data';

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action) => {
    // console.log('state', state)
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}
console.log('Initial state', INITIAL_STATE.collections)
export default shopReducer;