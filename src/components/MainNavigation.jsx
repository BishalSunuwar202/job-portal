import React from "react";

const MainNavigation = () => {
  return (
    <div className="bg-slate-200 px-4 py-0.5">
      <nav className="m-4 flex justify-around items-center">
        <div>
          <img
            src="https://static.merojob.com/images/logo/svg/mj_logo.svg"
            alt="merojob"
          />
        </div>
        <ul className="m-4 flex space-x-4">
          <li>Browse Jobs</li>
          <li>Blog</li>
          <li> FAQs</li>
        </ul>
        <div>
          <button className="hidden md:block px-2 py-2 bg-sky-300 text-white rounded-md font-bold cursor-pointer active:bg-sky-500 focus:outline-sky-200">
            Login/Signup
          </button>
        </div>
        <div>
          <button className="hidden md:block px-2 py-2 bg-blue-500 hover:bg-sky-300 text-white rounded-md font-bold cursor-pointer">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MainNavigation;
