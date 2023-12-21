import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
