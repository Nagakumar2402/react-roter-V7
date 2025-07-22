import React from "react";
import logo from "../assets/logo.svg";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="logo" width={200} onClick={() => navigate("/")} />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/product">
          <li>products</li>
        </NavLink>
        <NavLink to="/about">
          <li>about</li>
        </NavLink>
        <NavLink to="/contact">
          <li>contact</li>
        </NavLink>
        <NavLink to="/jobs">
          <li>Jobs</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/contact")}>get started</button>
    </div>
  );
};

export default Navbar;
