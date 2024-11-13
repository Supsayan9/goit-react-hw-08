import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
    "register",
    async (credentials, thunkApi) => {
        try {
            const { data } = await axios.post("users/signup", credentials);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            console.error("Error details:", error.response);
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const login = createAsyncThunk(
    "login",
    async (credentials, thunkApi) => {
        try {
            const { data } = await axios.post("users/login", credentials);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk("logout", async (_, thunkApi) => {
    try {
        await axios.post("users/logout");
        setAuthHeader("");
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const refresh = createAsyncThunk("refresh", async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
        return thunkApi.rejectWithValue("Token doesn`t exist!");
    }
    setAuthHeader(savedToken);
    try {
        const { data } = await axios.get("users/current");
        return data;
    } catch (error) {
        console.error("Refresh error:", error.response);
        return thunkApi.rejectWithValue(error.message);
    }
});