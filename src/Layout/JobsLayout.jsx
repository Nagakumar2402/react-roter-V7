import React from "react";
import { Outlet } from "react-router";

const JobsLayout = () => {
  return (
    <div className="jobLayout">
      <h2>Job Opening</h2>
      <p>List of current Jobs opening in Our Company</p>
      <Outlet />
    </div>
  );
};

export default JobsLayout;
