import { createSlice } from "@reduxjs/toolkit";

const initialState = { liveData: {}, liveStatus: 1 }
const globeldataSlice = createSlice({
    name: "globelData",
    initialState,
    reducers: {
        setLiveData: (state, { payload }) => {
            state.liveData = payload
        },
        setLiveStatus: (state, { payload }) => {
            state.liveStatus = payload
        }
    }
})
export const {
    setLiveData,
    setLiveStatus,
} = globeldataSlice.actions;
export const selectLiveData = state => (state.globelData.liveData)
export const selectLiveStatus = state => (state.globelData.liveStatus)
// export const selectIncreaseBy = state => (state.counter.increaseBy)
export default globeldataSlice.reducer;


