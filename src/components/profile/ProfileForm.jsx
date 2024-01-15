import React from "react";
import { MdEditDocument } from "react-icons/md";

const ProfileForm = () => {
  return (
    <div>
      <div className="flex border ml-32 mr-32">
        <div className="flex">
          <i className="m-2 p-1 text-xl">
            <MdEditDocument />
          </i>
          <p className="font-bold m-2 p-1">Edit Profile</p>
        </div>
        <button className="bg-lime-500 hover:bg-lime-800 p-2 m-2 font-semibold text-white">
          Preview Profile
        </button>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="border row-span-3 "> fd</div>
        <div className="border col-span-2 "> fd</div>
        <div className="border row-span-2 col-span-2 "> fd</div>

      </div>
    </div>
  );
};

export default ProfileForm;
