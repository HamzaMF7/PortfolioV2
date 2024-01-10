import React from "react";
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlLocationPin,
} from "react-icons/sl";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { FiDownloadCloud } from "react-icons/fi";
import { useTypewriter } from "react-simple-typewriter";
import hamza from "../assets/myPhoto.webp";
import CV from "../assets/CV_hamza_maerof.pdf";
import Heading from "../components/Heading";

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
AOS.init();

const Home = () => {
  const [text] = useTypewriter({
    words: ["I'm Hamza maerof👋"],
    loop: 1,
  });
  return (
    <div className="home container">
      <Heading title="Home" text="Home" />
      <section className="section">
        <div className="about">
          <div className="info">
            <h1>Hi, {text} </h1>
            <p>
              🚀 Front-end developer with a passion for creating visually
              stunning and user-friendly web experiences. <br />
              🎨 Keen eye for design and commitment to crafting
              responsive and interactive interfaces. <br />
              💻 Always eager to explore
              new technologies and deliver innovative solutions. Let's build
              engaging websites together! 🌐✨
            </p>
          </div>
          <div className="extra-info">
            <div className="location">
              <SlLocationPin className="location-icon" />
              <span>Casablanca, Morocco</span>
            </div>
            <div className="available">
              <VscCircleFilled className="circle-icon" />
              <span>Available for new projects</span>
            </div>
          </div>
          <ul className="social-media">
            <li>
              <a
                href="https://github.com/HamzaMF7"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hamza-maerof-379239236/"
                target="_blank"
                rel="noreferrer"
              >
                <SlSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="mailto:hamzamaerof07@gmail.com">
                <MdOutlineAlternateEmail />
              </a>
            </li>
          </ul>
        </div>
        <div className="image">
          <div className="my-img">
            <img src={hamza} alt="hamza" />
          </div>
        </div>
        <div className="btn">
          <a href={CV} download="CV_hamza_maerof.pdf">
            <button>
              <FiDownloadCloud />
              <span>Download CV</span>
            </button>
          </a>
        </div>
      </section>
      <div class="orbit">
        <div className="skills-text">
          <Heading title="skills" />
        </div>

        <ul>
          <li>
            <div>
              <img src={require("../assets/skills-img/html5.png")} alt="" />
            </div>
            <p>HTML5</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/css3.png")} alt="" />
            </div>
            <p>CSS3</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/sass.png")} alt="" />
            </div>
            <p>Sass</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/bootstrap.png")} alt="" />
            </div>
            <p>Bootstrap</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/js.png")} alt="" />
            </div>
            <p>JavaScript</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/ts.png")} alt="" />
            </div>
            <p>TypeScript</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/react.png")} alt="" />
            </div>
            <p>React Js</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/mui.png")} alt="" />
            </div>
            <p>Material-UI</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/redux.png")} alt="" />
            </div>
            <p>Redux ToolKit</p>
          </li>
          <li>
            <div>
              <img src={require("../assets/skills-img/figma.png")} alt="" />
            </div>
            <p>Figma</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
