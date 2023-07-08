import { configureStore } from "@reduxjs/toolkit";
import sign from './modules/signSlice'
import book from './modules/bookSlice'

export const store = configureStore({
    reducer: {
        sign,
        book
    }
})