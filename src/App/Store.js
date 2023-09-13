import { configureStore } from "@reduxjs/toolkit";
import globeldataSlice from "../Globel Utils/globeldataSlice";


export default configureStore({
    reducer: {
        globelData: globeldataSlice
    },
});
