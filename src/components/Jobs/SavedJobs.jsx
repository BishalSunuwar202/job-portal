import React from "react";
import { useSelector } from "react-redux";
import SavedJobsItem from "./SavedJobsItem";
import { CiSaveDown2 } from "react-icons/ci";

const SavedJobs = () => {
  const jobDetails = useSelector((state) => state.jobs.items);
  return (
    <>
      <div className="flex justify-center">
        <div className="border-2 m-4 h-80 w-6/12">
          <div className="m-4 p-2 border-2 font-bold flex items-center">
            <i className="m-2 ">
              <CiSaveDown2 />
            </i>
            <p className="m-2">Saved Jobs</p>
          </div>
          <hr className="mx-6 my-6 border-gray-600" />
          <ul className="flex justify-between">
            <li className="m-2 p-2 pl-14 font-bold">Job Position</li>
            <li className="m-2 p-2 font-bold">Company</li>
            <li className="m-2 p-2 font-bold">Detail</li>
            <li className="m-2 p-2 font-bold">Action</li>
          </ul>
          {jobDetails.map((item) => (
            <ul className="flex">
              <SavedJobsItem
                key={item.id}
                id={item.id}
                name={item.name}
                position={item.position}
              />
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default SavedJobs;
