import React from 'react'
import "../../public/stylesheets/LogIn.css";
import {Login} from './index'
import { Link } from 'react-router-dom';
function Signup() {
    return (
        <div className="mainContainer flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="textField">
              <div className="textFieldHeading">Email</div>
              <input
                type="email"
                name=""
                className="email"
                placeholder="karam@financetracker.com"
              ></input>
            </div>
            <div className="textField">
              <div className="textFieldHeading">Password</div>
              <input
                type="password"
                name=""
                className="password"
                placeholder="***********"
              ></input>
              <p className="textFieldInfo">
                The password must be 8-16 characters long, with at least one special
                character and number.
              </p>
            </div>
            <div className="flex align-center justify-center">
              <p className="textFieldInfo">Already have an account? <Link to="/login">Login</Link> instead.</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex w-80 px-5 py-3 items-center justify-center bg-[#1adc30] rounded-md text-white font-[karla] text-2xl font-bold">
              Sign Up
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1.2rem]">
            <p className="text-2xl font-[Karla] font-bold text-[#667085] tracking-tight">Use Social Login</p>
            <div className="flex flex-row items-center justify-between gap-3 rounded-md  w-full">
              <button className="flex p-3 items-center justify-center gap-3 border-solid border-[1px] border-gray-600 rounded-md w-24 "><img src="../../public/images/google.svg" alt="" /></button>
              <button className="flex p-3 items-center justify-center gap-3 w-24 rounded-md bg-blue-600"><img src="../../public/images/fb.svg" alt="" /></button>
              <button className="flex p-3 items-center justify-center gap-3 w-24 rounded-md bg-black"><img src="../../public/images/apple.svg" alt="" /></button>
            </div>
          </div>
        </div>
      );
}

export default Signup

