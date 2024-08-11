import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../component/feature/CartSlice";

export default configureStore({
    reducer:{
       cartCounter : cartReducer,
    },
})