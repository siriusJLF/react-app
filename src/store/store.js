import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as initData from './reducer';
import thunk from 'redux-thunk'; // 用来在action里面支持异步
import { persistStore, persistReducer } from 'redux-persist' // 用来避免刷新导致store重置
import storage from 'redux-persist/lib/storage';
let rootReducer = combineReducers({ ...initData })
const myReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer);
let store = createStore(
  myReducer,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);
export default store;