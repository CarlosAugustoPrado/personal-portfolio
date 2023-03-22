import React from "react";
import { useState } from "react";

import "./About.scss";
import html from "./imagesAbout/html.svg";
import web from "./imagesAbout/web.svg";
import reactjs from "./imagesAbout/reactjs.svg";
import nodejs from "./imagesAbout/nodejs.svg";

const About = () => {
  return (
    <section className="s-about">
      <div className="container">
        <div className="text">
          <h2>Sobre mim:</h2>
          <p>
            Olá, meu nome é Carlos Augusto Prado, tenho 31 anos, sou brasileiro
            de uma pequena cidade no Sul de Minas Gerais. Sou desenvolvedor
            front-end e desenvolvedor full-stack com foco em ReactJS e NodeJS.
            Estudo e atuo no mercado desde 2020 e já fiz inúmeros cursos para
            aprimorar minhas habilidades e conhecimentos. Atualmente venho
            trabalhando como freelancer.
          </p>
        </div>
        <div className="experience">
          <h2>3+</h2>
          <span>
            Anos de experiência. Especialista em construir aplicações web com
            foco total na experiência do usuário (UX)
          </span>
        </div>
        <div className="cards-area">
          <div className="card">
            <img src={html} alt="" className="icon-card" />
            <span>Front-end Development</span>
          </div>
          <div className="card">
            <img src={web} alt="" className="icon-card" />
            <span>Web Development</span>
          </div>
          <div className="card">
            <img src={reactjs} alt="" className="icon-card" />
            <span>ReactJS Development</span>
          </div>
          <div className="card">
            <img src={nodejs} alt="" className="icon-card" />
            <span>FullStack Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
