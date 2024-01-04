import "./App.css";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/login/Login";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import HomePage from "./pages/homePage/HomePage";
import PrivateRoutes from "./pages/privateRoutes/PrivateRoutes";
import Profile from "./pages/profile/Profile";
import Success from "./pages/forgotPassword/ForgotEmailSuccess";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ResetModalSuccess from "./pages/resetPassword/ResetSuccess";
import VerifyEmail from "./pages/signUp/VerifyEmail";
import EmailSendingSuccess from "./pages/signUp/EmailSendingSuccess";

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
        <Route path="/success" element={<Success />} />
        <Route path="/resetSuccess" element={<ResetModalSuccess />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="emailSendSuccess" element={<EmailSendingSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
