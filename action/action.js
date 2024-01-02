// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    password: '',
    registrations: [],
    loggedInUser: null, // Ajoutez la propriété loggedInUser initialisée à null
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
  },
});

export const { setName, setEmail, setPassword, addRegistration, resetUser,setLoggedInUser,updateName, } = userSlice.actions;

export default userSlice.reducer;