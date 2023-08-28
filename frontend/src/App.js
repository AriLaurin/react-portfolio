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
      <div className="icon-background">
      <FontAwesomeIcon icon={faArrowDown} className="welcome-icon" />
      </div>
    </div>

    {/*end of welcome-card*/}
    </div>

  {/*end of center*/}
  </div>

  <div className="left-bar"></div>
  <div className="right-bar"></div>
  <div className="footer"></div>

{/* end of container*/}
</div>
  );
}

export default App;
