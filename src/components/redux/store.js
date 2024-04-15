import { configureStore } from '@reduxjs/toolkit';

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

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    addTodoRequest,
    addTodoSuccess,
    addTodoError,
    deleteTodoRequest,
    deleteTodoSuccess,
    deleteTodoError,
    changeFilter,
    toggleCompletedRequest,
    toggleCompletedSuccess,
    toggleCompletedError,
    fetchTodosRequest,
    fetchTodosSuccess,
    fetchTodosError,
} from '../todos/todosActions';

const items = createReducer([], {
    [fetchTodosSuccess]: (_, { payload }) => payload,
    [addTodoSuccess]: (state, { payload }) => [...state, payload],
    [deleteTodoSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
    [toggleCompletedSuccess]: (state, { payload }) =>
        state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const loading = createReducer(false, {
    [fetchTodosRequest]: () => true,
    [fetchTodosSuccess]: () => false,
    [fetchTodosError]: () => false,
    [addTodoRequest]: () => true,
    [addTodoSuccess]: () => false,
    [addTodoError]: () => false,
    [deleteTodoRequest]: () => true,
    [deleteTodoSuccess]: () => false,
    [deleteTodoError]: () => false,
    [toggleCompletedRequest]: () => true,
    [toggleCompletedSuccess]: () => false,
    [toggleCompletedError]: () => false,
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

const todosReducer = combineReducers({
    items,
    filter,
    loading,
    error,
});


const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        todos: todosReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    // devTools: process.env.NODE_ENV === 'development',


})

export const persistor = persistStore(store)

export default store;