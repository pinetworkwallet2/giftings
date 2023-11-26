import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Verify from "./pages/Verify";
import Login from "./pages/Login";



function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
   </Router>
  );
}

export default App;
