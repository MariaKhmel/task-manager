import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './authSlice'
const authPersistConfig = {
    key: 'auth',
    storage,
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
];

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        // todos: todosReducer,
    },
    middleware,
    // devTools: process.env.NODE_ENV === 'development',


})

export const persistor = persistStore(store)

export default store;