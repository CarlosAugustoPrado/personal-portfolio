import React from "react";
import TitleSpan from "../TitleSpan";
import DownloadButton from "../DownloadButton/DownloadButton.jsx";

import "./Hero.scss";
import photo from "./programming.svg";

const Hero = () => {
  const title = "Olá, sou o Carlos Augusto".split("");

  return (
    <>
      <section className="s-hero">
        <div className="container">
          <div className="titles-area">
            {title.map((letter, index) => {
              return (
                <TitleSpan key={index}>
                  {letter === " " ? "\u00A0" : letter}
                </TitleSpan>
              );
            })}
            <div className="function">
              <ul className="dinamic">
                <li className="li-frontend">
                  <p>Desenvolvedor front-end</p>
                </li>
              </ul>
              <DownloadButton />
            </div>
          </div>
          <div className="image-area">
            <img src={photo} alt="" />
          </div>
        </div>
      </section>
      <section className="black-tiles"></section>
    </>
  );
};

export default Hero;
