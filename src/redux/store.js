import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from './reducer';

export const store = configureStore({
    reducer: {
        phoneBook: phoneBookReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});