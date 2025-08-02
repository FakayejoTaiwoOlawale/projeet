// import React, { useState } from 'react'

const Header = () => {
    // const [toDisplay,setToDisplay]=useState("")
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
        <div>
          <h1 className="text-3xl font-bold text-black">Projeet</h1>
        </div>
        <div className="flex flex-row">
          <p className="px-2">Features</p>
          <p className="px-2">Solutions</p>
          <p className="px-2">Home</p>
          <p className="px-2">Plans</p>
        </div>
      </div>

      <div className="flex flex-row items-center">
        <h1 className="text-black text-lg mr-4">Log in</h1>
        <p className="bg-blue-600 text-lg font-semibold py-4 text-white px-2">Get Projeet for free</p>
      </div>
    </div>
  );
}

export default Header
