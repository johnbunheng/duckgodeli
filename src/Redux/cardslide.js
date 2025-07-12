import { createSlice } from "@reduxjs/toolkit";

const cardSlide = createSlice({
    name:"card",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
            state.push(action.payload)
        }
    }
})
export const {AddItem} = cardSlide.actions
export default cardSlide.reducer