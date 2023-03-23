import React from "react";

import web from "../imagesAbout/web.svg";
import reactjs from "../imagesAbout/reactjs.svg";
import uxdesign from "../imagesAbout/ux-design.svg";
import git from "../imagesAbout/git.svg";
import nodejs from "../imagesAbout/nodejs.svg";
import wordpress from "../imagesAbout/wordpress.svg";

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="s-skills">
      <div className="container">
        <h2>O que eu ofereço:</h2>
        <div className="skillCard-area">
          <div className="skillCard">
            <img src={web} alt="" />
            <h3>Desenvolvimento web</h3>
            <p>
              Eu transformo em códigos as interfaces desejadas pelos clientes
              usando HTML, CSS, JavaScript e ReactJS
            </p>
          </div>
          <div className="skillCard">
            <img src={reactjs} alt="" />
            <h3>Performance</h3>
            <p>
              Com ReactJS e NextJS consigo criar aplicações poderosas e com
              performance SEO muito alta, tudo devidamente divido em componentes
              para facilitar a manutenção
            </p>
          </div>
          <div className="skillCard">
            <img src={uxdesign} alt="" />
            <h3>Pensamento UX</h3>
            <p>
              Tendo o certificado de Google UX Designer eu consigo que as
              aplicações que desenvolvi tenham a melhor experiência para o
              usuário
            </p>
          </div>
          <div className="skillCard">
            <img src={git} alt="" />
            <h3>Controle de versão</h3>
            <p>
              Consigo manter total controle e documentação das minhas aplicações
              com conhecimento de Git
            </p>
          </div>
          <div className="skillCard">
            <img src={nodejs} alt="" />
            <h3>NodeJS e NPM</h3>
            <p>
              Pelo lado do back-end tenho experiência com Node e NPM para
              criação e manipulação de API's que serão integradas ao front-end
            </p>
          </div>
          <div className="skillCard">
            <img src={wordpress} alt="" />
            <h3>Conteúdo gerenciável</h3>
            <p>
              Consigo deixar o conteúdo do seu site gerenciável para que você
              mesmo possa alterá-lo usando Wordpress e Prismic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
