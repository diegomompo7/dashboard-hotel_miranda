import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../data/users.json"

export const getUserLoggedFromApiTrunk = createAsyncThunk("logged/getLoggedFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users)
        }, 200)
    })
})