import React from "react";
import { Link } from "react-router-dom";

const ProfileFormCase = () => {
  return (
    <div className="border border-gray-800 m-4 w-screen">
      <form className="flex flex-col " action="">
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1 " htmlFor="Job Categories">
            Job Categories
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 p-1 w-[70%]"
            type="text"
            id="Job Categories"
            name="Job Categories"
            placeholder="job Categories"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1 " htmlFor="">
            Preferred Industries
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 p-1 w-[70%]"
            type="text"
            id="Preferred Industries"
            name="Preferred Industries"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Preferred Job Title
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Preferred Job Title"
            name="Preferred Job Title"
            placeholder="Preferred Job Title"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Looking For
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Looking For"
            name="Looking For"
            placeholder="Looking For"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Available for
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Available for"
            name="Available for"
            placeholder=""
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Specializations
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Specializations"
            name="Specializations"
            placeholder=""
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Skills
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Skills"
            name="Skills"
            placeholder="Skills"
            required
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Expected Salary
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Expected Salary"
            name="Expected Salary"
            placeholder=""
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Current Salary
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Current Salary"
            name="Current Salary"
            placeholder=""
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Carrer Objectuve Summary
          </label>
          <textarea
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Carrer Objectuve Summary"
            name="Carrer Objectuve Summary"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="m-4 p-2 flex-1" htmlFor="">
            Job Preference Location
          </label>
          <input
            className="border border-slate-600 m-2 mx-8 w-[70%] p-1"
            type="text"
            id="Job Preference Location"
            name="Job Preference Location"
          />
        </div>
        <div>
          <button className="border m-4 p-2 w-24 bg-cyan-400 hover:bg-cyan-900">
            Save
          </button>
          <Link to="">
            <button className="border m-4 p-2 w-24 bg-cyan-400 hover:bg-cyan-900">
              cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProfileFormCase;
