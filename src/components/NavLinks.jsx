import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { AiFillHome, AiFillFile, AiFillAppstore } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../state/themeSlice";

const NavLinks = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);
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
        <li
          onClick={() => {
            dispatch(setDarkMode());
          }}
        >
          <CustomButton
            icon={isDarkMode ? BsFillSunFill : BsFillMoonStarsFill}
            text={isDarkMode ? "Light" : "Dark"}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
