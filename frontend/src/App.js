import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faArrowDown} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<div className="container">
<div className="nav-bar">

  <div className="links">
  <h3 className="contact" onClick={() => setIsOpen(!isOpen)}>Find me on</h3>
  {isOpen && (
    <div className="dropdown">
      <a href="https://github.com/AriLaurin">Github - AriLaurin</a>
      <p className="dropdown-p">Mail - arijuslau@gmail.com</p>
    </div>
  )}
  </div>

{/* end of navbar */}
</div>

  <div className="center">
    <div className="welcome-card">
    <h1 className="home-title">Welcome</h1>
    <p className="home-p">I'm Arijus Laurin, an aspiring Cyber Security Operator. Below you can find my details.</p>

    <div className="button-container">
      <div className="icon-background" href="">
      <FontAwesomeIcon icon={faArrowDown} className="welcome-icon" />
      </div>
    </div>

    {/*end of welcome-card*/}
    </div>
  
  {/*end of center*/}
  </div>

  <div className="left-bar"></div>
  <div className="right-bar"></div>
  <div className="footer">

  <h1 className="card-page-title">Details</h1>
    <div className="underline"></div>
  <div className="card-library">

    <div className="card-wrapper">
    <div className="card-container">
    <img src="/img/aboutme.gif" type="video/gif" alt="About me" className="card-image" />
      <div className="card-text">
      <h2 className="card-title">/ / About Me</h2>
      <p className="card-p">I work with various programming tasks such as; web-development, back-end server management and cyber security projects. For Web-Dev I use React, and I have back-end experience with Linux systems such as Ubuntu Servers and Kali.</p>
      </div>
    </div>

    <div className="card-container">
    <img src="/img/aboutme.gif" type="video/gif" alt="About me" className="card-image" />
      <div className="card-text">
      <h2 className="card-title">/ / Experience</h2>
      <p className="card-p">I studied IT & Media production in my freshman year of highschool, then followed the IT-path the second year, graduating as a Web-Developer. In addition to this I work as a full-stack developer and currently study cyber security alongside it.</p>
      </div>
    </div>

    <div className="card-container">
    <img src="/img/aboutme.gif" type="video/gif" alt="About me" className="card-image" />
      <div className="card-text">
      <h2 className="card-title">/ / About my projects</h2>
      <p className="card-p">Most of my projects are done to push myself forward into the fields I study. For example, to develop a webpage to display my work, creating various scripts and code to expand my utility and tinkering with different machines to execute my projects.</p>
      </div>
    </div>

    {/*end of card-warpper*/}
    </div>
   

    {/*end of card library*/}
    </div>

    {/*end of footer*/}
  </div>

{/* end of container*/}
</div>
  );
}

export default App;
