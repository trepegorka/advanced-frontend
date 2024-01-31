import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/LoginSchema'
import { LoginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginByUsername.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(LoginByUsername.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(LoginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
