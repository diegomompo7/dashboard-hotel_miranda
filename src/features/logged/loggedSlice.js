import { createSlice } from "@reduxjs/toolkit";
import { getLoggedFromApiTrunk } from "./loggedTrunk";


export const LoggedSlice = createSlice({
    name: "logged",
    initialState:{
        data: [],
        status: "idle", // | "fulfilled" | "rejected" | "pending"
        error: null
    },
    reducers: {

        getLogged:(state, action) => {
            
            const logged = state.data.filter((logged) => logged.email === action.payload)
            state.data = logged;
            
        },
},

    extraReducers: (builder) => {
        builder.addCase(getLoggedFromApiTrunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload;
        })
        .addCase(getLoggedFromApiTrunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(getUserLogged(state, action))
            state.error = action.error.message
        })
        .addCase(getLoggedFromApiTrunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
})

export const {getLogged} = LoggedSlice.actions;
export const getLoggedData = state => state.logged.data
export const getLoggedStatus = state => state.logged.status;
export const getLoggedError = state => state.logged.error;