import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    month: (new Date()).getMonth()
}

export const monthSlice = createSlice({
    name: 'month',
    initialState,
    reducers: {
        nextMonth: (state) => {
            state.month += 1;
        },
        previousMonth: (state) => {
            state.month -= 1;
        }
    }
})


export const { nextMonth, previousMonth} = monthSlice.actions;
export const monthCount = (state) => state.month.month;
export default monthSlice.reducer;
