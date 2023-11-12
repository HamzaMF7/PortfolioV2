import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import { AiFillHome, AiFillFile, AiFillAppstore } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../state/themeSlice";

const NavLinks = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.theme);
  // Set state to determine whether user is on a mobile device or not
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  // Update isMobile state when the window is resized
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        {isMobile ? (
          <li>
            <div
              className="darkMode-btn"
              onClick={() => {
                dispatch(setDarkMode());
              }}
            >
              {isDarkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </div>
          </li>
        ) : (
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
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
