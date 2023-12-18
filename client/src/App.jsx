import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Layout from "./layout/Layout";
import { UserProvider } from "./context.js/userContext";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllCards from "./pages/AllCards";

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="verify" element={<Verify />} />
          </Route>
          <Route path='/admin'>
            <Route index element={<AllCards />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
