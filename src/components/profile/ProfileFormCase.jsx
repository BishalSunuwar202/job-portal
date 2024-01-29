import React from "react";
import { Link } from "react-router-dom";

const ProfileFormCase = () => {
  return (
    <div className="border border-gray-800 m-4 w-screen">
      <form className="flex flex-col " action="">
        <div >
          <label className="m-4 p-2" htmlFor="Job Categories">
            Job Categories
          </label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Job Categories"
            name="Job Categories"
            placeholder="job Categories"
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Preferred Industries</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Preferred Industries"
            name="Preferred Industries"
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Preferred Job Title</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Preferred Job Title"
            name="Preferred Job Title"
            placeholder="Preferred Job Title"
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Looking For</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Looking For"
            name="Looking For"
            placeholder="Looking For"
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Available for</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Available for"
            name="Available for"
            placeholder=""
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Specializations</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Specializations"
            name="Specializations"
            placeholder=""
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Skills</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Skills"
            name="Skills"
            placeholder="Skills"
            required
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Expected Salary</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Expected Salary"
            name="Expected Salary"
            placeholder=""
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Current Salary</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Current Salary"
            name="Current Salary"
            placeholder=""
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Carrer Objectuve Summary</label>
          <textarea
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Carrer Objectuve Summary"
            name="Carrer Objectuve Summary"
          />
        </div>
        <div>
          <label className="m-4 p-2" htmlFor="">Job Preference Location</label>
          <input
            className="border border-slate-600 m-2 w-96 p-1"
            type="text"
            id="Job Preference Location"
            name="Job Preference Location"
          />
        </div>
      </form>
      <button className="border m-4 p-2 w-24 bg-cyan-400 hover:bg-cyan-900">Save</button>
      <Link to="">
        <button className="border m-4 p-2 w-24 bg-cyan-400 hover:bg-cyan-900">cancel</button>
      </Link>
    </div>
  );
};

export default ProfileFormCase;
