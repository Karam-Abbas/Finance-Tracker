import { Login, Signup, ThemeSwitch } from "../components/index.js";
import { useState } from "react";
import "../../public/stylesheets/LogIn.css";

const Entry = () => {
    let [toggle, setToggle] = useState("Signup");
    const MainContent = () => {
      return toggle === "Signup" ? (
        <Signup setToggle={setToggle} />
      ) : (
        <Login setToggle={setToggle} />
      );
    };
  return (
    <>
      {/* <ThemeSwitch></ThemeSwitch> */}
      <div className="flex flex-row h-screen w-full items-center justify-evenly font-lato ">
        <div className="flex flex-col gap-5">
          <div className="text-[4rem] font-bold leading-none">
            <div className="text-[--primary-color]">Make Your</div>
            <div>
              <span className="text-[--secondary-color]">FinanceTracker </span>
              <span className="text-[--primary-color]"> Account</span>
            </div>
          </div>
          <div className="text-[--primary-color] leading-10 text-[1.7rem]">
            Your path to easier finance management!
          </div>
        </div>
        <MainContent />
      </div>
    </>
  )
}

export default Entry