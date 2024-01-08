import React from "react";
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { TbHeartRateMonitor } from "react-icons/tb";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import DropDownMenu from "./DropDownMenu";


const ProfileNavigation = () => {
  return (
    <div className="m-8 p-2 flex justify-end">
      <div className="m-2 flex flex-col items-center">
        <div className="p-2 scale-150">
          <CiHome />
        </div>
        <p className="">OverView</p>
      </div>
      <div className="m-2 flex flex-col items-center">
        <div className="p-2 scale-150">
          <CgProfile />
        </div>
        <p>My Profile</p>
      </div>
      <div className="m-2 flex flex-col items-center">
        <div className="p-2 scale-150">
          <TbHeartRateMonitor />
        </div>
        <p>My Status</p>
      </div>
      <div className="m-2 flex flex-col items-center">
        <div className="p-2 scale-150">
          <MdOutlineSettingsInputComponent />
        </div>
        <p>Setting</p>
      </div>
      <div className="m-4 p-2 scale-[2] h-10">
        <CiHeart />
      </div>
      <div className="border-2">
        <DropDownMenu />
      </div>

      

      
    </div>
    
    
  );
};

export default ProfileNavigation;
