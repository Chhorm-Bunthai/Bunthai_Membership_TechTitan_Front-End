import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      <Routes>
      <Route path="/login" element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
