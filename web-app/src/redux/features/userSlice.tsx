import { createSlice } from '@reduxjs/toolkit';

export interface userState{
    isLoggedIn: Boolean,
    info: null | Object,
    accessToken: String
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        info: null,
        accessToken: ""
    } as userState,
    reducers: {
        newUser(state, action) {
            state.isLoggedIn = true;
            state.info = action.payload.info;
            state.accessToken = action.payload.accessToken;
        },
        removeUser(state){
            state.isLoggedIn = false;
            state.info = null;
            state.accessToken = "";
        },
        fetchFromCache(state){
            const accessToken = localStorage.getItem("x-access-token");
            const info = localStorage.getItem("info");
            if(info && accessToken){
                state.isLoggedIn = true;
                state.info = info;
                state.accessToken = accessToken;
            }
        }
    }
});

export const { newUser, removeUser, fetchFromCache } = userSlice.actions;
export default userSlice.reducer;