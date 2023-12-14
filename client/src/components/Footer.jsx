import React from "react";

const Footer = () => {
  return (
    <div className="border shadow-lg min-h-[200px] flex items-center flex-col">
      <div className="h-full flex-1 w-[80%] flex flex-col">
        <div className="flex-1 flex items-center gap-4 flex-col sm:flex-row">
          <div className="flex items-center gap-4">
            <h2 className="font-bold text-2xl">X-Pay</h2>
            <img src="/logo.jpeg" className="h-[60px]" alt="" />
          </div>
          <span className="ml-5 font-semibold">Help</span>
          <span className="ml-5 font-semibold">Contact</span>
          <span className="ml-5 font-semibold">Security</span>
        </div>
        <div className="flex-1 py-4 sm:py-2">
            <p>©1999-2023 PayPal, Inc. All rights reserved.</p>
        </div>
        <div className="flex-1 py-4 sm:py-2">
          <p>
            X-pay krte. Ltd. is by the Monetary Authority accountable for your
            laczity. Since 2019.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
