import React from "react";
import "./Hero.scss";
import photo from "./programming.svg";

const Hero = () => {
  return (
    <>
      <section className="s-hero">
        <div className="container">
          <div className="titles-area">
            <h2>Olá, sou o</h2>
            <h1>Carlos Augusto</h1>
            <p>
              Sou um desenvolvedor front-end / desenvolvedor full-stack <br />{" "}
              com foco em ReactJS. Entusiasta de novas tecnologias e apaixonado
              pelo front-end em geral.
            </p>
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
