import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    step: 1,
    isActive: true
};

const counterSlice = createSlice({
    name: "counter",

    initialState,

    reducers: {
        increment(state) {
            state.value += state.step;
        },

        decrement(state) {
            state.value -= state.step;
        },

        setStep(state, action) {
            state.step = action.payload;
        },

        toggleActive(state) {
            state.isActive = !state.isActive;
        },

        resetStep(state) {
            state.step = 1;
        }
    }
});

export const {
    increment,
    decrement,
    incrementByAmount,
    setStep,
    resetStep,
    toggleActive
} = counterSlice.actions;
export default counterSlice.reducer;