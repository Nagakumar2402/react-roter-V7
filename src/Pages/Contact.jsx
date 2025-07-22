import React from "react";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="title">Contact Pages</h1>
      <div className="btn_container">
        <button onClick={() => navigate("info")}>Contact info</button>
        <button onClick={() => navigate("form")}>Contact Form</button>
      </div>
    </div>
  );
};

export default Contact;
