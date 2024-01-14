import { createSelector, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../store/axios.js';
import {notificationActions} from './NotificationSlice';

export const signIn = createAsyncThunk('signIn', async ({email, password}, thunkAPI) => {
    try {
        const resp = await axiosInstance.post('/login/', {email, password});
        return resp.data;
        thunkAPI.dispatch(authActions.loadUser())
    }
    catch(error) {
        thunkAPI.dispatch(notificationActions.setStatus({type: 'error', message: error.response.data, title: 'Login' }))
        throw(error)
    }
});


export const register = createAsyncThunk('register', async ({email, password}, thunkAPI) => {
    try {
        thunkAPI.dispatch(authActions.userLoading())
        const body = JSON.stringify({email, password });
        axiosInstance.defaults.headers["Authorization"] = null;
        const resp = await axiosInstance.post('/register/', body);
        thunkAPI.dispatch(notificationActions.setStatus({type: 'success', message: resp.data, title: 'Register' }))
        thunkAPI.dispatch(authActions.stopLoading())
        return resp.data
    }
    catch(error) {
        thunkAPI.dispatch(notificationActions.setStatus({type: 'error', message: error.response.data, title: 'Register' }))
        thunkAPI.dispatch(authActions.stopLoading())
        throw(error)
    }
});


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        isSignedIn: false,
        isLoading: false,
				email: '',
    },
    reducers: {
        userLoading(state) {
            state.isLoading = true;
        },
        stopLoading(state) {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
    },
});

export const auth = (state) => state.auth;
export const authActions = authSlice.actions;


export default authSlice.reducer;

