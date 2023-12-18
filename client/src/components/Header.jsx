import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useUser } from "../context.js/userContext";


const Header = () => {
    const {user} = useUser()
    const [showMenu, setShowMenu] = useState(false)
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const logout = async()=>{
      const res = await axios.get('http://localhost:5000/logout')
      toast.success(res.data.message)
      window.location.href = '/'
    }
    

  return (
    <div className="h-[90px] relatvie">
        {/* the menu box */}
        <div className={`bg-blue-900 fixed z-3 h-[100vh] top-0 w-[100vw] ${showMenu ? 'block' : 'hidden'} duration-150`}>
            <div className="h-full w-[80%] pt-5">
                <AiOutlineClose onClick={()=> setShowMenu(false)} size={34} color="white" className="absolute right-5 top-[30px]" />
                <div className="flex justify-between items-center px-4">
                    <span className="text-white">{user?.email}</span>
                    <span className="text-white">Balance: $1000</span>
                </div>
                <div className="py-3 flex px-3 justify-between items-center mb-12">
                    <span onClick={logout} className="text-white">LOG OUT</span>
                    <CiSettings color="white" size={25} />
                </div>
                <div className="text-white py-3 flex px-3 justify-between items-center" style={{background: pathname==='/dashboard' && 'rgb(38, 65,154)'}}>
                    <span>HOME</span>
                </div>
                <div className="text-white py-3 flex px-3 justify-between items-center" style={{background: pathname==='/contact' && 'rgb(38, 65,154)'}}>
                    <span>SEND</span>
                </div>
                <div className="text-white py-3 flex px-3 justify-between items-center" style={{background: pathname==='/contact' && 'rgb(38, 65,154)'}}>
                    <span>WALLET</span>
                </div>
                <div className="text-white py-3 flex px-3 justify-between items-center" style={{background: pathname==='/contact' && 'rgb(38, 65,154)'}}>
                    <span>HELP</span>
                </div>
            </div>
        </div>
      <div className="h-full flex bg-blue-900">
        <div className="w-full flex items-center justify-between px-4 md:hidden">
          <GrMenu onClick={()=> setShowMenu(true)} size={24} color="white" />
          <Link to='/'>
          <img src="/logo.jpeg" className="h-[60px] md:block" alt="" />
          </Link>
        </div>
        <div className="flex-[2] flex justify-center md:flex hidden">
          <div
            className="flex justify-around items-center h-full w-3/5"
            style={{ letterSpacing: 1.2 }}
          >
            <Link to='/'>
            <img src="/logo.jpeg" className="h-[60px] md:block" alt="" />
            </Link>
            <span className="cursor-pointer text-decoration-underline text-white p-2 rounded-lg">
              Home
            </span>
            <span className="cursor-pointer text-decoration-underline text-white p-2 rounded-lg">
              Send
            </span>
            <span className="cursor-pointer text-decoration-underline text-white p-2 rounded-lg">
              Wallet
            </span>
            <span className="cursor-pointer text-decoration-underline text-white p-2 rounded-lg">
              Help
            </span>
          </div>
        </div>
        <div className="flex-[1.2] flex justify-center md:flex hidden">
          <div className="h-full gap-4 flex items-center justify-around">
            <MdOutlineNotifications
              size={23}
              fill={"white"}
              className="cursor-pointer"
            />
            <CiSettings size={23} fill={"white"} className="cursor-pointer" />
            <span onClick={logout} className="text-white cursor-pointer">LOG OUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
