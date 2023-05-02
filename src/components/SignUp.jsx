import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [value, setValue] = useState();

  return (
    <div className="shop-container my-8">
      <div className="max-w-[900px] bg-white rounded mx-auto p-5">
        <h1 className="text-2xl font-semibold font-poppins">Registration</h1>
        <hr className="bg-shopDarkBlue h-[5px] w-[30px] mt-[-5px]" />

        <form className="mt-8">
          {/* first row  */}
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="flex-1">
              <label className="block mb-1 font-poppins" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="input-control w-full"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-poppins" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="input-control w-full"
                placeholder="Enter your last name"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-poppins" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="input-control w-full"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* second row  */}
          <div className="mt-5 flex gap-5 flex-col md:flex-row">
            <div className="flex-1">
              <label htmlFor="mobile" className="block mb-1 font-poppins ">
                Phone No.
              </label>
              <PhoneInput
                id="mobile"
                className="input-phone-number"
                value={value}
                onChange={setValue}
                placeholder="Enter phone number"
                countryCallingCodeEditable={false}
                international
              />
            </div>
            <div className="flex-1">
              <label htmlFor="state" className="block mb-1 font-poppins">
                State
              </label>
              <input
                type="text"
                id="state"
                className="input-control w-full"
                placeholder="Enter your state"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="city" className="block mb-1 font-poppins">
                City
              </label>
              <input
                type="text"
                id="city"
                className="input-control w-full"
                placeholder="Enter your city"
              />
            </div>
          </div>

          {/* third row  */}
          <div className="mt-5 gap-5 flex flex-col md:flex-row">
            <div className="flex-[1]">
              <label htmlFor="pin" className="block mb-1 font-poppins">
                Pin Code
              </label>
              <input
                type="number"
                className="input-control w-full"
                placeholder="Enter city pin"
                id="pin"
              />
            </div>
            <div className="flex-[2]">
              <label htmlFor="address" className="block mb-1 font-poppins">
                Address
              </label>
              <input
                type="text"
                className="input-control w-full"
                placeholder="Enter shipping address"
                id="address"
              />
            </div>
          </div>

          {/* fourth row  */}
          <div className="mt-5 gap-5 flex flex-col md:flex-row">
            <div className="flex-1">
              <label htmlFor="user" className="block mb-1 font-poppins">
                Username
              </label>
              <input
                type="text"
                className="input-control w-full"
                id="user"
                placeholder="Enter a unique username"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="password" className="block mb-1 font-poppins">
                Password
              </label>
              <input
                type="password"
                className="input-control w-full"
                id="password"
                placeholder="Enter a strong password"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="confirm_password"
                className="block mb-1 font-poppins"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="input-control w-full"
                id="confirm_password"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <div className="mt-5 text-center">
            <input type="submit" value="Sign Up" className="bg-shopDarkBlue text-white px-4 py-2 rounded cursor-pointer" />
          </div>
        </form>

        <div className="text-center mt-5">
            <p>Already have an Account? <Link to={'/login'} className='text-blue-900 font-bold'>Login</Link></p>
        </div>

      </div>
    </div>
  );
};

export default SignUp;
