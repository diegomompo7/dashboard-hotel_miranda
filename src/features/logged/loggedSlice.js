import { createSlice } from "@reduxjs/toolkit";
import { getUserLoggedFromApiTrunk } from "./loggedTrunk";


export const LoggedSlice = createSlice({
    name: "logged",
    initialState:{
        data: [],
        status: "idle", // | "fulfilled" | "rejected" | "pending"
        error: null
    },
    reducers:{
        getUserLogged: (state, action) =>  state.data.filter((user) => user.email === action.payload)
    },
    extraReducers: (builder) => {
        builder.addCase( getUserLoggedFromApiTrunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload;
        })
        .addCase( getUserLoggedFromApiTrunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(getUserLogged(state, action))
            state.error = action.error.message
        })
        .addCase( getUserLoggedFromApiTrunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
})

export const {getUserLogged} = LoggedSlice.actions;
export const getLoggedData = state => state.logged.data
export const getLoggedStatus = state => state.logged.status;
export const getLoggedError = state => state.logged.error;