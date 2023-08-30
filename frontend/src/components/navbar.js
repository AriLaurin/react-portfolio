import React, { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
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
    )
}

export default Navbar;