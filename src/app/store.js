import { configureStore } from "@reduxjs/toolkit";
import { LoggedSlice } from "../features/logged/loggedSlice";
import { ContactSlice } from "../features/contact/contactSlice";

export const store = configureStore({
    reducer: {
        logged: LoggedSlice.reducer,
        contact: ContactSlice.reducer
    }
})