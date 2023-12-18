import axios from "axios";
import React, { useState } from "react";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(initialState);
  const { email, password } = data;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      
      const { data } = await axios.post(`${process.env.BACK_URL}/login`, {
        email,
        password,
      });
      if (data.success) {
        toast.success(data.message);
        navigate('/dashboard')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Something went wrong')
    }
  };

  return (
    <div className="sm:p-4 h-[100vh] flex justify-center items-center">
      <div className="sm:p-3 mt-20 w-full sm:w-1/2 md:w-2/3 lg:w-1/3 shadow-md border border-gray rounded-lg flex flex-col">
        <h3 className="text-center font-bold text-3xl">X-paye</h3>
        <div className="flex justify-center">
          <img src="/logo.jpeg" alt="" className="h-[110px]" />
        </div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center px-3"
        >
          <div className="my-4 w-full bg-blue-300">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="Enter Email"
              className="border  w-full py-2 px-2 rounded "
            />
          </div>
          <div className="w-full py-2 relative">
            {showPassword ? (
              <MdOutlineVisibilityOff
                onClick={() => setShowPassword(!showPassword)}
                size={22}
                className="absolute right-3 top-5 cursor-pointer"
              />
            ) : (
              <MdOutlineVisibility
                onClick={() => setShowPassword(!showPassword)}
                size={22}
                className="absolute right-3 top-5 cursor-pointer"
              />
            )}
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={handleChange}
              value={password}
              placeholder="Enter Password"
              className="border w-full py-2 px-2 rounded "
            />
          </div>
          <button className="my-4 border bg-blue-900 hover:bg-blue-800 text-white rounded w-full py-2">
            Submit
          </button>
          <Link to="/register">Not registered yet? Register here.</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
