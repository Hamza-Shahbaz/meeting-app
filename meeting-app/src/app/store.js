import { configureStore } from "@reduxjs/toolkit";
import monthReducer from '../features/Month/monthSlice'

export const store = configureStore({
    reducer: {
        month: monthReducer,
    }
})