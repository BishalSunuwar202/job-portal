import React from "react";
import JobsItem from "./JobsItem";
import { Link } from "react-router-dom";

const Dummy_Jobs = [
  {
    id: 1,
    imgUrl:
      "https://merojob.com/media/cache/66/01/6601dad42af8eba72a44ccc7d012c310.jpg",
    CompanyName: "Zen-Nepal",
  },
  {
    id: 2,
    imgUrl:
      "https://merojob.com/media/cache/5a/d1/5ad11b09f4dd3a373a4ce9727b9e4194.jpg",
    CompanyName: "Nepal HR solutions",
  },
  {
    id: 3,
    imgUrl:
      "https://merojob.com/media/cache/4a/0c/4a0cd2533f3e74e0ebc635df3e20fdbb.jpg",
    CompanyName: "AR Education Consultancy",
  },
  {
    id: 4,
    imgUrl:
      "https://merojob.com/media/cache/53/74/5374507feccf797741419b0a8a5fdece.jpg",
    CompanyName: "SD Miracle educational consultancy",
  },
  {
    id: 5,
    imgUrl:
      "https://merojob.com/media/cache/68/01/6801f8d0e96bd08d08660db00423867a.jpg",
    CompanyName: "Hotel Royal Singi Pvt Ltd",
  },
  {
    id: 6,
    imgUrl:
      "https://merojob.com/media/cache/cc/6d/cc6d1e657d63f84e031e38b2eaa4d365.jpg",
    CompanyName: "New Business Age",
  },
  {
    id: 7,
    imgUrl:
      "https://merojob.com/media/cache/5a/8b/5a8b6de8e5b8ac078ba270897fc7c151.jpg",
    CompanyName: "New jackson rrge",
  },
];
const Jobs = (props) => {
  return (
    <div>
      <section className="border-lime-950 border-2">
        <h2 className="m-4 text-center ">Top Jobs</h2>
        <ul className="grid grid-cols-3 ">
          {Dummy_Jobs.map((jobs) => (
            <Link to={`/employer/${jobs.id}`}>
              <JobsItem
                key={jobs.id}
                id={jobs.id}
                imgUrl={jobs.imgUrl}
                name={jobs.CompanyName}
              />
            </Link>
          ))}
          
        </ul>
        {/* {Dummy_Jobs.map((jobs) => (
          <CompanyDetailPage
            id={jobs.id}
            imgUrl={jobs.imgUrl}
            name={jobs.CompanyName}
          />
        ))} */}
      </section>
    </div>
  );
};

export default Jobs;
