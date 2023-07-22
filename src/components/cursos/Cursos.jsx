import React, { useState } from "react";
import "./cursos.css";
import { mouseDownHandler } from '../touchpad/Touchpad';

const Cursos = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="cursos section" id='cursos'>
      <h2 className="section__title">Cursos e Certificados</h2>
      <span className="section__subtitle">Meu aprendizado</span>

      <div className="cursos__container container grid">

        {/* Desenvolvimento Web - Udemy */}
        <div className="cursos__content">
          <div className="cursos__img-1"></div>
          <div>
            <h3 className="cursos__title">Desenvolvimento Web<br /></h3>
            <p className="cursos__texto">140 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(1)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 1 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>
                <h3 className="cursos__modal-title">Desenvolvimento Web - UDEMY</h3>
                <p className="cursos__modal-description">
                  O curso de Desenvolvimento Web possui uma carga horária de 140 horas e tem como objetivo ensinar todo o processo de desenvolvimento de software web, abordando diversos tópicos fundamentais. Durante o curso, foram abordados os seguintes temas:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Fundamentos de HTML, CSS e Javascript.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Introdução ao DOM e controle de versão com Git/GitHub.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Framework Bootstrap e desenvolvimento em Typescript.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Conexão Frontend e Backend com Express e APIs HTTP.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Bancos de Dados MySQL, MariaDB e MongoDB.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Cookies, Sessões e Autenticação.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Rodar aplicações em Contêineres com Docker.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Desenvolvimento de RESTful APIs.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Gerenciamento de Estados com Redux.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Teste de Software com Jest.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Integração Contínua e Deploy com GitHub e Vercel/Netlify/Firebase.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Processo de Desenvolvimento Ágil com Jira.
                    </p>
                  </li>
                  
                </ul>
              </div>
            </div>
            
          </div>
        </div>

        {/* Desenvolvimento de Aplicações Web - IFAM*/}
        <div className="cursos__content">
          <div className="cursos__img-2"></div>
          <div>
            <h3 className="cursos__title">Desenvolvimento de Aplicações Web<br /></h3>
            <p className="cursos__texto">80 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(2)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 2 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>
              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>

              

              <h3 className="cursos__modal-title">Desenvolvimento de Aplicações Web - IFAM</h3>
              <p className="cursos__modal-description">
                Durante a minha experiência na disciplina de Desenvolvimento de Aplicações Web na faculdade de Análise de Sistemas, com duração de 80 horas, obtive conquistas significativas ao desenvolver várias habilidades relacionadas a aplicações web. Dentre as principais conquistas, estão:
              </p>

              <ul className="cursos__modal-cursos grid">
                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                    Aprendizado do desenvolvimento do frontend e backend de uma aplicação web.
                  </p>
                </li>

                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                    Desenvolvimento completo da integração entre as partes frontend e backend.
                  </p>
                </li>

                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                    Aplicação de conhecimentos para consumir APIs por meio de endpoints.
                  </p>
                </li>

                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                    Utilização das técnicas CRUD (GET, PUT, POST e DELETE) para lidar com as requisições e o tratamento da conexão com o Banco de Dados.
                  </p>
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Desenvolvimento na Prática com Spring e Testes - ARANOUÁ */}
        <div className="cursos__content">
          <div className="cursos__img-3"></div>
          <div>
            <h3 className="cursos__title">Desenvolvimento na Prática com Spring e Testes <br /></h3>
            <p className="cursos__texto">40 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(3)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 3 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>
              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>
                

                <h3 className="cursos__modal-title">Desenvolvimento na Prática com Spring e Testes - ARANOUÁ</h3>
                <p className="cursos__modal-description">
                  Durante o curso de Spring e Testes, com certificação do Projeto ARANOUÁ, do qual sou Bolsista, e duração de 40 horas, tive a oportunidade de aprender sobre o desenvolvimento backend e a realização de testes em aplicações Java. Algumas das principais áreas abordadas foram:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Desenvolvimento em Java usando IntelliJ IDEA com Sring Boot.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Enfoque em Testes utilizando o JUnit: unitários e de integração.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Otimização de desempenho de aplicações web.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Manipulação de requisições HTTP com métodos CRUD no Banco de Dados JPA e uso do Postman.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* UI/UX Interface Homem Máquina  - IFAM */}
        <div className="cursos__content">
          <div className="cursos__img-2"></div>
          <div>
            <h3 className="cursos__title">UI/UX Interface Homem Máquina</h3>
            <p className="cursos__texto">60 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(4)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 4 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>
              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>

                <h3 className="cursos__modal-title"> UI/UX Interface Homem Máquina  - IFAM</h3>
                <p className="cursos__modal-description">
                  Durante a disciplina de Interface de Homem Máquina do curso de Análise de Sistemas, que possui a duração de 60 horas, aprendi sobre os seguintes tópicos relacionados ao design de interfaces e experiência do usuário:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Conceitos de interface e design centrado no usuário.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Princípios de design de interfaces gráficas e interação.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Design responsivo e prototipagem.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Programação Orientada a Objetos - IFAM */}
        <div className="cursos__content">
          <div className="cursos__img-2"></div>
          <div>
            <h3 className="cursos__title">Programação Orientada a Objetos</h3>
            <p className="cursos__texto">80 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(5)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 5 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>

                <h3 className="cursos__modal-title">Programação Orientada a Objetos - IFAM</h3>
                <p className="cursos__modal-description">
                  No curso de Programação Orientada a Objetos em Java do Instituto Federal de Educação, Ciência e Tecnologia, no curso de Tecnologia em Análise e Desenvolvimento de Sistemas, com duração de 80 horas, aprendi sobre:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Conceitos fundamentais de POO, classes, objetos, herança, polimorfismo, encapsulamento e abstração.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Utilização da linguagem Java para implementação de sistemas orientados a objetos.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Design e arquitetura de software utilizando POO e padrões de projeto.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Manipulação de coleções, exceções e interfaces gráficas em Java.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Integração com bancos de dados através de JDBC.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Boas práticas de programação e segurança.
                    </p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Versionamento de Cód. com Git e GitHub */}
        <div className="cursos__content">
          <div className="cursos__img-4"></div>
          <div>
            <h3 className="cursos__title">Versionamento de Código com Git e GitHub</h3>
            <p className="cursos__texto">5 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(6)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>
          
          
          <div className={toggleState === 6 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>
                <h3 className="cursos__modal-title">Versionamento de Código com Git e GitHub - DIO</h3>
                <p className="cursos__modal-description">
                  No curso introdutório de Versionamento de Código com Git e GitHub da Digital Innovation One (DIO), com duração de 5 horas, aprendi:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Introdução ao Git, um sistema de controle de versão amplamente utilizado no desenvolvimento de software.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Comandos básicos do Git, como inicialização de repositórios, criação de branches, commit, merge e histórico de alterações.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Utilização do GitHub, plataforma de hospedagem de código-fonte baseada em Git, para colaboração em projetos e compartilhamento de código.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Criação e gerenciamento de repositórios no GitHub.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Realização de pull requests e revisão de código.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Trabalho em equipe com Git e GitHub, permitindo a colaboração eficiente de múltiplos desenvolvedores em projetos.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>

          </div>
        </div>

        {/* Metodologias Ágeis com SCRUM, KABAN e XP */}
        <div className="cursos__content">
          <div className="cursos__img-2"></div>
          <div>
            <h3 className="cursos__title">Metodologias Ágeis com SCRUM, KABAN e XP</h3>
            <p className="cursos__texto">60 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(7)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 7 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>
                <h3 className="cursos__modal-title">Metodologias Ágeis com SCRUM, KABAN e XP - IFAM</h3>
                <p className="cursos__modal-description">
                  No curso de Análise de Sistemas realizado no Instituto Federal do Amazonas (IFAM), com duração de 60 horas, adquiri conhecimentos fundamentais na área de análise e desenvolvimento de sistemas. Algumas das principais áreas abordadas no curso foram:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Fundamentos de Análise de Sistemas e Modelagem de Dados.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Desenvolvimento de Diagramas de Casos de Uso e Sequência.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Arquitetura de Software e Desenvolvimento Ágil com Scrum.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Noções de Gerenciamento de Projetos.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>

          </div>
        </div>

        {/* Banco de Dados SQL e NOSQL (MySQL, MariaDB, MongoDB) */}
        <div className="cursos__content">
          <div className="cursos__img-2"></div>
          <div>
            <h3 className="cursos__title">Banco de Dados SQL e NOSQL (MySQL, MariaDB, MongoDB)</h3>
            <p className="cursos__texto">80 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(8)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 8 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>

                <h3 className="cursos__modal-title">Banco de Dados SQL e NOSQL (MySQL, MariaDB, MongoDB) - IFAM</h3>
                <p className="cursos__modal-description">
                  No curso de Banco de Dados SQL e NoSQL, com duração de 80 horas, realizado no Instituto Federal do Amazonas (IFAM) no curso de Tecnologia em Análise e Desenvolvimento de Sistemas, aprendi sobre:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Utilização dos gerenciadores de banco de dados HeidiSQL, MySQL, Oracle e MariaDB.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Fundamentos do SQL e manipulação de tabelas, consultas e comandos no HeidiSQL.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Exploração do Oracle e suas funcionalidades em aplicações empresariais.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Conhecimento sobre o MariaDB como alternativa ao MySQL.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Modelagem de Banco de Dados Relacionais.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Consultas SQL para recuperação e manipulação de dados.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Introdução aos bancos de dados NoSQL.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Criação de Procedures em SQL para execução de tarefas específicas no banco de dados.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Automação da criação de Procedures com Triggers para responder a eventos e ações específicas no banco de dados.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>

          </div>
        </div>

        {/* Fundamentos em Testes de Software */}
        <div className="cursos__content">
          <div className="cursos__img-3"></div>
          <div>
            <h3 className="cursos__title">Fundamentos em Testes de Software (Selenium e Jest)</h3>
            <p className="cursos__texto">40 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(9)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 9 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>

                <h3 className="cursos__modal-title">Fundamentos em Testes de Software (Selenium e Jest) - ARANOUÁ</h3>
                <p className="cursos__modal-description">
                  No curso Fundamentos em Testes de Software, com duração de 40 horas, oferecido pelo Projeto Aranouá, do qual sou Bolsista, tive a oportunidade de aprofundar meus conhecimentos na área de testes de software. Algumas das principais áreas abordadas no curso foram:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Introdução aos conceitos fundamentais de testes de software e sua importância no ciclo de desenvolvimento.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Tipos de testes, incluindo testes unitários, testes de integração, testes funcionais e testes de aceitação.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Metodologias de teste, como testes ágeis e testes exploratórios.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Estratégias para elaboração de casos de teste eficientes e abrangentes.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Uso de ferramentas de automação de testes para agilizar o processo de testagem.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Análise e relatórios de resultados de testes, bem como o gerenciamento de defeitos.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Introdução as ferramenta Selenium e Jest para automatização de Testes.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>

          </div>
        </div>

        {/* OPEN CG (Tecnologias Adobe) */}
        <div className="cursos__content">
          <div className="cursos__img-5"></div>
          <div>
            <h3 className="cursos__title">OPEN CG (Tecnologias Adobe)</h3>
            <p className="cursos__texto">384 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(10)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 10 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>

                <h3 className="cursos__modal-title">OPEN CG (Tecnologias Adobe) - GRACOM</h3>
                <p className="cursos__modal-description">
                  No curso de OPEN CG (Tecnologias Adobe) realizado na GRACOM, com duração de 384 horas, tive a oportunidade de aprofundar meus conhecimentos nas tecnologias da Adobe, abrangendo uma ampla gama de ferramentas e aplicações para design e produção de conteúdo digital. Algumas das principais tecnologias e áreas abordadas no curso foram:
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Adobe Photoshop: edição e manipulação de imagens.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Adobe Illustrator: criação de ilustrações vetoriais.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Adobe InDesign: design de layouts para impressão.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Adobe Premiere Pro: edição de vídeos.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Adobe After Effects: criação de animações e efeitos visuais.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Adobe XD: prototipação e design de interfaces.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>

          </div>
        </div>

        {/* Machine Learning com Python */}
        <div className="cursos__content">
          <div className="cursos__img-3"></div>
          <div>
            <h3 className="cursos__title">Machine Learning com Python</h3>
            <p className="cursos__texto">40 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(11)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 11 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>

                <h3 className="cursos__modal-title">Machine Learning com Python - ARANOUÁ</h3>
                <p className="cursos__modal-description">
                  No curso de Machine Learning com Python oferecido pelo Projeto ARANOUÁ, do qual sou Bolsista, tive a oportunidade de mergulhar no fascinante mundo do aprendizado de máquina utilizando a linguagem de programação Python. Com duração de 40 horas, o curso abrangeu os principais conceitos e técnicas de machine learning, permitindo-me aplicá-los em projetos práticos.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Introdução ao Aprendizado de Máquina: Compreensão dos fundamentos e conceitos básicos do aprendizado de máquina.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Bibliotecas e Frameworks em Python: Utilização de bibliotecas populares como Scikit-learn e TensorFlow para implementar algoritmos de machine learning.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Pré-processamento de Dados: Aprendizado de técnicas para preparar e limpar os dados antes da construção dos modelos.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Modelagem e Treinamento de Modelos: Desenvolvimento e treinamento de modelos de machine learning para resolver problemas específicos.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Avaliação e Métricas: Análise e avaliação da performance dos modelos utilizando métricas adequadas.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Aplicações Práticas: Realização de projetos práticos que envolveram a aplicação de algoritmos de machine learning em cenários reais.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>

          </div>
        </div>

        {/* Ethical Hacking */}
        <div className="cursos__content">
          <div className="cursos__img-3"></div>
          <div>
            <h3 className="cursos__title">Ethical Hacking (Docker)</h3>
            <p className="cursos__texto">40 horas</p>
          </div>

          <span className="cursos__button" onClick={() => toggleTab(12)}>Veja mais <i className="uil uil-arrow-right cursos__button-icon"></i></span>

          <div className={toggleState === 12 ? "cursos__modal active-modal" : "cursos__modal"}>
            <div className="cursos__modal-content-dad">
              <i onClick={() => toggleTab(0)} className="uil uil-times cursos__modal-close"></i>

              <div className="cursos__modal-content"  onMouseDown={(e) => mouseDownHandler(e.currentTarget, e)}>

                <h3 className="cursos__modal-title">Ethical Hacking (Docker) - ARANOUÁ</h3>
                <p className="cursos__modal-description">
                  No curso de Ethical Hacking oferecido pelo Projeto ARANOUÁ, do qual sou Bolsista, tive a oportunidade de adentrar o mundo do Hacking Ético e compreender as técnicas utilizadas para identificar vulnerabilidades em sistemas de forma ética e com propósitos educativos. O curso teve a duração de 40 horas e proporcionou um ambiente seguro para aplicação prática dos conhecimentos.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Introdução ao Ethical Hacking: Compreensão dos princípios éticos e legais envolvidos no Hacking Ético.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Identificação de Vulnerabilidades: Aprendizado das principais técnicas e ferramentas utilizadas para identificar vulnerabilidades em sistemas.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Exploração e Teste de Segurança: Prática das técnicas de exploração de vulnerabilidades e avaliação da segurança de sistemas.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Uso Responsável de Técnicas de Hacking: Enfoque no uso responsável das técnicas de Hacking para fins educativos e de conscientização.
                    </p>
                  </li>
                </ul>
              </div>
              
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Cursos