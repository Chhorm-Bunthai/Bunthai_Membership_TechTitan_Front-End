import { Outlet, Navigate } from "react-router-dom";
function PrivateRoutes() {
    let auth =  localStorage.getItem('jwt')
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoutes;
