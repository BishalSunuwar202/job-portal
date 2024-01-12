import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { jobActions } from "../../store/job-slice";

const SavedJobsItem = ({ id, name, position }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(jobActions.removeJobFromCart(id));
  };
  return (
    <>
      <div className="border-2 bg-slate-300 flex w-11/12 m-2 mx-10 p-6 justify-between">
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <h1 className="">{position}</h1>
        </div>
        <div>
          <Link to={`employer/${id}`}>
            <p>View Job detail</p>
          </Link>
        </div>
        <div>
          <button onClick={removeFromCart}>unsave</button>
        </div>
      </div>
    </>
  );
};

export default SavedJobsItem;
