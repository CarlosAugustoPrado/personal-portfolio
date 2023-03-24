import React, { useState } from "react";

import nttdataImage from "./ProjectsImages/nttata.png";
import smartBusinessImage from "./ProjectsImages/smart-business.png";
import whatIfImage from "./ProjectsImages/what-if.png";
import pokemonImage from "./ProjectsImages/pokemon.png";
import gowImage from "./ProjectsImages/GOW.png";
import "./Projects.scss";

const ProjectsArea = () => {
  const [projects] = useState([
    {
      id: 1,
      name: "NttData",
      description: "Buscador de informações de filmes em uma API",
      image: nttdataImage,
      link1: "https://nttdata-test.vercel.app",
      link2: "https://github.com/CarlosAugustoPrado/NTTData-TechTest",
    },
    {
      id: 2,
      name: "Smart Business",
      image: smartBusinessImage,
      description: "Redesign de uma landing page da empresa Smart Business",
      link1: "https://smartbusiness-insany-carlosaugustopr.netlify.app",
      link2: "https://github.com/CarlosAugustoPrado/SmartBusiness-Insany",
    },
    {
      id: 3,
      name: "What IF?",
      image: whatIfImage,
      description: "Projeto para o curso codeboost utilizando o NextJS",
      link1: "https://what-if-codeboost.vercel.app",
      link2: "https://github.com/CarlosAugustoPrado/what-if-codeboost",
    },
    {
      id: 4,
      name: "Pokemon API",
      image: pokemonImage,
      description:
        "Projeto para o curso codeboost utilizando apenas HTML, CSS e JS",
      link1: "https://pokemoncodeboost-carlosaugustoprado.netlify.app",
      link2: "https://github.com/CarlosAugustoPrado/Pokemon-Codeboost",
    },
    {
      id: 5,
      name: "God of War: Ragnarök",
      image: gowImage,
      description:
        "Criação de uma landing page para o lançamento do novo God of War",
      link1: "https://god-of-war-ragnarok-bice.vercel.app",
      link2: "https://github.com/CarlosAugustoPrado/God-of-War-Ragnarok",
    },
  ]);
  const [loadedProjects, setLoadedProjects] = useState(3);
  const loadMoreProjects = () => {
    setLoadedProjects(loadedProjects + 3);
  };
  const displayedProjects = projects.slice(0, loadedProjects);

  return (
    <section className="s-projects" id="s-projects">
      <div className="container">
        <div className="titles">
          <h2>Projetos: </h2>
          <p>
            Aqui estão alguns projetos que realizei tanto profissionalmente
            quanto para cursos que fiz ao longo da minha carreira:
          </p>
        </div>
        <div className="card-container">
          {displayedProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="project-info">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <div className="project-buttons">
                <a
                  href={project.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Veja live
                </a>

                <a
                  href={project.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Veja no github
                </a>
              </div>
            </div>
          ))}
        </div>
        {loadedProjects < projects.length && (
          <button onClick={loadMoreProjects} className="btn-loadmore">
            Carregar mais
          </button>
        )}
      </div>
    </section>
  );
};

export default ProjectsArea;
