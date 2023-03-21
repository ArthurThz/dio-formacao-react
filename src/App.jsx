import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import Feed from "./components/Pages/Feed";
import SignUp from "./components/Pages/SignUp";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
