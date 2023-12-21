import { useContext } from "react";
import AuthContext from "../useContext/authContext";

export function contextHook() {
  return useContext(AuthContext);
}
