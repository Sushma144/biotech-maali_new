// const storeToken = (value) => {
//   if (value) {
//     console.log("Store Token", value);
//     const { access, refresh, user } = value;
//     localStorage.setItem("access_token", access);
//     localStorage.setItem("refresh_token", refresh);
//     localStorage.setItem("user", user);
  
//   }
// };

// const storeUserData201 = (value) => {
//   if (value) {
//     console.log("Store Data", value);
//     localStorage.setItem("user", JSON.stringify(value));
    
//   }
// };



// const getToken = () => {
//   let access_token = localStorage.getItem("access_token");
//   let refresh_token = localStorage.getItem("refresh_token");
//   return { access_token, refresh_token };
// };

// const removeToken = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
// };



// const clearLocalStorage = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
//   localStorage.removeItem("storeUserData");
//   localStorage.removeItem("user");
//   console.log("Local storage cleared");
// };

// export { storeToken, getToken, removeToken, storeUserData201, clearLocalStorage };


const storeToken = (value) => {
  if (value) {
    console.log("Store Token", value);
    const { access, refresh} = value;
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
  }
};

const storeUserData201 = (value) => {
  if (value) {
    console.log("Store storeUserData", value);
    localStorage.setItem("storeUserData", JSON.stringify(value)); // Save as 'storeUserData'
  }
};

const storeUserData = (value) => {
  if (value) {
    console.log("Store User Data", value);
    // localStorage.setItem("user", JSON.stringify(value)); // Save as 'user'
  }
};

const getToken = () => {
  let access_token = localStorage.getItem("access_token"); 
  let refresh_token = localStorage.getItem("refresh_token");
  return { access_token, refresh_token };
};

const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

const clearLocalStorage = () => {
  console.log("Clearing localStorage...");
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("storeUserData");
  localStorage.removeItem("userData");
  console.log("Local storage cleared");
};

// Exporting the functions
export { storeToken, getToken, removeToken, storeUserData201, storeUserData, clearLocalStorage };
