import React, { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-2">
      <div className="m-4 p-2">
        <button onClick={() => setOpen((prev) => !prev)} className="scale-[2]">
          <IoIosPerson />

          <MdOutlineArrowDropDown className="h-3" />
        </button>
      </div>
      {open && (
        <div className="bg-slate-100 flex flex-col  border-4 w-80 absolute end-6">
          <div className="flex justify-around ">
            <div className="m-2 text-3xl">
              <IoIosPerson />
            </div>
            <div>
              <h1 className="m-2 hover:bg-slate-200 active:ring-orange-100 ">
                Bishal Sunuwar
              </h1>
              <h1 className="m-2 hover:bg-slate-200 active:ring-orange-100  -mt-2 mb-4 tracking-wider">
                {" "}
                bishalsunuwar@gmail.com
              </h1>

              <h1 className="m-2 mt-6 hover:bg-slate-200 active:ring-orange-100 ">
                Last Logged In:
              </h1>
              <h3 className="m-2 hover:bg-slate-200 active:ring-orange-100 ">
                Edit Profile
              </h3>
              <h3 className="m-2 hover:bg-slate-200 active:ring-orange-100 ">
                Change Password
              </h3>
              <h3 className="m-2 hover:bg-slate-200 active:ring-orange-100 ">
                <Link to={"favourite"}>Saved Jobs</Link>
              </h3>
              <h3 className="m-2 hover:bg-slate-200 active:ring-orange-100 ">
                Purchase History
              </h3>
              <h3 className="m-2 hover:bg-slate-200 active:ring-orange-100 ">
                LogOut
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
