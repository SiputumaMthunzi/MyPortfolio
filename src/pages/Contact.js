import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        CODE
        {' '}
        <br />
        COFFEE
        <br />
        {' '}
        REPEAT 
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Angular</p>
        <p>ionic</p>
        <p>Backend Development</p>
        <p>WordPress Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
       
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span><a href="mailto:msiputuma@outlook.com">cOnTaCt mE</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/SiputumaMthunzi" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/mthunzi-siputuma-6b6a17212" target="_blank" rel="noreferrer">LINKEDIN</a>
        </span>
       
        <span><a href="https://www.twitter.com/MbuyisaMbongo" target="_blank" rel="noreferrer">TWITTER</a></span>
      </div>
    </div>
  </div>
);

export default Contact;
