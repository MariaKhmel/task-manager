import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,

}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase('fakeaction', (state, action) => {
            console.log(action.payload);
        });
    },
});

export default authSlice.reducer;