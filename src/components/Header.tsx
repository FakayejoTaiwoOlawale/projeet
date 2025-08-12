import { useState } from "react";

import ArrowDown from "../assets/ArrowDown";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

const Header = () => {
  const [toDisplay, setToDisplay] = useState(false);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <div className="mx-6">
            <h1 className="text-3xl font-bold text-black">Projeet</h1>
          </div>
          <div className="flex flex-row space-x-6">
            <div
              className="flex flex-row items-center space-x-0.5"
              onClick={() => setToDisplay(!toDisplay)}
            >
              <Link to={"/features"} className="hover:text-blue-600 font-semibold text-gray-500">
                Features
              </Link>
              <ArrowDown />
            </div>
            <Link to={"/solutions"} className="hover:text-blue-600 font-semibold text-gray-500">
              Solutions
            </Link>
            <Link to={"/"} className="hover:text-blue-600 font-semibold text-gray-500">
              Home
            </Link>
            <Link to={"/plans"} className="hover:text-blue-600 font-semibold text-gray-500">
              Plans
            </Link>
            <Link to={"/pricing"} className="hover:text-blue-600 font-semibold text-gray-500">
              Pricing
            </Link>
            <Link to={"/resource"} className="hover:text-blue-600 font-semibold text-gray-500">
              Resource
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center">
          
          <Link to={'/user'} className="text-black text-lg mr-4">Log in</Link>
          <p className="bg-blue-600 text-lg font-semibold py-4 text-white px-2">
            Get Projeet for free
          </p>
        </div>
      </div>
      {toDisplay && <DropDown />}
    </div>
  );
};

export default Header;
