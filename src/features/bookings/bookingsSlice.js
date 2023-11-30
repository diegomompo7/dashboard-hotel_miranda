import { createSlice, current } from "@reduxjs/toolkit";
import { getBookingsFromApiTrunk } from "./bookingsTrunk";


export const BookingsSlice = createSlice({
    name: "bookings",
    initialState: {
        data: [],
        status: "idle", // | "fulfilled" | "rejected" | "pending"
        error: null
    },
    reducers: {

        getClient: (state, action) => {

            console.log(current(state.changeBooking))

            const searchClient = state.changeBooking.filter((client) => client.name.includes(action.payload))
            state.data = searchClient;

        },
        getSelect: (state, action) => {

            state.data = action.payload;

        },
        
        deleteBooking: (state, action) => {
            const data = current(state.changeBooking)
            const delBooking = data.filter((del) => del.id !== action.payload)
            console.log(delBooking)
            state.data = delBooking
    },

        getNewData: (state, action) => {
            state.changeBooking = state.data
        },


        updateBooking: (state, action) => {

            const data = current(state.changeBooking)
            const index = data.findIndex((update) => update.id === action.payload.id)

            console.log(action.payload.formData)

            console.log(index)
            if (index !== -1) {
                const updatedData = {
                    ...data[index],
                    photos: action.payload.formData.photos.split("\n"),
                    roomType: action.payload.formData.roomType,
                    roomNumber: action.payload.formData.roomNumber,
                    description: action.payload.formData.description,
                    offer: action.payload.formData.offer,
                    priceNight: action.payload.formData.priceNight,
                    discount: action.payload.formData.discount,
                    cancellation: action.payload.formData.cancellation,
                    amenities: action.payload.formData.amenities.split("\n"),

                }

                state.data = data.map((item, i) => (i === index ? updatedData : item));
                console.log(updatedData)
            }
            
        },
        createBooking: (state, action) => {
            const data = current(state.data)

            console.log(data)

            const index = data.filter((create) => create.id)

            console.log(index)

           state.data = [{
            id: data[data.length-1].id+1,
            photos: action.payload.formData.photos.split("\n"),
            roomType: action.payload.formData.roomType,
            roomNumber: action.payload.formData.roomNumber,
            description: action.payload.formData.description,
            offer: action.payload.formData.offer,
            priceNight: action.payload.formData.priceNight,
            discount: action.payload.formData.discount,
            cancellation: action.payload.formData.cancellation,
            amenities: action.payload.formData.amenities.split("\n"),
            status: "Available"    
             },
            ...data
            ]

            console.log(state.data)

    },

    updateRoomToBooking: (state, action) => {
        const data = current(state.changeBooking)

        const updatedRoomId = {
            ...data[action.payload.id],
                roomId: action.payload.roomBooking

        }

        state.data = data.map((item, i) => (i === action.payload.id ? updatedRoomId : item));
        console.log(state.data)

    }
},

    extraReducers: (builder) => {
        builder.addCase(getBookingsFromApiTrunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload;
            state.changeBooking = state.data
        })
            .addCase(getBookingsFromApiTrunk.rejected, (state, action) => {
                state.status = "rejected"
                console.log(getBookingBookings(state, action))
                state.error = action.error.message
            })
            .addCase(getBookingsFromApiTrunk.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { getSelect, updateBooking, createBooking, deleteBooking, getNewData, getClient, updateRoomToBooking} = BookingsSlice.actions


export const getBookingsDataInProgress = state => state.bookings.data.filter((inProgress) => inProgress.status === "In Progress")
export const getBookingsData = state => state.bookings.data
export const getChangeData = state => state.bookings.changeBooking;
export const getBookingsStatus = state => state.bookings.status;
export const getBookingsError = state => state.bookings.error;
