import React from "react";
import { BsCreditCard } from "react-icons/bs";
import { Link } from "react-router-dom";

const Dashboard = () => {

  // useEffect(()=>{
  //   const getProfile = async()=>{
  //     const res = await axios.get('http://localhost:5000/profile')
  //     console.log(res,'the profile')
  //   }
  //   getProfile()
  // },[])
  return (
    <>
      <div className="p-2 sm:p-5 bg-gray-100 flex justify-center min-h-[560px]">
        <div className="bg-white rounded-2xl w-full md:w-2/4 p-4 flex gap-4 sm:flex-row flex-col">
          <Link to="verify">
            <BsCreditCard size={24} />
          </Link>
          <div className="w-full">
            <Link to="verify">
              <h3 className="font-bold">Link your card</h3>
            </Link>
            <p>Complete payments in minutes</p>
            <div className="my-4 w-full">
              <Link to="verify">
                <p className="md:text-center md:text-2xl font-bold my-4">
                  Please link your card
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
