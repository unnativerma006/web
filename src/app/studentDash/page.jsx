import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import track from "@/assets/track.png";
import clock from "@/assets/clock.png";
import profile from "@/assets/profile.png";
import edit from "@/assets/edit.png";
import calender from "@/assets/calender.png";

const Icon = ({ children }) => (
  <div className="text-2xl h-10 w-auto">{children}</div>
);

const DashboardItem = ({ icon, title, color }) => (
  <div
    className={`p-4 rounded-lg flex flex-col items-center justify-center ${color} hover:opacity-80 transition-opacity cursor-pointer`}
  >
    <Icon>{icon}</Icon>
    <span className="mt-2 text-sm font-medium text-center">{title}</span>
  </div>
);

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="w-screen mx-auto p-7">
        <h2 className="text-2xl font-bold mb-4">DASHBOARD</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 h-40">
          <DashboardItem
            icon={<Image src={track} alt="track" className="h-10 w-auto" />}
            title="Track Your Application"
            color="bg-blue-200"
          />
          <DashboardItem
            icon={<Image src={clock} alt="track" className="h-10 w-auto" />}
            title="Application History"
            color="bg-red-200"
          />
          <DashboardItem
            icon={<Image src={edit} alt="track" className="h-10 w-auto" />}
            title="Edit Application"
            color="bg-green-200"
          />
          <DashboardItem
            icon={<Image src={profile} alt="track" className="h-10 w-auto" />}
            title="Edit Profile"
            color="bg-cyan-200"
          />
          <DashboardItem
            icon={<Image src={calender} alt="track" className="h-10 w-auto" />}
            title="Transaction History"
            color="bg-purple-200"
          />
        </div>

        <div className="fixed bottom-4 right-4">
          <button className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
            ?
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
