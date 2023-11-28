import { createSlice, current } from "@reduxjs/toolkit";
import { getUsersFromApiTrunk } from "./usersTrunk";


export const UsersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        status: "idle", // | "fulfilled" | "rejected" | "pending"
        error: null
    },
    reducers: {

        getActive: (state, action) => {

            const fullActive = state.data.filter((active) => active.status === "ACTIVE")
            state.viewTable = fullActive;

        },
        getInactive: (state, action) => {

            const fullInactive = state.data.filter((inactive) => inactive.status === "INACTIVE")
            state.viewTable = fullInactive;

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
        builder.addCase(getUsersFromApiTrunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload;
            state.viewTable = state.data
        })
            .addCase(getUsersFromApiTrunk.rejected, (state, action) => {
                state.status = "rejected"
                console.log(getUserUsers(state, action))
                state.error = action.error.message
            })
            .addCase(getUsersFromApiTrunk.pending, (state, action) => {
                state.status = "pending"
            })
    }
})

export const { getAll, getInactive, getActive, getEmployee, getSelect, updateUser, getId, createUser } = UsersSlice.actions

export const getUsersData = state => state.users.data
export const getUsersTable = state => state.users.viewTable
export const getUsersStatus = state => state.users.status;
export const getUsersError = state => state.users.error;
