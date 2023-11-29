import { createSlice, current } from "@reduxjs/toolkit";
import { getRoomsFromApiTrunk } from "./roomsTrunk";


export const RoomsSlice = createSlice({
    name: "rooms",
    initialState: {
        data: [],
        status: "idle", // | "fulfilled" | "rejected" | "pending"
        error: null
    },
    reducers: {

        getSelect: (state, action) => {

            state.data = action.payload;
        },

        getNewData: (state, action) => {
            state.changeRoom = state.data
        },

        updateRoom: (state, action) => {

            const data = current(state.changeRoom)
            const index = data.findIndex((update) => update.id === action.payload.id)
            console.log(index)
            if (index !== -1) {
                const updatedData = {
                    ...data[index],
                    photo: action.payload.formData.photo,
                    fullName: action.payload.formData.fullName,
                    job: action.payload.formData.job,
                    email: action.payload.formData.email,
                    phone: action.payload.formData.phone,
                    startDate: action.payload.formData.startDate,
                    descriptionJob: action.payload.formData.descriptionJob,
                    status: action.payload.formData.status,
                    password: action.payload.formData.password,

                }

                state.data = data.map((item, i) => (i === index ? updatedData : item));
                console.log(state.data)
            }
        },
        createRoom: (state, action) => {
            const data = state.changeRoom

           state.data = [{
                id: action.payload.id,
                photo: action.payload.formData.photo,
                fullName: action.payload.formData.fullName,
                job: action.payload.formData.job,
                email: action.payload.formData.email,
                phone: action.payload.formData.phone,
                startDate: action.payload.formData.startDate,
                descriptionJob: action.payload.formData.descriptionJob,
                status: action.payload.formData.status,
                password: action.payload.formData.password
            },
            ...data
            ]

    },
},

    extraReducers: (builder) => {
        builder.addCase(getRoomsFromApiTrunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload;
            state.changeRoom = state.data
        })
            .addCase(getRoomsFromApiTrunk.rejected, (state, action) => {
                state.status = "rejected"
                console.log(getRoomRooms(state, action))
                state.error = action.error.message
            })
            .addCase(getRoomsFromApiTrunk.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { getSelect, updateRoom, createRoom } = RoomsSlice.actions


export const getRoomsDataAvailable = state => state.rooms.data.filter((available) => available.status === "Available")
export const getRoomsDataBooked = state => state.rooms.data.filter((booked) => booked.status === "Booked")
export const getRoomsData = state => state.rooms.data
export const getRoomsTable = state => state.rooms.changeRoom;
export const getRoomsStatus = state => state.rooms.status;
export const getRoomsError = state => state.rooms.error;
