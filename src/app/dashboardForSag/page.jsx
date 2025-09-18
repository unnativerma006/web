import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Header from "@/components/Header";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-5rem)] w-screen">
        {/* Sidebar */}
        <div className="bg-[#036d6c] m-5 p-5 w-1/5   rounded-xl relative">
          {/* Profile picture */}
          <div className="bg-black h-28 w-28 rounded-full mx-auto">
            <img
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              className="h-full w-full object-cover rounded-full"
              alt="Profile"
            />
          </div>

          {/* Profile Dashboard */}
          <ul className="text-white text-xl font-medium">
            <Link
              href={"#"}
              className="flex justify-center text-base my-5 p-2 border-b-2 border-slate-200 cursor-pointer no-underline font-normal"
            >
              Your Profile (SAG Admin)
            </Link>
            <Link
              href={"#"}
              className="flex justify-center text-base my-5 p-2 border-b-2 border-slate-200 cursor-pointer no-underline font-normal"
            >
              Announcement
            </Link>
            <Link
              href={"#"}
              className="flex justify-center text-base my-5 p-2 border-b-2 border-slate-200 cursor-pointer no-underline font-normal"
            >
              Notices
            </Link>
          </ul>
          <div className="text-white absolute flex justify-center text-center w-3/4 rounded-md left-1/2 translate-x-[-50%] bottom-4 p-2 bg-red-500 hover:bg-red-600 cursor-pointer">
            Log Out
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="m-5 p-5 w-4/5">
          <h2 className="text-3xl font-normal">ACTIVITIES</h2>
          <div className="grid grid-cols-4 gap-6 w-full my-5">
            <div className="bg-[#B7F176] cursor-pointer rounded-lg h-48 flex relative flex-col justify-center items-center">
              <h1 className="text-6xl relative top-[-15px] font-normal">400</h1>
              <p className="text-lg absolute bottom-4">
                Numbers of applications
              </p>
            </div>
            <div className="bg-[#9a1f8e59] cursor-pointer rounded-lg h-48 flex relative flex-col justify-center items-center">
              <h1 className="text-6xl relative top-[-15px] font-normal">
                368000
              </h1>
              <p className="text-lg absolute bottom-4">
                Deficient Applications
              </p>
            </div>
            <div className="bg-[#d6424291] cursor-pointer rounded-lg h-48 flex relative flex-col justify-center items-center">
              <h1 className="text-6xl relative top-[-15px] font-normal">32</h1>
              <p className="text-lg absolute bottom-4">Rejected Applications</p>
            </div>
            <div className="bg-[#5c7dd18c] cursor-pointer rounded-lg h-48 flex relative flex-col justify-center items-center">
              <h1 className="text-6xl relative top-[-15px] font-normal">350</h1>
              <p className="text-lg absolute bottom-4">Forwarded to FB</p>
            </div>
            <div className="bg-[#2db8b880] cursor-pointer rounded-lg h-48 flex relative flex-col justify-center items-center">
              <h1 className="text-6xl relative top-[-15px] font-normal">1</h1>
              <p className="text-lg absolute bottom-4">
                Completed Applications
              </p>
            </div>
            <div className="text-xl font-bold bg-red-700 text-white rounded-full h-14 w-14 flex justify-center items-center fixed right-4 bottom-4">
              ?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
