import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: "light"
}

export const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers: {
        lightTheme:(state)=>{
            state.theme = "light"
        },
        darkTheme: (state)=>{
            state.theme = "dark"
        }
    }
})

export const { lightTheme, darkTheme } = themeSlice.actions
export default themeSlice.reducer