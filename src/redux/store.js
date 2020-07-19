import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

// Saga
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

// Only push logger into middleWares if we are in development.
if(process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}


// Technically don't need to export here, but doing it just in case we need it down the line.
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(rootSaga);

// Technically don't need to export here either, but doing it just in case we need it down the line.
export const persistor = persistStore(store);

export default { store, persistor };