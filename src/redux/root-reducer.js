import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// This is the storage for the local window browser. (Local storage, could also import sessionStorage from different lib)
import storage from 'redux-persist/lib/storage';

// Reducers
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);