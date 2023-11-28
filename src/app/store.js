import { configureStore } from "@reduxjs/toolkit";
import { LoggedSlice } from "../features/logged/loggedSlice";
import { ContactSlice } from "../features/contact/contactSlice";
import { UsersSlice } from "../features/users/usersSlice";

export const store = configureStore({
    reducer: {
        logged: LoggedSlice.reducer,
        contact: ContactSlice.reducer,
        users: UsersSlice.reducer
    }
})