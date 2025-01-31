// // src/redux/slices/verificationSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   token: null,
//   isRegistered: false, // Track if the user is registered or not
// };

// const verificationSlice = createSlice({
//   name: 'verification',
//   initialState,
//   reducers: {
//     setVerifiedUser: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isRegistered = true;
//     },
//     setNewUser: (state, action) => {
//       state.user = action.payload.user;
//       state.token = null;
//       state.isRegistered = false;
//     },
//     resetVerification: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isRegistered = false;
//     },
//   },
// });

// export const { setVerifiedUser, setNewUser, resetVerification } = verificationSlice.actions;
// export default verificationSlice.reducer;


// src/redux/slices/verificationSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   token: null,
//   isRegistered: false, // Track if the user is registered or not
// };

// const verificationSlice = createSlice({
//   name: 'verification',
//   initialState,
//   reducers: {
//     setVerifiedUser: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isRegistered = true;
//     },
//     setNewUser: (state, action) => {
//       state.user = action.payload.user;
//       state.token = null;
//       state.isRegistered = false;
//     },
//     resetVerification: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isRegistered = false;
//     },
//   },
// });

// export const { setVerifiedUser, setNewUser, resetVerification } = verificationSlice.actions;
// export default verificationSlice.reducer;




import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // The entire user data, including tokens, will be stored here
};

const verificationSlice = createSlice({
  name: 'verification',
  initialState,
  reducers: {
    setVerifiedUser: (state, action) => {
      // Combine user data and tokens within a single `user` object
      state.user = {
        ...action?.payload?.data?.user,
        ...action?.payload?.data?.token, // Include tokens inside the user object
      };
    },
    resetVerification: (state) => {
      state.user = null; // Reset user to null when verification is reset
    },
  },
});

export const { setVerifiedUser, resetVerification } = verificationSlice.actions;
export const selectAccessToken = (state) => state.verification.user?.access || null;

export default verificationSlice.reducer;
