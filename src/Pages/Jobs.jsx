import React from "react";
import { Link, useLoaderData } from "react-router";

const Jobs = () => {
  const data = useLoaderData();

  return (
    <div className="singleJob">
      {data && data.length > 0
        ? data.map((singleData) => (
            <Link key={singleData.id} to={singleData.id.toString()}>
              <h2>{singleData.title}</h2>
              <div className="div">
                <p>
                  <b>Location: </b>
                  {singleData.location}
                </p>
                <p>
                  <b>Salary: </b>
                  {singleData.salary}
                </p>
              </div>
            </Link>
          ))
        : ""}
    </div>
  );
};

export default Jobs;
