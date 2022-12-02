import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type menuButtonState = {
    isShown: boolean;
}

const initialState: menuButtonState = {
    isShown: false,
};

export const menuButtonSlice = createSlice({
    name: "menuButtonSlice",
    initialState,
    reducers: {
        setIsShown: (state, action: PayloadAction<boolean>) => {
            state.isShown = action.payload;
        },
        toggleIsShown: (state) => {
            state.isShown = !state.isShown;
        }
    }
})

export const { setIsShown, toggleIsShown } = menuButtonSlice.actions;