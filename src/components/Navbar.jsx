import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleMobileSidebar = () => {
    setIsSideNavOpen((prevState) => !prevState)
  }
  return (
    <>
      <div className="shop-container py-[1.2rem]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-poppins uppercase">
              Shop<span className="text-shopBlue">Lane</span>
            </h1>
          </div>

          {/* right section  */}
          <div className="flex items-center gap-5">
            {/* dropdown */}
            <div
              id="dropdown-container"
              className="cursor-pointer relative hidden sm:block"
            >
              <div
                className="flex items-center border-2 p-2 rounded-md gap-2"
                role="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                <HiOutlineUserCircle size={35} color="#525254" />
                <div>
                  <p className="font-bold font-poppins leading-[15px]">Login</p>
                  <span className="font-poppins text-gray-600">or Sign up</span>
                </div>
                <MdKeyboardArrowDown size={25} color="#525254" />
              </div>
              <div
                id="dropdown-content"
                className={`border-2 rounded mt-3 absolute left-0 right-0 p-1 duration-200 ${
                  isDropdownOpen
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none translate-y-[-10px]"
                }`}
              >
                <ul className="text-center space-y-2">
                  <li className="font-poppins text-lg font-medium">Login</li>
                  <hr />
                  <li className="font-poppins text-lg font-medium">Sign up</li>
                </ul>
              </div>
            </div>

            {/* wishlist */}
            <div className="items-center gap-1 cursor-pointer hidden sm:flex">
              <p className="text-xl font-poppins">Wishlist</p>
              <BsHeartFill size={20} color="#ef4444" />
            </div>

            {/* cart icon  */}
            <div className="cursor-pointer">
              <AiOutlineShoppingCart size={32} color="#525254" />
            </div>

            {/* mobile hamburger menu  */}
            <div
              className="sm:hidden"
              onClick={handleMobileSidebar}
            >
              <BiMenu size={30} />
            </div>
          </div>
        </div>
      </div>

      {/* overlay for naviagtion on mobile  */}
      <div className={`fixed inset-0 bg-black/50 duration-300 ${!isSideNavOpen && 'hidden'}`} onClick={handleMobileSidebar}></div>

      {/* fixed side navigation for mobile devices  */}
      <div className={`fixed h-full w-2/3 bg-white z-[999] top-0 duration-500 ${isSideNavOpen ? 'left-0' : 'left-[-100%]'}`}>
        <div className="py-8 px-5">
          {/* Shop Logo  */}
          <div className="mb-12 flex items-center justify-between">
            <h1 className="text-3xl font-poppins uppercase">
              Shop<span className="text-shopBlue">Lane</span>
            </h1>

            {/* navigation close btn  */}
            <div role="button" onClick={handleMobileSidebar}>
                <AiOutlineClose size={30} />
            </div>
          </div>

          {/* wishlist for mobile nav  */}
          <div className="items-center flex gap-2 justify-center">
            <p className="text-xl font-poppins">Wishlist</p>
            <BsHeartFill size={20} color="#ef4444" />
          </div>

          {/* login button  */}
          <div className="text-center mt-5">
            <button className="2xl font-poppins font-bold border-2 px-4 py-2 rounded-md bg-gray-200">Login</button>
          </div>

          {/* sign up btn  */}
          <div className="text-center mt-5">
          <button className="2xl font-poppins font-bold border-2 px-4 py-2 rounded-md bg-gray-200">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;