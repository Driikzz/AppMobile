// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    password: '',
    registrations: [],
    loggedInUser: null,
    loginError: null,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    addRegistration: (state, action) => {
      state.registrations.push(action.payload);
    },
    resetUser: (state) => {
      state.name = '';
      state.email = '';
      state.password = '';
      state.loggedInUser = null; // Réinitialisez loggedInUser à null lors de la déconnexion
    },
    setLoggedInUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    updateName: (state, action) => {
      if (state.loggedInUser) {
        state.loggedInUser.name = action.payload;
      }
    },
    loginUserSuccess: (state, action) => {
      const user = action.payload;
      state.loggedInUser = user;
      state.name = user.name;
      state.email = user.email;
      state.password = user.password;
      state.loginError = null;
    },
    loginUserFailure: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, addRegistration, resetUser,setLoggedInUser,updateName,loginUserFailure,loginUserSuccess } = userSlice.actions;

export default userSlice.reducer;