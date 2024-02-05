import React, { Fragment, useState } from "react";
import Jobs from "../components/Jobs/Jobs";
import { FaSearch } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";

const Dummy_Jobs = [
  {
    id: 1,
    imgUrl:
      "https://merojob.com/media/cache/66/01/6601dad42af8eba72a44ccc7d012c310.jpg",
    CompanyName: "Zen-Nepal",
    JobPositon: "Retail Sales Executive",
  },
  {
    id: 2,
    imgUrl:
      "https://merojob.com/media/cache/5a/d1/5ad11b09f4dd3a373a4ce9727b9e4194.jpg",
    CompanyName: "Nepal HR solutions",
    JobPositon: "Web Developer",
  },
  {
    id: 3,
    imgUrl:
      "https://merojob.com/media/cache/4a/0c/4a0cd2533f3e74e0ebc635df3e20fdbb.jpg",
    CompanyName: "AR Education Consultancy",
    JobPositon: "Manager",
  },
  {
    id: 4,
    imgUrl:
      "https://merojob.com/media/cache/53/74/5374507feccf797741419b0a8a5fdece.jpg",
    CompanyName: "SD Miracle educational consultancy",
    JobPositon: "Senior Engineer",
  },
  {
    id: 5,
    imgUrl:
      "https://merojob.com/media/cache/68/01/6801f8d0e96bd08d08660db00423867a.jpg",
    CompanyName: "Hotel Royal Singi Pvt Ltd",
    JobPositon: "Consultant",
  },
  {
    id: 6,
    imgUrl:
      "https://merojob.com/media/cache/cc/6d/cc6d1e657d63f84e031e38b2eaa4d365.jpg",
    CompanyName: "New Business Age",
    JobPositon: "Labour",
  },
  {
    id: 7,
    imgUrl:
      "https://merojob.com/media/cache/5a/8b/5a8b6de8e5b8ac078ba270897fc7c151.jpg",
    CompanyName: "New jackson rrge",
    JobPositon: "MR",
  },
];

const HomePage = () => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredJobPosition = Dummy_Jobs.filter(
    (jobs) => jobs.JobPositon.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

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
          <div
            className="bg-slate-600 md:w-4/6 lg:w-5/12 w-80
           mx-40"
          >
            <div className="flex ">
              <input
                type="search"
                id="default-search"
                className="md:w-8/12 w-32 p-4 px-10 m-2 ml-3 mr-0 text-sm font-semibold text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search by Job Title, Skill or Organization"
                onChange={handleChange}
              />

              <div className="relative">
                <Link to={"search"}>
                  <button
                    type="submit"
                    // className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    className="text-white bg-emerald-500 font-medium mt-2 w-44 h-[77%]"
                  >
                    SEARCH JOBS
                  </button>
                </Link>
                <div className="absolute inset-y-0 start-2 pointer-events-none flex items-center scale-100">
                  <FaSearch />
                </div>
              </div>
            </div>
            <div className=" bg-slate-50">
              {query ? (
                <div>
                  {filteredJobPosition.map((jobPos) => (
                    <ul key={jobPos.id}>
                      <Link >
                        <li className="p-1 border bg-sky-200 hover:bg-sky-600 ">
                          {jobPos.JobPositon}
                        </li>
                      </Link>
                    </ul>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <Jobs />
      </div>
    </Fragment>
  );
};

export default HomePage;
