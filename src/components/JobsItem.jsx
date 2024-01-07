import React from "react";

const JobsItem = (props) => {
  const { imgUrl, name } = props;
  return (
    <div>
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default JobsItem;
