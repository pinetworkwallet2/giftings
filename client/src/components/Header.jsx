import React, { useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const {pathname} = useLocation()
    

  return (
    <div className="h-[90px] relatvie">
        {/* the menu box */}
        <div className={`bg-blue-900 fixed z-3 h-[100vh] top-0 w-[100vw] ${showMenu ? 'block' : 'hidden'} duration-150`}>
            <div className="h-full w-[80%] pt-5">
                <AiOutlineClose onClick={()=> setShowMenu(false)} size={34} color="white" className="absolute right-5 top-[30px]" />
                <div className="py-3 flex px-3 justify-between items-center mb-12">
                    <span className="text-white">LOG OUT</span>
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
          <img src="/logo.jpeg" className="h-[60px] md:block" alt="" />
        </div>
        <div className="flex-[2] flex justify-center md:flex hidden">
          <div
            className="flex justify-around items-center h-full w-3/5"
            style={{ letterSpacing: 1.2 }}
          >
            <img src="/logo.jpeg" className="h-[60px] md:block" alt="" />
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
            <span className="text-white cursor-pointer">LOG OUT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
