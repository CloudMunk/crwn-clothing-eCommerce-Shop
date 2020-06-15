import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middleWares = [logger];


// Technically don't need to export here, but doing it just in case we need it down the line.
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

// Technically don't need to export here either, but doing it just in case we need it down the line.
export const persistor = persistStore(store);

export default { store, persistor };