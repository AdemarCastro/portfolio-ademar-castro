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
                <h3 className="cursos__modal-title">UI / UX Designer</h3>
                <p className="cursos__modal-description">
                  Como UI/UX Designer, ofereço interfaces de usuário intuitivas e agradáveis, que proporcionam uma experiência de usuário excepcional e atendem aos objetivos do negócio.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu crio wireframes e protótipos para validar conceitos de produtos.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Faço testes de usabilidade e pesquisa de mercado.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Desenvolvo interfaces acessíveis e inclusivas.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Colaboro em equipes de desenvolvimento.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Melhoria continua da experiência do usuário.
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

              

              <h3 className="cursos__modal-title">Branding Designer</h3>
              <p className="cursos__modal-description">
                Como Branding Designer, ofereço soluções criativas e visuais para produtos digitais, com foco na estética e na identidade visual da marca. Ofereço serviços de criação de layouts, criação de elementos visuais, desenvolvimento de identidade visual e design de materiais de marketing.
              </p>

              <ul className="cursos__modal-cursos grid">
                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                    Criação de layouts atraentes.
                  </p>
                </li>

                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                    Criação de elementos visuais.
                  </p>
                </li>

                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                  Desenvolvimento de identidade visual, incluindo logotipos, esquemas de cores e tipografia.
                  </p>
                </li>

                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                    Eu crio o design de materiais, como banners, cartazes e folhetos, para promover a marca e seus produtos/serviços.
                  </p>
                </li>

                <li className="cursos__modal-service">
                  <i className="uil uil-check-circle cursos__modal-icon"></i>
                  <p className="cursos__modal-info">
                    Colaboração com outras equipes de desenvolvimento, como UX Designers e engenheiros de software, para garantir que o design visual esteja alinhado com a experiência do usuário e os objetivos do negócio.
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
                

                <h3 className="cursos__modal-title">Web Application Development</h3>
                <p className="cursos__modal-description">
                Como Web Application Developer, ofereço soluções criativas e funcionais para empresas que desejam disponibilizar seus produtos e serviços na web. Ofereço serviços de desenvolvimento de front-end e back-end, criação de aplicações personalizadas, otimização de desempenho e segurança de aplicações.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu desenvolvo o front-end e back-end de sua aplicação do zero.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Criação de aplicações web personalizadas, que atendam às necessidades específicas de cada empresa e seus usuários.
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
                      Segurança de aplicações, implementando medidas de segurança para proteger os dados dos usuários e impedir ataques maliciosos.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Colaboração com outras equipes de desenvolvimento, como designers e gerentes de produto, para garantir que a aplicação atenda às expectativas dos usuários e do negócio.
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

                <h3 className="cursos__modal-title"> APIs Application Development</h3>
                <p className="cursos__modal-description">
                  Como APIs Application Developer, ofereço soluções criativas e eficazes para empresas que desejam disponibilizar seus serviços por meio de APIs. Ofereço serviços de desenvolvimento de APIs RESTful, integração de sistemas, otimização de desempenho e segurança de APIs.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Desenvolvimento de APIs RESTful, utilizando tecnologias como Node.js, e Python, para disponibilizar serviços de forma segura e escalável.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Integração de sistemas, permitindo que diferentes sistemas e plataformas possam se comunicar e trocar informações por meio de APIs.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Otimização de desempenho de APIs, garantindo que a API seja rápida e responsiva, mesmo em picos de tráfego.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Segurança de APIs, implementando medidas de segurança como autenticação, autorização e criptografia de dados para proteger as informações dos usuários.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu crio documentações clara e consisa da API, facilitando a integração de novos usuários e desenvolvedores.
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

                <h3 className="cursos__modal-title">DBA</h3>
                <p className="cursos__modal-description">
                  Como Database Administrator, ofereço soluções criativas e eficientes para empresas que desejam gerenciar e proteger seus dados de forma segura e escalável. Ofereço serviços de gerenciamento de bancos de dados, otimização de desempenho, segurança de dados, backup e recuperação de dados, e implementação de novas tecnologias de banco de dados.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Gerenciamento de bancos de dados, incluindo a instalação, configuração e manutenção de bancos de dados relacionais e não relacionais.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Otimização de desempenho, garantindo que os bancos de dados estejam funcionando de forma eficiente e que as consultas e operações sejam executadas rapidamente.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Segurança de dados, implementando medidas de segurança como autenticação, autorização e criptografia de dados para proteger as informações dos usuários.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Backup e recuperação de dados, garantindo que os dados estejam sempre disponíveis e que possam ser recuperados em caso de perda de dados ou falha no sistema.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Implementação de novas tecnologias de banco de dados, acompanhando as tendências do mercado e avaliando novas tecnologias e ferramentas para melhorar a eficiência e a segurança dos bancos de dados.
                    </p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* PVersionamento de Cód. com Git e GitHub */}
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
                <h3 className="cursos__modal-title">Process Automation System Development</h3>
                <p className="cursos__modal-description">
                  Como Process Automation System Developer, ofereço soluções criativas e eficientes para empresas que desejam automatizar processos manuais e otimizar suas operações. Ofereço serviços de análise de processos, desenvolvimento de sistemas de automação, integração de sistemas e treinamento de usuários."
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Análise de processos, identificando processos manuais e ineficientes que podem ser automatizados e otimizados.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu desenvolvo sistemas de automação personalizados, utilizando tecnologias como RPA (Robotic Process Automation), chatbots, workflows, entre outras, para automatizar processos de forma segura e escalável.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Integração de sistemas de automação com outros sistemas e plataformas existentes na empresa, permitindo uma visão holística dos processos automatizados.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Treinamento de usuários, capacitando-os para utilizar os sistemas de automação e garantindo que a adoção da nova tecnologia seja efetiva.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                    Monitoramento e manutenção contínuos dos sistemas de automação, garantindo que eles estejam funcionando corretamente e identificando oportunidades de melhoria e otimização dos processos automatizados.
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
                <h3 className="cursos__modal-title">Test/QA Developer</h3>
                <p className="cursos__modal-description">
                  Como Tester/QA, ofereço soluções criativas e eficazes para empresas que desejam garantir a qualidade e a confiabilidade de seus produtos de software. Ofereço serviços de testes manuais e automatizados, elaboração de planos de testes, identificação e relato de bugs, e análise de desempenho e segurança do software.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu realizo testes manuais e automatizados, garantindo que o software esteja funcionando corretamente e atendendo aos requisitos do usuário.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Elaboração de planos de testes, identificando os diferentes cenários de teste que devem ser realizados para garantir a qualidade do software.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Identificação e relato de bugs, reportando de forma clara e precisa os problemas encontrados no software e trabalhando com a equipe de desenvolvimento para corrigi-los.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Análise de desempenho do software, identificando gargalos e oportunidades de otimização para melhorar a velocidade e a eficiência do software.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Análise de segurança do software, identificando vulnerabilidades e ameaças potenciais e trabalhando com a equipe de desenvolvimento para implementar medidas de segurança para proteger os dados dos usuários.
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

                <h3 className="cursos__modal-title">Machine Learning and BI Developer</h3>
                <p className="cursos__modal-description">
                  Como desenvolvedor de Business Intelligence e Machine Learning, ofereço soluções criativas e inteligentes para empresas que desejam extrair insights valiosos de seus dados e melhorar a tomada de decisões. Ofereço serviços de desenvolvimento de modelos de Machine Learning, criação de dashboards, análise de dados, implementação de pipelines de dados e visualização de dados.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu posso desenvolver modelos de Machine Learning personalizados, utilizando algoritmos como regressão, classificação, clusterização, entre outros, para extrair insights valiosos dos dados da empresa.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Faço a criação de dashboards personalizados, permitindo que os usuários visualizem e interajam com os dados de forma intuitiva e eficiente.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Realizo a análise de dados, identificando padrões e tendências nos dados da empresa e fornecendo insights valiosos para a tomada de decisões.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Implementação de pipelines de dados, permitindo que os dados sejam coletados, processados e armazenados de forma eficiente e segura.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Visualização de dados, utilizando técnicas de visualização de dados para tornar os insights obtidos a partir dos dados mais claros e compreensíveis.
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

                <h3 className="cursos__modal-title">Machine Learning and BI Developer</h3>
                <p className="cursos__modal-description">
                  Como desenvolvedor de Business Intelligence e Machine Learning, ofereço soluções criativas e inteligentes para empresas que desejam extrair insights valiosos de seus dados e melhorar a tomada de decisões. Ofereço serviços de desenvolvimento de modelos de Machine Learning, criação de dashboards, análise de dados, implementação de pipelines de dados e visualização de dados.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu posso desenvolver modelos de Machine Learning personalizados, utilizando algoritmos como regressão, classificação, clusterização, entre outros, para extrair insights valiosos dos dados da empresa.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Faço a criação de dashboards personalizados, permitindo que os usuários visualizem e interajam com os dados de forma intuitiva e eficiente.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Realizo a análise de dados, identificando padrões e tendências nos dados da empresa e fornecendo insights valiosos para a tomada de decisões.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Implementação de pipelines de dados, permitindo que os dados sejam coletados, processados e armazenados de forma eficiente e segura.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Visualização de dados, utilizando técnicas de visualização de dados para tornar os insights obtidos a partir dos dados mais claros e compreensíveis.
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

                <h3 className="cursos__modal-title">Machine Learning and BI Developer</h3>
                <p className="cursos__modal-description">
                  Como desenvolvedor de Business Intelligence e Machine Learning, ofereço soluções criativas e inteligentes para empresas que desejam extrair insights valiosos de seus dados e melhorar a tomada de decisões. Ofereço serviços de desenvolvimento de modelos de Machine Learning, criação de dashboards, análise de dados, implementação de pipelines de dados e visualização de dados.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu posso desenvolver modelos de Machine Learning personalizados, utilizando algoritmos como regressão, classificação, clusterização, entre outros, para extrair insights valiosos dos dados da empresa.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Faço a criação de dashboards personalizados, permitindo que os usuários visualizem e interajam com os dados de forma intuitiva e eficiente.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Realizo a análise de dados, identificando padrões e tendências nos dados da empresa e fornecendo insights valiosos para a tomada de decisões.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Implementação de pipelines de dados, permitindo que os dados sejam coletados, processados e armazenados de forma eficiente e segura.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Visualização de dados, utilizando técnicas de visualização de dados para tornar os insights obtidos a partir dos dados mais claros e compreensíveis.
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

                <h3 className="cursos__modal-title">Machine Learning and BI Developer</h3>
                <p className="cursos__modal-description">
                  Como desenvolvedor de Business Intelligence e Machine Learning, ofereço soluções criativas e inteligentes para empresas que desejam extrair insights valiosos de seus dados e melhorar a tomada de decisões. Ofereço serviços de desenvolvimento de modelos de Machine Learning, criação de dashboards, análise de dados, implementação de pipelines de dados e visualização de dados.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu posso desenvolver modelos de Machine Learning personalizados, utilizando algoritmos como regressão, classificação, clusterização, entre outros, para extrair insights valiosos dos dados da empresa.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Faço a criação de dashboards personalizados, permitindo que os usuários visualizem e interajam com os dados de forma intuitiva e eficiente.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Realizo a análise de dados, identificando padrões e tendências nos dados da empresa e fornecendo insights valiosos para a tomada de decisões.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Implementação de pipelines de dados, permitindo que os dados sejam coletados, processados e armazenados de forma eficiente e segura.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Visualização de dados, utilizando técnicas de visualização de dados para tornar os insights obtidos a partir dos dados mais claros e compreensíveis.
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

                <h3 className="cursos__modal-title">Machine Learning and BI Developer</h3>
                <p className="cursos__modal-description">
                  Como desenvolvedor de Business Intelligence e Machine Learning, ofereço soluções criativas e inteligentes para empresas que desejam extrair insights valiosos de seus dados e melhorar a tomada de decisões. Ofereço serviços de desenvolvimento de modelos de Machine Learning, criação de dashboards, análise de dados, implementação de pipelines de dados e visualização de dados.
                </p>

                <ul className="cursos__modal-cursos grid">
                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Eu posso desenvolver modelos de Machine Learning personalizados, utilizando algoritmos como regressão, classificação, clusterização, entre outros, para extrair insights valiosos dos dados da empresa.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Faço a criação de dashboards personalizados, permitindo que os usuários visualizem e interajam com os dados de forma intuitiva e eficiente.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Realizo a análise de dados, identificando padrões e tendências nos dados da empresa e fornecendo insights valiosos para a tomada de decisões.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Implementação de pipelines de dados, permitindo que os dados sejam coletados, processados e armazenados de forma eficiente e segura.
                    </p>
                  </li>

                  <li className="cursos__modal-service">
                    <i className="uil uil-check-circle cursos__modal-icon"></i>
                    <p className="cursos__modal-info">
                      Visualização de dados, utilizando técnicas de visualização de dados para tornar os insights obtidos a partir dos dados mais claros e compreensíveis.
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