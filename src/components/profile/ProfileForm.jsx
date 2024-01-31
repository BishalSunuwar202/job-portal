import React, { useState } from "react";
import { MdEditDocument } from "react-icons/md";
import ProfileFormCase from "./ProfileFormCase";
import ProfileFormDetail from "./ProfileFormDetail";

const ProfileForm = ({profileData}) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (value) => {
    setOpen(value);
  };

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
        {open ? (
          <ProfileFormCase />
        ) : (
          <ProfileFormDetail
            setOpen={handleOpenChange} profileData={profileData}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileForm;
