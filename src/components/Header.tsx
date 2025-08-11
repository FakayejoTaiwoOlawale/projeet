import { useState } from "react";

import ArrowDown from "../assets/ArrowDown";
import DropDown from "./DropDown";

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
              <p className="hover:text-blue-600 font-semibold text-gray-500">
                Features
              </p>
              <ArrowDown />
            </div>
            <p className="hover:text-blue-600 font-semibold text-gray-500">
              Solutions
            </p>
            <p className="hover:text-blue-600 font-semibold text-gray-500">
              Home
            </p>
            <p className="hover:text-blue-600 font-semibold text-gray-500">
              Plans
            </p>
            <p className="hover:text-blue-600 font-semibold text-gray-500">
              Pricing
            </p>
            <p className="hover:text-blue-600 font-semibold text-gray-500">
              Resource
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
      {toDisplay && <DropDown />}
    </div>
  );
};

export default Header;
