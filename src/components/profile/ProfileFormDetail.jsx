import React from "react";

const ProfileFormDetail = ({ setOpen }) => {
  const changeComp = () => {
    setOpen(true);
  };
  return (
    <div className="border w-screen ">
      <div className="flex justify-between border">
        <p className="font-bold m-4 p-2"> Job Preference</p>
        <button
          className="m-4 p-2 border border-solid border-cyan-400 font-medium text-cyan-400 hover:bg-cyan-600"
          onClick={changeComp}
        >
          Edit Career & Objective
        </button>
      </div>
      <div>
        <h1 className="font-bold ml-4 mt-4 pl-2 pt-2 pr-2">
          Career Objective Summary
        </h1>
        <p className="text-slate-400 ml-4 pl-2">
          to pursue the challenging career
        </p>
      </div>
      <div className="m-4 p-4 bg-slate-200 flex justify-between">
        <h1 className="">Job Categories</h1>
        <span>:</span>
        <h1>Construction</h1>
      </div>
      <div className="m-4 p-4 bg-slate-50 flex justify-between">
        <h1 className="">Preferred Industries</h1>
        <span>:</span>
        <h1>Software Companies</h1>
      </div>
      <div className="m-4 p-4 bg-slate-200 flex justify-between">
        <h1 className="">Preferred Job Title</h1>
        <span>:</span>
        <h1>Web Developer</h1>
      </div>
      <div className="m-4 p-4 bg-slate-50 flex justify-between">
        <h1 className="">Looking For</h1>
        <span>:</span>
        <h1>Construction</h1>
      </div>
      <div className="m-4 p-4 bg-slate-200 flex justify-between">
        <h1 className="">Available for</h1>
        <span>:</span>
        <h1>Construction</h1>
      </div>
      <div className="m-4 p-4 bg-slate-50 flex justify-between">
        <h1 className="">Specialization</h1>
        <span>:</span>
        <h1>Construction</h1>
      </div>
      <div className="m-4 p-4 bg-slate-200 flex justify-between">
        <h1 className="">Skills</h1>
        <span>:</span>
        <h1>Construction</h1>
      </div>
      <div className="m-4 p-4 bg-slate-50 flex justify-between">
        <h1 className="">Expected Salary</h1>
        <span>:</span>
        <h1>Construction</h1>
      </div>
      <div className="m-4 p-4 bg-slate-200 flex justify-between">
        <h1 className="">Current Salary</h1>
        <span>:</span>
        <h1>Construction</h1>
      </div>
      <div className="m-4 p-4 bg-slate-50 flex justify-between">
        <h1 className="">Job Preference Location</h1>
        <span>:</span>
        <h1>Construction</h1>
      </div>
    </div>
  );
};

export default ProfileFormDetail;
