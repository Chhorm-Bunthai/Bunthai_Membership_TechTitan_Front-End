import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signup = async (name, email, password, passwordConfirm) => {
    const data = {
      name,
      email,
      password,
      passwordConfirm,
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/signup",
        data,
        {
          withCredentials: true,
        }
      );
      setUser(res);
    } catch (error) {
      console.log(error);
    }
    console.log(user);
  };
  const login = async (email, password) => {
    const data = { email, password };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/login",
        data,
        {
          withCredentials: true,
        }
      );
      setUser(res.data);
      // console.log(res.data.data, "hh");
      localStorage.setItem("jwt", JSON.stringify(res?.data?.data));
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    localStorage.removeItem("jwt");
  };
  const resetPassword = async (password, passwordConfirm, token) => {
    try {
      const data = {
        password,
        passwordConfirm,
      };
      const res = await axios.patch(
        `http://localhost:3000/api/users/resetPassword/${token}`,
        data,
        {
          withCredentials: true,
        }
      );
      console.log(res.data.data.token, "us");
      localStorage.setItem("jwt", res.data.data.token);
    } catch (e) {
      console.log(e);
    }
  };
  const forgetPassword = async (email) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/users/forgotpassword",
        { email },
        {
          withCredentials: true,
        }
      );
      console.log(res.data.status);
      // if (res.data.status){
      //   navigate('/login')
      // }
      setUser(res.data.status);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user, "user");
  const valueToShare = {
    signup,
    login,
    user,
    logout,
    resetPassword,
    forgetPassword,
  };
  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
