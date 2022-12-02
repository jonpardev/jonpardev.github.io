import { configureStore } from "@reduxjs/toolkit"
import { menuButtonSlice } from "./menuButtonSlice"

export const store = configureStore({
    reducer: {
        menuButton: menuButtonSlice.reducer,
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>