import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/SignUp" element={<SignUp />}/>
    //   </Routes>
    //   <Routes>
    //   <Route path="/SignIn" element={<SignIn />}/>
    //   </Routes>
    // </BrowserRouter>
    <div><SignIn /></div>
  );
}

export default App;
