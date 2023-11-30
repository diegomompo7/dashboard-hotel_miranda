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
        
        deleteRoom: (state, action) => {
            const data = current(state.changeRoom)
            const delRoom = data.filter((del) => del.id !== action.payload)
            console.log(delRoom)
            state.data = delRoom
    },

        getNewData: (state, action) => {
            state.changeRoom = state.data
        },

        updateRoom: (state, action) => {

            const data = current(state.changeRoom)
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
        createRoom: (state, action) => {
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

export const { getSelect, updateRoom, createRoom, deleteRoom, getNewData} = RoomsSlice.actions


export const getRoomsDataAvailable = state => state.rooms.data.filter((available) => available.status === "Available")
export const getRoomsDataBooked = state => state.rooms.data.filter((booked) => booked.status === "Booked")
export const getRoomsData = state => state.rooms.data
export const getChangeData = state => state.rooms.changeRoom;
export const getRoomsStatus = state => state.rooms.status;
export const getRoomsError = state => state.rooms.error;
