import React from "react";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const User = () => {
  return (
    <div className="h-screen flex">
      {/* sidebar */}
      <div className="bg-blue-800 flex flex-col w-64 text-white gap-2 p-4">
        <Link
          to={"user/dashboard"}
          className="hover:bg-gray-300 rounded-sm p-1.5 flex items-center gap-1"
        >
          <BiSolidDashboard />
          <p>Dashboard</p>
        </Link>
        <Link
          to={"user/dashboard"}
          className="hover:bg-gray-300 rounded-sm p-1.5 flex items-center gap-1"
        >
          <IoSettings />
          <p>Settings</p>
        </Link>
        <Link
          to={"user/dashboard"}
          className="hover:bg-gray-300 rounded-sm p-1.5 flex gap-1 items-center"
        >
          <CgProfile />
          <p>Profile</p>
        </Link>
      </div>
      {/* main content */}
      <div className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold">Welcome Taiwo</h1>
        <p>You are making progress!</p>
      </div>
    </div>
  );
};

export default User;
