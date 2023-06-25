import { configureStore } from "@reduxjs/toolkit";
import IdReducer from "./slice/Idslice";

export const store = configureStore (
    {
        reducer: {
            id: IdReducer
        }
    }
)