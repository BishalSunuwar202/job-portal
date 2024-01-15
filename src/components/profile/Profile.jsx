import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-slate-200 flex justify-end m-4 mr-32 ml-32 p-2">
        <Link to={"profileDetails"} target="blank">
        <button className="p-2 m-1 rounded-sm bg-blue-500 font-light text-white">
          Update Profile
        </button>
        </Link>
        <button className="p-2 m-1 rounded-sm bg-green-500 font-light text-white">
          Download My CV
        </button>
      </div>
      <div className="border-2 m-4 mr-32 ml-32 p-2">
        <section>
          <img
            src="https://merojob.com/media/cache/71/9c/719c3900cb66c0fc83e51dc966f56c13.png"
            alt="profile avatar"
          />
        </section>
      </div>
    </div>
  );
};

export default Profile;
