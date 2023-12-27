import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./pages/PrivateRoutes";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route  path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />}/>
        </Route>      
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route  path="/forgotpassword" element={<ForgotPassword />} />
        <Route  path="/resetPassword/:token" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
