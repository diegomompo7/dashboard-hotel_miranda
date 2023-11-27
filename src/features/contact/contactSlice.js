import { createSlice } from "@reduxjs/toolkit";
import { getContactFromApiTrunk } from "./contactTrunk";


export const ContactSlice = createSlice({
    name: "contact",
    initialState:{
        data: [],
        status: "idle", // | "fulfilled" | "rejected" | "pending"
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getContactFromApiTrunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload;
        })
        .addCase(getContactFromApiTrunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(getUserContact(state, action))
            state.error = action.error.message
        })
        .addCase(getContactFromApiTrunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
})

export const getContactData = state => state.contact.data
export const getContactStatus = state => state.contact.status;
export const getContactError = state => state.contact.error;