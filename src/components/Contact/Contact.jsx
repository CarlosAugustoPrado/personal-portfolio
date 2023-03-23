import React from "react";

import "./Contact.scss";

import mail from "./ContactImages/mail.svg";
import github from "./ContactImages/github.svg";
import linkedin from "./ContactImages/linkedin.svg";

const Contact = () => {
  return (
    <>
      <section className="black-tiles"></section>
      <section className="s-contact" id="s-contact">
        <div className="container">
          <div className="titles">
            <h2>
              Entre em <strong>contato</strong>
            </h2>
            <span>para podermos conversar melhor sobre seu projeto</span>
          </div>
          <div className="icons">
            <ul>
              <li>
                <a href="" target="_blank">
                  <img src={mail} alt="" />
                  <span>devcarlosaugustoprado@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/CarlosAugustoPrado" target="_blank">
                  <img src={github} alt="Ícone do github" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/carlosaugustoprado/"
                  target="_blank"
                >
                  <img src={linkedin} alt="Ícone do Linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
