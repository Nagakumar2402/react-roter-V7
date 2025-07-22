import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="jobDetails">
      <h2>
        {" "}
        <b>Title :</b>
        {data.title}
      </h2>
      <p>
        {" "}
        <b>Location :</b>
        {data.location}
      </p>
      <p>
        {" "}
        <b>salary :</b>
        {data.salary}
      </p>
      <p>
        aliquid voluptates explicabo? Soluta magni nisi ut nostrum illo deserunt
        dolore modi ipsam, dolorem voluptatibus sequi minus, corrupti cupiditate
        excepturi. Vitae, vel. Numquam rerum eligendi consequatur reiciendis!
        Repellat doloribus incidunt maiores harum, optio ipsum asperiores
        tempora autem, quibusdam, corporis nesciunt delectus deserunt natus.
        Officia voluptatum qui praesentium rerum quam. Nobis, reprehenderit
        culpa alias unde corrupti, voluptatem nihil nulla quia, quisquam ad
        optio?
      </p>
      <button>Apply now</button>
    </div>
  );
};

export default JobDetails;
