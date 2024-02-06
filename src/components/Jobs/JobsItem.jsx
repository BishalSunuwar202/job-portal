import React from "react";

import { Link, useNavigate } from "react-router-dom";

const JobsItem = ({ id, imgUrl, name, position, list }) => {
  const navigate = useNavigate();
  return (
    <>
      {list ? (
        
        <div className="border border-red-500">

        <div className="border border-green-300">
          <div
            onClick={() => navigate(`/employer/${list.id}`)}
            className="border"
            >
            <img src={list.imgUrl} alt={name} />
            <h3>{list.name}</h3>
            <h1>{list.position}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <Link to={`employer/${id}`}>
            <div className="border-2">
              <img src={imgUrl} alt={name} />
              <h3>{name}</h3>
              <h1>{position}</h1>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default JobsItem;
