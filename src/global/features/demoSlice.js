import { createSlice } from "@reduxjs/toolkit";
const demoSlice = createSlice({
    name: "demo",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
           state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        }
    }
})

export default demoSlice.reducer