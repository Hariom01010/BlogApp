import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const blogSlice  = createSlice({
    name:"blogs",
    initialState,
    reducers: {
        setBlog : (state,action)=>{
            return [...action.payload]
        }
    }
})

export const {setBlog} = blogSlice.actions
export default blogSlice.reducer
