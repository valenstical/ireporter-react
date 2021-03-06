import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import initialState from './initialState';


const saveSubsetBlacklistFilter = createBlacklistFilter(
  'user', ['isBusy', 'message', 'success']
);

/**
 * @constant persistConfig - Persistence store configuration
 * @constant persistReducer - Persisted reducer
 * @constant persistor - The redux-persist persistor function
 * @constant store - created store
 * @exports object - An object of the persisted store and the persistor
 */
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user'],
  transforms: [saveSubsetBlacklistFilter]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, initialState,
  composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);
export default { persistor, store };
