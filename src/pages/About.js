import React from 'react';
import './About.css';
import ReduxIcon from '../assets/redux.png';
import HTML from '../assets/html.png';
import jQuery from '../assets/jquery.png';
import AdobeXD from '../assets/adobeXD.png';

import ionic from '../assets/ionic.png';
import VSCode from '../assets/vscode.png';
import Figma from '../assets/figma.png';
import ReactIcon from '../assets/react.png'
import Firebase from '../assets/Firebase.png'
import NPMlogo from '../assets/npm.png'
import GitLogo from '../assets/git.png'
import GitHublogo from '../assets/github.png'
import GMeet from '../assets/meet.png'
import Nodejs from '../assets/node.png'
import Zoomlogo from '../assets/zoom.webp'
import SkypeLogo from '../assets/skype.png'
import mssms from '../assets/mssms.png'
import WebPack from '../assets/webpack.png'
import PostGres from '../assets/postgres.png'
import Teams from '../assets/Teams.png'
import Canva from '../assets/canva.png'
import CDT from '../assets/cdt.png'
import CSS from '../assets/css.png'
import BootStrap from '../assets/bootstrap.png'
import NextJS from '../assets/next.webp'
import JavaScript from '../assets/javascript.png'
import CSharp from '../assets/csharp.png'
import Sass from '../assets/sass.png'
import PostMan from '../assets/postman.png'
import WordPress from '../assets/wordpress.png'
import php from '../assets/php.png'

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">

I'm a passionate software developer who loves transforming ideas into functional code. I thrive on solving real-world problems, collaborating with teams, and staying up-to-date with the latest tech trends. Let's build something amazing together!

     </p>
      <button className="hire-me">
        <a href="https://drive.google.com/file/d/1yplYmuNjxZMZ6UwLDEa8K84N4S7ZfPtx/view?usp=sharing" target="_blank" rel="noreferrer">
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={ReactIcon}
            alt=""
          />
          <p>React</p>
        </div>
        <div className="skill">
          <img
            src={JavaScript}
            alt=""
          />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img
            src={CSharp}
            alt=""
          />
          <p>C#</p>
        </div>
        <div className="skill">
          <img
            src={ReduxIcon}
            alt=""
          />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img
            src={HTML}
            alt=""
          />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img
            src={CSS}
            alt=""
          />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <img
            src={jQuery}
            alt=""
          />
          <p>jQuery</p>
        </div>
        <div className="skill">
          <img
            src={Sass}
            alt=""
          />
          <p>SASS</p>
        </div>
        <div className="skill">
          <img
            src={BootStrap}
            alt=""
          />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <img
            src={NextJS}
            alt=""
          />
          <p>Next.js</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={Nodejs}
            alt=""
          />
          <p>Node.Js</p>
        </div>
       
        <div className="skill">
          <img
            src={PostGres}
            alt=""
          />
          <p>PostgreSQL</p>
        </div>
      </div>
      <h2 className="skill-title">Mobile</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={ReactIcon}
            alt=""
          />
          <p>React Native</p>
        </div>
        <div className="skill">
          <img src={ionic} alt="" />
          <p>Ionic</p>
        </div>

      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
      
        <div className="skill">
          <img src={CDT} alt="" />
          <p>Chrome Dev Tools</p>
        </div>
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <img src={WebPack} alt="" />
          <p>Webpack</p>
        </div>
        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
        <div className="skill">
          <img src={WordPress} alt="" />
          <p>WordPress</p>
        </div>
      </div>
      <h2 className="skill-title">Database</h2>
      <div className="skills">
        <div className="skill">
          <img src={Firebase} alt="" />
          <p>Firebase</p>
        </div>
        <div className="skill">
          <img src={mssms} alt="" />
          <p>SQL Management Studio</p>
        </div>
        <div className="skill">
          <img src={php} alt="" />
          <p>PHP MySQL</p>
        </div>
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
        <div className="skill">
          <img src={AdobeXD} alt="" />
          <p>AdobeXD</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={Teams} alt="" />
          <p>Ms Teams</p>
        </div>
        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Mentoring</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Decision Making</p>
        <p className="soft-skill">Critical Thinking</p>
      </div>
    </div>

  </section>
);

export default About;
