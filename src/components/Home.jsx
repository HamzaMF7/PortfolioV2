import React from "react";
import "../styles/home.scss";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { FiDownloadCloud } from "react-icons/fi";
import hamza from "../assets/myPhoto.jpg";
import CV from "../assets/img/CV_hamza_maerof.pdf";
import Tag from "./Tag";
import Heading from "./Heading";
AOS.init();

const Home = () => {
  return (
    <div className="home" >
      <header>
        <Heading title="Home" />
      </header>

      <section className="section">
        <div className="about">
          <div className="info">
            <h1>Hi, I'm Hamza maerof</h1>
            <p>
              As a full stack developer, I am a versatile and skilled
              professional with a broad range of technical expertise. I possess
              a deep understanding of the entire software development process,
              from ideation to deployment, and am able to work across all layers
              of a technology stack
            </p>
          </div>
          <div className="extra-info">
            <div className="location">
              <SlLocationPin className="location-icon"/>
              <span>Ben ahmed, Settat</span>
            </div>
            <div className="available">
              <VscCircleFilled className="circle-icon" />
              <span>Available for new projects</span>
            </div>
          </div>
          <ul class="social-media">
            <li>
              <a href="#">
                <SlSocialFacebook />
              </a>
            </li>
            <li>
              <a href="https://github.com/HamzaMF7" target="_blank">
                <SlSocialGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hamza-maerof-379239236/"
                target="_blank"
              >
                <SlSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <MdOutlineAlternateEmail />
              </a>
            </li>
          </ul>
        </div>
        <div className="image">
          <div className="my-img">
            <img src={hamza} alt="hamza" />
          </div>
          <div className="bg-img"></div>
        </div>
        <div class="btn">
        <a href={CV} download="CV_hamza_maerof.pdf">
          <button>
            <FiDownloadCloud/>
            <span>Download CV</span>
          </button>
        </a>
      </div>
      </section>
    </div>
  );
};

export default Home;
