import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ShowHeaderInfoSliceState } from './types'

const initialState: ShowHeaderInfoSliceState = {
    isShowHeaderInfo: true
}

export const showHeaderInfoSlice = createSlice({
    name: "showHeaderInfo",
    initialState,
    reducers: {
        setShowHeaderInfo: (state, action: PayloadAction<boolean>) => {
            state.isShowHeaderInfo = action.payload
        }
    }
})

export const { setShowHeaderInfo } = showHeaderInfoSlice.actions