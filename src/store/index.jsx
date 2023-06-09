import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;