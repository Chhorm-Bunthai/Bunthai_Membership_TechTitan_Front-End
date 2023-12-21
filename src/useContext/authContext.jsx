// import { createContext, useState } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const signup = (name, email, password) => {
//     const data = {
//       name,
//       email,
//       password,
//     };
//     try {
//       const res = axios.post(`http://127.0.0.1:3000/api/users/signup`, data, {
//         withCredentials: true,
//       });
//       console.log(res);
//     } catch (error) {
//       console.log("dd");
//     }
//   };
//   const login = () => {
//     console.log("login");
//   };
//   const valueToShare = {
//     signup,
//     login,
//   };
//   return (
//     <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
//   );
// }

// export { AuthProvider };
// export default AuthContext;
