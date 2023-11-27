import { createAsyncThunk } from "@reduxjs/toolkit";
import users from "../../data/users.json"

export const getLoggedFromApiTrunk = createAsyncThunk("logged/getLoggedFromApi", async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users)
        }, 200)
    })
})

