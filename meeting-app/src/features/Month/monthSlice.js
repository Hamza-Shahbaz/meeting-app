import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    month: (new Date()).getMonth(),
    year: (new Date()).getFullYear()
}

export const monthSlice = createSlice({
    name: 'month',
    initialState,
    reducers: {
        nextMonth: (state) => {
            if (state.month == 11) {
                state.month = 0;
                state.year += 1
            }
            else {
                state.month += 1;
            }
        },
        previousMonth: (state) => {
            if (state.month == 0) {
                state.month = 11;
                state.year -= 1
            }
            else {
                state.month -= 1;
            }
        }
    }
})


export const { nextMonth, previousMonth} = monthSlice.actions;
export default monthSlice.reducer;
