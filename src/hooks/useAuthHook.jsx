import { useContext } from "react";
import AuthContext from "../useContext/authContext";

export function useAuthHook() {
  return useContext(AuthContext);
}
