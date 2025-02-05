import { Login, Signup} from "../components/index.js";
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
      <div className="flex lg:flex-row flex-col h-screen w-full items-center justify-evenly font-lato lg:py-24 py-6 px-4 sm:m-0 gap-4">
        <div className="flex flex-col lg:gap-5 sm:gap-0 lg:items-start">
          <div className="sm:text-5xl md:text-5xl lg:text-7xl lg:text-left text-2xl text-center font-bold leading-none">
            <div className="text-[--primary-color]">Make Your</div>
            <div>
              <span className="text-[--secondary-color]">FinanceTracker </span>
              <span className="text-[--primary-color]"> Account</span>
            </div>
          </div>
          <div className="text-[--primary-color] leading-10 lg:text-3xl md:text-2xl sm:text-lg text-center">
            Your path to easier finance management!
          </div>
        </div>
        <MainContent/>
      </div>
    </>
  )
}

export default Entry