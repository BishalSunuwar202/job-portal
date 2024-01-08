import React from "react";

const JobsItem = ({ imgUrl, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-2">
        <img src={imgUrl} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="border-2 h-auto w-4/12 m-4">
        <h1>Job Description</h1>
        <div>
          <ul className="list-disc">
            <li className="">
              <h1 className="font-bold">
                Loan Marketing and Identifying the Potential Customers’:{" "}
              </h1>
              <p>
                Market the products of the organization for increasing the loan
                customers of the organization for maximizing the profit of the
                organization.
              </p>
            </li>
            <li>
              <h1 className="font-bold">
                Pre-Proposal Writing and Pre- Report Preparation:
              </h1>
              <p>
                Prepare credit appraisal report by obtaining and finding the
                real and genuine information of the customers about the credit
                history of the client.
              </p>
            </li>
          </ul>
        </div>
        <hr />
        <div className="">
          <div className="m-4 flex justify-center">
            <button className="bg-cyan-200 rounded p-2">Apply Now</button>
          </div>
          <hr />
          <div className="m-4 flex justify-center">
            <button className="bg-cyan-200 rounded p-2">Save Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsItem;
