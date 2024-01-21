import React from "react";
import { MdEditDocument } from "react-icons/md";

const ProfileForm = () => {
  return (
    <div className="flex flex-col ml-52 mr-52 font-medium text-slate-700">
      <div className="flex border relative p-6">
        <div className="flex ">
          <i className="m-2 p-1 text-2xl">
            <MdEditDocument />
          </i>
          <p className="font-bold m-2 p-1 text-lg">Edit Profile</p>
        </div>
        <button className="bg-lime-500 hover:bg-lime-800 p-2 m-2 font-semibold text-white absolute end-10">
          Preview Profile
        </button>
      </div>
      <div className="flex border">
        <div className="border w-2/5">
          <ul className="flex flex-col items-center justify-center">
            <li className="border w-full text-center p-4">Job Preference</li>
            <li className="border w-full text-center p-4">Basic Information</li>
            <li className="border w-full text-center p-4">Education</li>
            <li className="border w-full text-center p-4">Training</li>
            <li className="border w-full text-center p-4">Work Experience</li>
            <li className="border w-full text-center p-4">Language</li>
            <li className="border w-full text-center p-4">Social Account</li>
            <li className="border w-full text-center p-4">Reference</li>
            <li className="border w-full text-center p-4">Other Information</li>
            <li className="border w-full text-center p-4">Other Information</li>
            <li className="border w-full text-center p-4">Other Information</li>
          </ul>
        </div>
        <div className="border w-screen ">
          <div className="flex justify-between border">
            <p className="font-bold m-4 p-2"> Job Preference</p>
            <button className="m-4 p-2 border border-solid border-cyan-400 font-medium text-cyan-400 hover:bg-cyan-600">
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
      </div>
    </div>
  );
};

export default ProfileForm;
