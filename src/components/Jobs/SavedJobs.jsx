import React from "react";
import { useSelector } from "react-redux";

const SavedJobs = () => {
  const jobDetails = useSelector((state) => state.jobs.items);
  return (
    <>
      <div>
        <div>
          <p>Saved Jobs</p>
        </div>
        <ul className="flex">
          <li>Job Position</li>
          <li>Company</li>
          <li>Detail</li>
          <li>Action</li>
        </ul>
        {jobDetails.map((item) => (
          <ul className="flex">
            <>
              <li key={item.id}> </li>
              <li>{item.id}</li>
              <li>{item.position}</li>
              <li>{item.name}</li>
            </>
          </ul>
        ))}
      </div>
    </>
  );
};

export default SavedJobs;
