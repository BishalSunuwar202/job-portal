import React, { useState } from "react";
//import { useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import Jobs from "../components/Jobs/Jobs";
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

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [jobsQuery, setJobsQuery] = useState("");
  const searchTermFromUrl = searchParams.get("q") === `${jobsQuery}`;
  console.log(searchTermFromUrl);

  const handleChange = (e) => setJobsQuery(e.target.value);

    var filteredJobs = Dummy_Jobs.filter(
      (jobs) =>
        jobs.JobPositon.toLowerCase().indexOf(jobsQuery.toLowerCase()) !== -1
    );
  

  return (
    <div className="bg-slate-400 h-screen  ">
      <div className=" border h-56">
        <div
          className="bg-slate-600 md:w-fit w-52
        h-16 flex items-center m-auto mt-20"
        >
          <div className="flex">
            <input
              type="search"
              id="default-search"
              className="md:w-80 w-48 p-2 px-10 m-2 text-sm font-semibold text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 md:mr-0"
              placeholder="Search by Job Title, Skill or Organization"
              onChange={handleChange}
            />

            <div className="relative">
              <Link to={`?q=${jobsQuery}`}>
                <button
                  type="submit"
                  className="text-white bg-emerald-500 font-medium mt-2 md:w-36 w:24 h-[70%] hidden md:block pl-6 mr-2"
                >
                  SEARCH JOBS
                </button>
                <div className="absolute md:inset-y-0 md:start-2  pointer-events-none flex items-center scale-150 md:scale-100 inset-y-0 -start-7 text-cyan-300 md:text-slate-50">
                  <FaSearch />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-slate-50 w-1/3 m-auto">
          {jobsQuery ? (
            <div>
              {filteredJobs.map((jobPos) => (
                <ul key={jobPos.id}>
                  <Link>
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

      {/* <Jobs filteredJobs={filteredJobs} /> */}
      <Jobs />
    </div>
  );
};

export default SearchPage;
