// import React, { useState } from 'react'

const Header = () => {
    // const [toDisplay,setToDisplay]=useState("")
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <div className="mx-6">
          <h1 className="text-3xl font-bold text-black">Projeet</h1>
        </div>
        <div className="flex flex-row space-x-6">
          <p className="hover:text-blue-600 font-semibold text-gray-500">
            Features{" "}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
          <p className="hover:text-blue-600 font-semibold text-gray-500">
            Solutions{" "}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
          <p className="hover:text-blue-600 font-semibold text-gray-500">
            Home
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
          <p className="hover:text-blue-600 font-semibold text-gray-500">
            Plans
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
          <p className="hover:text-blue-600 font-semibold text-gray-500">
            Pricing{" "}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
          <p className="hover:text-blue-600 font-semibold text-gray-500">
            Resource{" "}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <h1 className="text-black text-lg mr-4">Log in</h1>
        <p className="bg-blue-600 text-lg font-semibold py-4 text-white px-2">
          Get Projeet for free
        </p>
      </div>
    </div>
  );
}

export default Header
