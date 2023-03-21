import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="name">
          <h1>Carlos Augusto Prado</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;