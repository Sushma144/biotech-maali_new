// import { createSlice } from '@reduxjs/toolkit';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     username: 'Guest', // Default value
//   },
//   reducers: {
//     setUsername: (state, action) => {
//       console.log('State in component:', state,action.payload);
//       state.username = action.payload; // Action updates the username
//     },
//     logout: (state) => {
//       state.username = 'Guest'; // Reset username to Guest on logout
//     },
//   },
// });

// export const { setUsername, logout } = userSlice.actions;
// export default userSlice.reducer;


// src/redux/slices/userSlice.js

// import { createSlice } from '@reduxjs/toolkit';
// import {  resetVerification } from '../User/verificationSlice'; // Import resetVerification action

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     username: 'Guest', // Default value for username
//   },
//   reducers: {
//     setUsername: (state, action) => {
//       console.log('State in component:', state, action.payload);
//       state.username = action.payload; // Action updates the username
//     },
//     logout: (state, action) => {
//       state.username = 'Guest'; // Reset username to Guest on logout
//       // Dispatch resetVerification to clear verification state
//       action.payload(); // This will trigger resetVerification
//     },
//   },
// });

// export const { setUsername, logout } = userSlice.actions;
// export default userSlice.reducer;


// src/redux/slices/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false, // Tracks whether the user is logged in
    username: 'Guest', // Default value for username
  },
  reducers: {
    setUsername: (state, action) => {
      console.log('State in component:', state, action.payload);
      state.username = action.payload; // Action updates the username
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.username = 'Guest'; // Reset username to Guest on logout
      state.isAuthenticated = false;
    },
  },
});

export const { setUsername, logout } = userSlice.actions;
export default userSlice.reducer;
