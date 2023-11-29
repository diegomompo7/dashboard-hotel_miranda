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
        getEmployee: (state, action) => {

            const searchEmployee = state.data.filter((employee) => employee.fullName.includes(action.payload))
            state.data = searchEmployee;

        },
        getSelect: (state, action) => {

            state.data = action.payload;
        },

        getNewData: (state, action) => {
            state.changeUser = state.data
        },
        updateUser: (state, action) => {

            const data = current(state.changeUser)
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
            const data = state.data

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
        builder.addCase(getUsersFromApiTrunk.fulfilled, (state, action) => {
            state.status = "fulfilled"
            state.data = action.payload;
            state.changeUser = state.data
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

export const {getEmployee, getSelect, updateUser, createUser, getNewData } = UsersSlice.actions
export const getUsersDataActive = state => state.users.data.filter((active) => active.status === "ACTIVE")
export const getUsersDataInactive = state => state.users.data.filter((inactive) => inactive.status === "INACTIVE")
export const getUsersData = state => state.users.data
export const getChangeData = state => state.users.changeUser
export const getUsersStatus = state => state.users.status;
export const getUsersError = state => state.users.error;
