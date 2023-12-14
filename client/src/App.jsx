import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Layout from "./layout/Layout";



function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="verify" element={<Verify />} />
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
