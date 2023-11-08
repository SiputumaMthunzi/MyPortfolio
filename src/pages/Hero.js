import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">Hello, I am Mthunzi Siputuma</h2>
        <h3 className="tagline">Breaking keyboards and pushing pixels since 2021</h3>
        <p className="paragraph">I'm deeply passionate about creating extraordinary digital experiences. With a keyboard as my brush and lines of code as my canvas, I breathe life into your digital visions. Let's come together and transform your digital dreams into beautiful realities. Please reach out, and let's embark on this exciting journey side by side!</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/112yXQ2vhu03cTZfuKseyZkQ8KGgnRzM1/view?usp=sharing" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="prantosh" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="https://github.com/SiputumaMthunzi" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/mthunzi-siputuma-6b6a17212" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        
        <a href="https://www.twitter.com/MbuyisaMbongo" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
  </div>
);

export default Hero;
