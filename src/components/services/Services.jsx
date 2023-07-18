import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id='services'>
      <h2 className="section__title">Serviços</h2>
      <span className="section__subtitle">O que posso oferecer</span>

      <div className="services__container container grid">
        {/* Product Designer */}
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Product <br /> Designer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Como Product Designer, ofereço soluções criativas e eficazes para produtos digitais, com foco nas necessidades dos usuários e objetivos do negócio.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu desenvolvo a interface do usuário.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvimento de página web.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu crio interações de elemento UX.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Posiciono a marca da sua empresa.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design e mockups de produtos para empresas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* UI / UX Designer */}
        <div className="services__content">
          <div>
            <i className="uil uil-sitemap services__icon"></i>
            <h3 className="services__title">UI / UX <br /> Designer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">UI / UX Designer</h3>
              <p className="services__modal-description">
                Como UI/UX Designer, ofereço interfaces de usuário intuitivas e agradáveis, que proporcionam uma experiência de usuário excepcional e atendem aos objetivos do negócio.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu crio wireframes e protótipos para validar conceitos de produtos.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Faço testes de usabilidade e pesquisa de mercado.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvo interfaces acessíveis e inclusivas.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Colaboro em equipes de desenvolvimento.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Melhoria continua da experiência do usuário.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Branding Designer */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Branding <br /> Designer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Branding Designer</h3>
              <p className="services__modal-description">
                Como Branding Designer, ofereço soluções criativas e visuais para produtos digitais, com foco na estética e na identidade visual da marca. Ofereço serviços de criação de layouts, criação de elementos visuais, desenvolvimento de identidade visual e design de materiais de marketing.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Criação de layouts atraentes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Criação de elementos visuais.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Desenvolvimento de identidade visual, incluindo logotipos, esquemas de cores e tipografia.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu crio o design de materiais, como banners, cartazes e folhetos, para promover a marca e seus produtos/serviços.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Colaboração com outras equipes de desenvolvimento, como UX Designers e engenheiros de software, para garantir que o design visual esteja alinhado com a experiência do usuário e os objetivos do negócio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Web Application Development */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Web Application <br /> Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(4)}>Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Web Application Development</h3>
              <p className="services__modal-description">
              Como Web Application Developer, ofereço soluções criativas e funcionais para empresas que desejam disponibilizar seus produtos e serviços na web. Ofereço serviços de desenvolvimento de front-end e back-end, criação de aplicações personalizadas, otimização de desempenho e segurança de aplicações.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu desenvolvo o front-end e back-end de sua aplicação do zero.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Criação de aplicações web personalizadas, que atendam às necessidades específicas de cada empresa e seus usuários.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Otimização de desempenho de aplicações web.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Segurança de aplicações, implementando medidas de segurança para proteger os dados dos usuários e impedir ataques maliciosos.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Colaboração com outras equipes de desenvolvimento, como designers e gerentes de produto, para garantir que a aplicação atenda às expectativas dos usuários e do negócio.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* APIs Application Development */}
        <div className="services__content">
          <div>
            <i className="uil uil-sort services__icon"></i>
            <h3 className="services__title">APIs Application <br /> Development</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(5)}>Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title"> APIs Application Development</h3>
              <p className="services__modal-description">
                Como APIs Application Developer, ofereço soluções criativas e eficazes para empresas que desejam disponibilizar seus serviços por meio de APIs. Ofereço serviços de desenvolvimento de APIs RESTful, integração de sistemas, otimização de desempenho e segurança de APIs.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvimento de APIs RESTful, utilizando tecnologias como Node.js, e Python, para disponibilizar serviços de forma segura e escalável.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Integração de sistemas, permitindo que diferentes sistemas e plataformas possam se comunicar e trocar informações por meio de APIs.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Otimização de desempenho de APIs, garantindo que a API seja rápida e responsiva, mesmo em picos de tráfego.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Segurança de APIs, implementando medidas de segurança como autenticação, autorização e criptografia de dados para proteger as informações dos usuários.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu crio documentações clara e consisa da API, facilitando a integração de novos usuários e desenvolvedores.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Automation System Development */}
        <div className="services__content">
          <div>
            <i className="uil uil-cog services__icon"></i>
            <h3 className="services__title">Process <br /> Automation</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(6)}>Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Process Automation System Development</h3>
              <p className="services__modal-description">
                Como Process Automation System Developer, ofereço soluções criativas e eficientes para empresas que desejam automatizar processos manuais e otimizar suas operações. Ofereço serviços de análise de processos, desenvolvimento de sistemas de automação, integração de sistemas e treinamento de usuários."
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Análise de processos, identificando processos manuais e ineficientes que podem ser automatizados e otimizados.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu desenvolvo sistemas de automação personalizados, utilizando tecnologias como RPA (Robotic Process Automation), chatbots, workflows, entre outras, para automatizar processos de forma segura e escalável.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Integração de sistemas de automação com outros sistemas e plataformas existentes na empresa, permitindo uma visão holística dos processos automatizados.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Treinamento de usuários, capacitando-os para utilizar os sistemas de automação e garantindo que a adoção da nova tecnologia seja efetiva.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Monitoramento e manutenção contínuos dos sistemas de automação, garantindo que eles estejam funcionando corretamente e identificando oportunidades de melhoria e otimização dos processos automatizados.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Test/QA Developer */}
        <div className="services__content">
          <div>
            <i className="uil uil-filter services__icon"></i>
            <h3 className="services__title">Test/QA <br /> Developer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(7)}>Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 7 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Test/QA Developer</h3>
              <p className="services__modal-description">
                Como Tester/QA, ofereço soluções criativas e eficazes para empresas que desejam garantir a qualidade e a confiabilidade de seus produtos de software. Ofereço serviços de testes manuais e automatizados, elaboração de planos de testes, identificação e relato de bugs, e análise de desempenho e segurança do software.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Eu realizo testes manuais e automatizados, garantindo que o software esteja funcionando corretamente e atendendo aos requisitos do usuário.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Elaboração de planos de testes, identificando os diferentes cenários de teste que devem ser realizados para garantir a qualidade do software.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Identificação e relato de bugs, reportando de forma clara e precisa os problemas encontrados no software e trabalhando com a equipe de desenvolvimento para corrigi-los.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Análise de desempenho do software, identificando gargalos e oportunidades de otimização para melhorar a velocidade e a eficiência do software.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Análise de segurança do software, identificando vulnerabilidades e ameaças potenciais e trabalhando com a equipe de desenvolvimento para implementar medidas de segurança para proteger os dados dos usuários.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Visual <br /> Designer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(8)}>Veja mais <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 8 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque perspiciatis maiores facere, dolore assumenda nulla libero dignissimos tempora autem!
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web page development.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position yout company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services