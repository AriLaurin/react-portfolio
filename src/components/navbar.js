import React, { useState } from "react";
import { Trans } from "react-i18next";
import i18n from "../i18n";

const lngs = {
  en: { nativeName: "English" },
  no: { nativeName: "Norsk" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-bar">
      <div className="lng-btn-cont">
        {Object.keys(lngs).map((lng) => (
          <button
            className="lng-btn"
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <div className="links">
        <h3 className="contact" onClick={() => setIsOpen(!isOpen)}>
          <Trans i18nKey="description.part12">Find me on</Trans>
        </h3>
        {isOpen && (
          <div className="dropdown">
            <a href="https://github.com/AriLaurin">Github - AriLaurin</a>
            <a href="https://www.linkedin.com/in/arijus-laurin-837008223/">
              LinkedIn - Arijus Laurin
            </a>
            <p className="dropdown-p">Mail - arijuslau@gmail.com</p>
          </div>
        )}
      </div>

      {/* end of navbar */}
    </div>
  );
};

export default Navbar;
