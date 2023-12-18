import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useUser } from "../context.js/userContext";

const Layout = () => {
  const { loginUser, user } = useUser();
  const navigate = useNavigate();

  async function getProfile() {
    const { data } = await axios.get("http://localhost:5000/profile");
    if (!data.user) {
      return navigate("/");
    }
    loginUser(data.user);
  }
  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        getProfile();
      }, 1);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="px-5 py-3">
        <p className="font-bold">Balance: $1000</p>
      </div>
      <Outlet bow="bow down" />
      <Footer />
    </div>
  );
};

export default Layout;
