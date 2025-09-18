import React, { useState } from 'react';

const OtpVerify = ({setIsVisible}) => {
  // State to control the display of the form
  

  // Function to handle the close button click
  const closeAlert = () => {
    setIsVisible(false);
  };

  return (
    
      <div className="flex items-center justify-center w-screen h-screen fixed bg-[#0002] top-0  left-0">
        <div className=" p-6 rounded-lg border shadow-lg w-full max-w-sm relative h-auto bg-white z-10">
          {/* Close Button */}
          <div
            className="absolute top-0 right-0 flex justify-center items-center leading-none cursor-pointer  h-10 w-10
             text-gray-800  border-black rounded-full bg-white text-3xl"
            onClick={closeAlert}
          >
            &times;
          </div>

          {/* OTP Form */}
          <form>
            {/* Email OTP */}
            <div className="mb-4">
              <label htmlFor="emailOtp" className="block text-gray-700 font-semibold mb-2">
                Verify Email
              </label>
              <input
                type="text"
                id="emailOtp"
                placeholder="Enter Your Email OTP"
                className="w-full p-2 rounded-lg outline-none bg-blue-50"
              />
            </div>

            {/* Phone OTP */}
            <div className="mb-4">
              <label htmlFor="phoneOtp" className="block text-gray-700 font-semibold mb-2">
                Verify Phone
              </label>
              <input
                type="text"
                id="phoneOtp"
                placeholder="Enter Your Phone OTP"
                className="w-full p-2 rounded-lg outline-none bg-blue-50"
              />
            </div>

            {/* Verify Button */}
            <button
              type="button"
              className="w-full bg-[#22A927] text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 hover:bg-[#22a926e8]"
            >
              Verify OTP
            </button>

            {/* Resend OTP */}
            <div className="text-center mt-3">
              <a href="#" className="text-slate-900 hover:underline">
                Resend OTP
              </a>
            </div>
          </form>
        </div>
      </div>
    )
};

export default OtpVerify;
