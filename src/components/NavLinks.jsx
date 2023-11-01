import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { AiFillHome, AiFillFile, AiFillAppstore } from "react-icons/ai";

const NavLinks = () => {
  return (
    <div className="nav-links ">
      <ul className="links">
        <li className="link">
          <Link to="/">
            <CustomButton icon={AiFillHome} text="Home" />
          </Link>
        </li>
        <li className="link">
          <Link to="/resume">
            <CustomButton icon={AiFillFile} text="Resume" />
          </Link>
        </li>
        <li className="link">
          <Link to="/projects">
            <CustomButton icon={AiFillAppstore} text="Projects" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
