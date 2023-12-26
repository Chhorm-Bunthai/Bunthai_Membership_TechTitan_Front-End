import { useContext } from "react";
import AuthContext from "../useContext/authContext";

export function useHook() {
  return useContext(AuthContext);
}
