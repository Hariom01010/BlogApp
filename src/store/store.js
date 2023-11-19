import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import authReducer from "./authSlice";
import blogReducer from "./blogSlice";

const store = configureStore({
    reducer: {
        themeReducer,
        authReducer,
        blogReducer
    }
})

export default store