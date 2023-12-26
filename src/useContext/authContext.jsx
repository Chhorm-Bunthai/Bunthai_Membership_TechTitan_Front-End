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
      localStorage.setItem("jwt", res?.data?.data?.token);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user, "user");
  const valueToShare = {
    signup,
    login,
    user,
  };
  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
export default AuthContext;
