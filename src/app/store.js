import { configureStore } from "@reduxjs/toolkit";
import { LoggedSlice } from "../features/logged/loggedSlice";
import { ContactSlice } from "../features/contact/contactSlice";
import { UsersSlice } from "../features/users/usersSlice";
import { RoomsSlice } from "../features/rooms/roomsSlice";

export const store = configureStore({
    reducer: {
        logged: LoggedSlice.reducer,
        contact: ContactSlice.reducer,
        users: UsersSlice.reducer,
        rooms: RoomsSlice.reducer
    }
})