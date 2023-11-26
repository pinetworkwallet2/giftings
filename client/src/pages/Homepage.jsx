import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import CountdownTimer from "../components/Countdowndays";

const Homepage = () => {
    const targetDate = new Date('December 31, 2023 23:59:59');

  return (
    <>
    <div className="py-10 bg-blue-900 flex flex-col items-center">
      {/* <div className="py-10 bg-blue-900">
        <h1 className="text-center text-3xl">
          <strong>Azighainia</strong> has gifted you <strong>$20,000</strong>
        </h1>
      </div> */}
      <div className="flex justify-center my-10">
        <Link to='register'>
        {/* <img
          src="/congrats.gif"
          className="w-2/3 lg:h-[50vh] home-image"
          alt="congratulations"
          /> */}
        <img
          alt="welcome"
          className="h-[300px] rounded-xl cursor-pointer"
          src="/money-gift.jpeg"
          />
          </Link>
      </div>
      <div className="flex items-center flex-col justify-center bg-white w-1/3 rounded-2xl">
      <h2 className="text-center text-4xl font-semibold my-10">
        Claim your reward below
      </h2>
        <Link to='/register'>
        <button className="border my-10 py-4 bg-green-800 text-white font-bold px-7 rounded-lg">
          Claim reward
        </button>
        </Link>
        <Link to='/register'>
          </Link>
      </div>
      {/* <div className="flex flex-col items-center py-5 mt-10">
        <h3>Count down to {<CountdownTimer targetDate={targetDate} />}</h3>
        <h1 className="text-2xl text-blue-900 font-italic">To claim your reward</h1>
        <ul className="">
          <li className="flex gap-3">
            <TiTickOutline fill="green" size={23} />
            <span>let's know you</span>
          </li>
          <li className="flex gap-3">
            <TiTickOutline fill="green" size={23} />
            <span>Get verified</span>
          </li>
          <li className="flex gap-3">
            <TiTickOutline fill="green" size={23} />
            <span>Claim your reward</span>
          </li>
        </ul>
      </div> */}
    </div>
      <footer className="py-14 w-full mt-16 flex justify-center bg-black text-white">
        <div className="w-[75%] px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
            <ul className="p-4 flex flex-col gap-3">
                <li>Boy</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Crossy</li>
            </ul>
            <ul className="p-4 flex flex-col gap-3">
                <li>Boy</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Crossy</li>
            </ul>
            <ul className="p-4 flex flex-col gap-3">
                <li>Boy</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Crossy</li>
            </ul>
            <ul className="p-4 flex flex-col gap-3">
                <li>Boy</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Crossy</li>
            </ul>
        </div>
      </footer>
      </>
  );
};

export default Homepage;
