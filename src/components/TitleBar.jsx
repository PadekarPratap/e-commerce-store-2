import React from "react";
import {HiOutlineSearch} from 'react-icons/hi'
import { BASE_URL, ENDPOINTS } from "../api/Endpoints";

const TitleBar = () => {

  return (
    <div className="shop-container mt-5">
      <div className="flex items-center md:justify-between gap-5 flex-col md:flex-row">
        {/* title  */}
        <div>
          <h3 className="text-4xl font-thin text-center">All Products</h3>
        </div>

        {/* search  */}
        <div className="flex items-center bg-gray-200 px-4 py-2 rounded-full max-w-[300px] w-[300px]">
            <input type="text" className="outline-none border-none bg-gray-200 flex-1" placeholder="Search a product..."/>
            <HiOutlineSearch />
        </div>

        {/* filter Products  */}
        <div className="flex flex-col items-end">
            <span className="text-xl font-robotoMono">Filter by: </span>
            <select className="border-2 rounded px-2 py-2 outline-none max-w-[150px] font-robotoMono">
                <option value="all">All</option>
                <option value="highest_rated">Highest Rated</option>
                <option value="lowest to highest">By Price (lowest to highest)</option>
                <option value="highest to lowest">By Price (highest to lowest)</option>
            </select>
        </div>
        
      </div>
    </div>
  );
};

export default TitleBar;
