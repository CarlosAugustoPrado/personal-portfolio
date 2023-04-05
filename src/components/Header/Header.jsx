import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link, animateScroll as scroll, scroller } from "react-scroll";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["s-hero", "s-about", "s-projects", "s-contact"];
      const currentSection = sectionIds.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="container">
        <div className="name">
          <h1>Carlos Augusto Prado</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link
                to="s-about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={handleSetActive}
                className={activeSection === "s-about" ? "active" : ""}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="s-projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
                className={activeSection === "s-projects" ? "active" : ""}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="s-contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
                className={activeSection === "s-contact" ? "active" : ""}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
