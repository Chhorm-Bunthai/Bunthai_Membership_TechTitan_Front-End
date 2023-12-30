import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./pages/PrivateRoutes";
import Profile from "./pages/Profile";
import Success from "./pages/success";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ResetModalSuccess from "./pages/ResetModalSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route index path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path='/success' element={<Success />}/>
        <Route path="/resetSuccess" element={<ResetModalSuccess />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
