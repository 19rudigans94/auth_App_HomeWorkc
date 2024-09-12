import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: 'admin',
    password: 'password',
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const { username, password } = action.payload;
            if (username === state.username && password === state.password) {
                state.isAuthenticated = true;
                localStorage.setItem('isAuthenticated', 'true');
            } else {
                alert('Invalid credentials');
            }
        },
        logout(state) {
            state.isAuthenticated = false;
            localStorage.removeItem('isAuthenticated');
        },
        checkAuth(state) {
            const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
            state.isAuthenticated = isAuthenticated;
        },
    },
});

export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;