import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './redux/cartSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'cart',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
  
export const persistor = persistStore(store)