import { configureStore } from "@reduxjs/toolkit";
import userSplice from "./userSplice";

export const store = configureStore({
       reducer:{
        user:userSplice
    }
})