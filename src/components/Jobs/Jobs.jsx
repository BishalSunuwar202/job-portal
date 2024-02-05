import React from "react";
import JobsItem from "./JobsItem";


const Jobs = (props) => {
  return (
    <div>
      <section className="border-lime-950 border-2">
        <h2 className="m-4 text-center ">Top Jobs</h2>
        <ul className="grid grid-cols-3 gap-4 ">
          {props.filteredJobs.map((jobs) => (
            <JobsItem
              key={jobs.id}
              id={jobs.id}
              imgUrl={jobs.imgUrl}
              name={jobs.CompanyName}
              position={jobs.JobPositon}
            />
          ))}
        </ul>
        {/* {Dummy_Jobs.map((jobs) => (
          <CompanyDetailPage
            id={jobs.id}
            imgUrl={jobs.imgUrl}
            name={jobs.CompanyName}
          />
        ))} */}
      </section>
    </div>
  );
};

export default Jobs;
