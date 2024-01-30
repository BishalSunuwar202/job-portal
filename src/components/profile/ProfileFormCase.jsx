import React from "react";
import { Form } from "react-router-dom";

const ProfileFormCase = () => {
  return (
    <div className="border border-gray-800 m-4 w-screen">
      <Form method="POST" className="flex flex-col " action="">
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
          <button className="border m-4 p-2 w-24 bg-cyan-400 hover:bg-cyan-900">
            cancel
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ProfileFormCase;

// export async function action({ request, params }) {
//   const data = await request.formData();

//   const profileData = {
//     JobCategories: data.get("Job Categories"),
//     PreferredIndustries: data.get("Preferred Industries"),
//     PreferredJobTitle: data.get("Preferred Job Title"),
//     LookingFor: data.get("Looking For"),
//     AvailableFor: data.get("Available for"),
//     Specializations: data.get("Specializations"),
//     Skills: data.get("Skills"),
//     ExpectedSalary: data.get("Expected Salary"),
//     CurrentSalary: data.get("Current Salary"),
//     CarrerObjectuveSummary: data.get("Carrer Objectuve Summary"),
//     JobPreferenceLocation: data.get("Job Preference Location"),
//   };
//   console.log(profileData);

//   const response = await fetch(
//     "https://mero-job-bcb98-default-rtdb.firebaseio.com/ProfileData.json",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(profileData),
//     }
//   );
//   console.log(response)

//   if (!response.ok) {
//     throw json({ message: "could not save profile" }, { status: 500 });
//   }
// }
