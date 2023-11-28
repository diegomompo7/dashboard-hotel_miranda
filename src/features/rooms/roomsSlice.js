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

        getAvailable: (state, action) => {

            const fullAvailable = state.data.filter((active) => active.status === "Available")
            state.viewTable = fullAvailable;

        },
        getBooked: (state, action) => {

            const fullBooked = state.data.filter((inactive) => inactive.status === "Booked")
            state.viewTable = fullBooked;

        },
        getAll: (state, action) => {
            state.viewTable = state.data;
        },
        getEmployee: (state, action) => {

            const searchEmployee = state.data.filter((employee) => employee.fullName.includes(action.payload))
            state.viewTable = searchEmployee;

        },
        getSelect: (state, action) => {

            state.viewTable = action.payload;
        },
        updateUser: (state, action) => {

            const data = state.viewTable
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
        createUser: (state, action) => {
            const data2 = current(state.viewTable)

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
            ...data2
            ]

    },

    getId: (state, action) => state.data.find((user) => parseInt(user.id) == id)

},

    extraReducers: (builder) => {
        builder.addCase(getRoomsFromApiTrunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload;
            state.viewTable = state.data
        })
            .addCase(getRoomsFromApiTrunk.rejected, (state, action) => {
                state.status = "rejected"
                console.log(getUserRooms(state, action))
                state.error = action.error.message
            })
            .addCase(getRoomsFromApiTrunk.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { getAll, getBooked, getAvailable, getEmployee, getSelect, updateUser, getId, createUser } = RoomsSlice.actions

export const getRoomsData = state => state.rooms.data
export const getRoomsTable = state => state.rooms.viewTable
export const getRoomsStatus = state => state.rooms.status;
export const getRoomsError = state => state.rooms.error;
