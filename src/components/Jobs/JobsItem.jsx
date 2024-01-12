import React from "react";

import { Link } from "react-router-dom";

const JobsItem = ({ id, imgUrl, name, position }) => {
  return (
    <>
      <div className="">
        <Link to={`employer/${id}`}>
          <div className="border-2">
            <img src={imgUrl} alt={name} />
            <h3>{name}</h3>
            <h1>{position}</h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default JobsItem;
