import React, { Fragment } from "react";
import Jobs from "../components/Jobs";
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  return (
    <Fragment>
      <div className="bg-slate-100 h-screen">
        <div className="border-2 h-72 bg-gray-400 ">
          <img
            className="mx-10"
            src="https://static.merojob.com/images/default_pp/header-image.png"
            alt="picture1"
          />

          {/* <div className="relative m-6"> */}
          <div className="bg-slate-600 w-5/12 mx-40">
            <div className=" flex">
              <input
                type="search"
                id="default-search"
                className="w-8/12 p-4 px-10 m-2 ml-3 mr-0 text-sm font-semibold text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by Job Title, Skill or Organization"
              />

              {/* <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              >
              <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg> */}
              <div className="relative">
                <button
                  type="submit"
                  // className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  className="text-white bg-emerald-500 font-medium mt-2 w-44 h-[77%]"
                >
                  SEARCH JOBS
                </button>
                <div className="absolute inset-y-0 start-2 pointer-events-none flex items-center scale-100">
                  <FaSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Jobs />
      </div>
    </Fragment>
  );
};

export default HomePage;
