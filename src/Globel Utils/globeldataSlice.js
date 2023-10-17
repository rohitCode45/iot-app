import { createSlice } from "@reduxjs/toolkit";

const initialState = { liveData: {}, liveStatus: 3, liveFdsData: {}, fdsLiveState: 1 }
const globeldataSlice = createSlice({
    name: "globelData",
    initialState,
    reducers: {
        setLiveData: (state, { payload }) => {
            state.liveData = payload
        },
        setLiveStatus: (state, { payload }) => {
            state.liveStatus = payload
        },
        setLiveFdsData: (state, { payload }) => {
            state.liveFdsData = payload
        },
        setFdsLiveStatus: (state, { payload }) => {
            state.fdsLiveState = payload
        },
    }
})
export const {
    setLiveData,
    setLiveStatus,
} = globeldataSlice.actions;
export const selectLiveData = state => (state.globelData.liveData)
export const selectLiveStatus = state => (state.globelData.liveStatus)
export const selectLiveFdsData = state => (state.globelData.liveFdsData)
export const selectFdsLiveStatus = state => (state.globelData.fdsLiveState)
export default globeldataSlice.reducer;


