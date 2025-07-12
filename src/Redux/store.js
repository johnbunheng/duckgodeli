import { configureStore } from "@reduxjs/toolkit";
import cardslide from "./cardslide"
export const store = configureStore ({
    reducer:{
        card:cardslide
    }
})