import { createSlice } from "@reduxjs/toolkit";
import { getUsersFromApiTrunk } from "./usersTrunk";


export const UsersSlice = createSlice({
    name: "users",
    initialState:{
        data: [],
        status: "idle", // | "fulfilled" | "rejected" | "pending"
        error: null
    },
    reducers: {

        getActive:(state, action) => {
            
            const fullActive = state.data.filter((active) => active.status === "ACTIVE")
            state.viewTable = fullActive;
            
        },
        getInactive:(state, action) => {
            
            const fullInactive = state.data.filter((inactive) => inactive.status === "INACTIVE")
            state.viewTable = fullInactive;
            
        },
        getAll:(state, action) => {
            state.viewTable = state.data;
        },
        getEmployee:(state, action) => {
            
            const searchEmployee = state.data.filter((employee) => employee.fullName.includes(action.payload))
            state.viewTable = searchEmployee;
            
        },

},

    extraReducers: (builder) => {
        builder.addCase(getUsersFromApiTrunk.fulfilled, (state,action) => {
            state.status = "fulfilled"
            state.data = action.payload;
        })
        .addCase(getUsersFromApiTrunk.rejected,(state,action)  => {
            state.status = "rejected"
            console.log(getUserUsers(state, action))
            state.error = action.error.message
        })
        .addCase(getUsersFromApiTrunk.pending,(state,action)  => {
            state.status = "pending"
        })
    }
})

export const {getAll, getInactive, getActive, getEmployee} = UsersSlice.actions

export const getUsersData = state => state.users.data
export const getUsersStatus = state => state.users.status;
export const getUsersError = state => state.users.error;