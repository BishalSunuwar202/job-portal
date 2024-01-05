import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <div className="bg-slate-200 px-4 py-0.5">
      <nav className="m-4 flex justify-around items-center">
        <div>
          <Link to={`/`}>
            <img
              src="https://static.merojob.com/images/logo/svg/mj_logo.svg"
              alt="merojob"
            />
          </Link>
        </div>
        <ul className="m-4 flex space-x-4">
          <li>Browse Jobs</li>
          <li>Blog</li>
          <li> FAQs</li>
        </ul>
        <div className="flex">
          <Link to={"auth/login"}>
            <button className="m-4 px-2 py-2 w-32 text-cyan-500 outline outline-cyan-400 hover:bg-cyan-400  rounded-md cursor-pointer hidden md:block  active:bg-sky-500 focus:outline-sky-200 ">
              Login
            </button>
          </Link>

          <Link to={"auth/signup"}>
            <button className="m-4 px-2 py-2 w-32 bg-cyan-400 text-white rounded-md cursor-pointer hidden md:block  active:bg-sky-500 focus:outline-sky-200 ">
              Register
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <Link to={"#"} className="text-4xl">
            &#8801;
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
