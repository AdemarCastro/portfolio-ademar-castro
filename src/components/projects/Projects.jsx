import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section className="projects section" id='portfolio'>
      <h2 className="section__title">Portfólio</h2>
      <span className="section__subtitle">Dê uma olhada no meu trabalho</span>

      <div className='projects__container container grid'>
        {/* Spotify Clone */}
        <div className="project__content">
          {/* Esse content da imagem deve preencher a metade esquerda */}
          <div className="content__img"></div>

          <div className='content__descricao'>
            <h3 className="project__title">Spotify Clone<br /></h3>
            <p className="project__text">
              O projeto é uma réplica do Spotify, desenvolvido utilizando Angular, HTML, CSS (SCSS), Express, Node.js, MariaDB e Firebase. A aplicação integra-se à API do Spotify, permitindo acessar músicas, playlists e artistas populares, além de permitir pesquisas e troca de músicas com o Spotify aberto. O objetivo final é possibilitar a audição de músicas diretamente no website e aprimorar o design para se assemelhar ainda mais ao Spotify. Por ser um projeto amplo e desenvolvido individualmente, a conclusão pode demandar algum tempo.
            </p>

            {/* Icones SVG */}
            <div className="project__tecnologias">
              {/* Icon Angular */}
              <a href="https://angular.io/" title="Angular" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="64" cy="64" r="50" style={{ fill: '#DD1B16' }} />
                  <polygon points="90.8,88.5 64,31.5 64,49.8 72.3,68 64,68 64,75.5 75.8,75.5 81.7,88.5" style={{ fill: '#B3B3B3' }} />
                  <polygon points="37.2,88.5 64,31.5 64,49.8 55.7,68 64,68 64,75.5 52.2,75.5 46.3,88.5" style={{ fill: '#F2F2F2' }} />
                </svg>
              </a>

              {/* HTML */}
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" title="HTML" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle cx="64" cy="64" r="50" style={{ fill: '#F0652A' }} />
                    <path d="M40.2,39l4.3,48.5L63.9,93l19.5-5.5L87.8,39H40.2z M78.4,54.8H55.6l0.5,6.1h21.7l-1.7,18.4L64,82.6h-0.1l-12.2-3.4L51,69.9h5.9l0.4,4.7l6.6,1.8l6.6-1.8l0.7-7.7H50.7l-1.6-18h29.8L78.4,54.8z" style={{ fill: '#FFFFFF' }} />
                  </g>
                </svg>
              </a>

              {/* CSS */}
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" title="CSS" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem'}}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle cx="64" cy="64" r="50" style={{ fill: '#33A9DC' }} />
                  </g>
                  <path
                    d="M90,42l-8,40l-24.1,8L37,82l2.1-10.7H48l-0.9,4.4l12.7,4.8l14.6-4.8l2-10.2H40.2l1.7-8.9h36.3   l1.1-5.7H43.1l1.8-8.9C44.9,42,90,42,90,42z"
                    style={{ fill: '#FFFFFF' }}
                  />
                </svg>
              </a>


              {/* SASS */}
              <a href="https://sass-lang.com/" title="SASS" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="64" cy="64" r="50" style={{ fill: '#CC6699' }} />
                  <path
                    d="M90.9,41.8c-0.6-2.4-2.3-4.4-4.9-5.8c-5.1-2.7-13.3-2.8-20.8-0.1c-4.5,1.6-13,5.2-19.4,11.1  c-6.4,6-7.4,11.3-6.9,13.4c1.1,5.8,7.2,9.9,12,13.3c1.3,0.9,2.5,1.7,3.4,2.5c-2.7,1.4-10,5.5-12,9.8c-1.5,3.4-0.8,5.9-0.2,7  c0.6,1.3,1.6,2.3,2.6,2.6c1,0.3,2.1,0.4,3.2,0.4c4.3,0,8.5-2.3,11.1-6.2c2.6-3.9,2.8-9.1,1.6-12.3c1.7-0.4,3.5-0.4,5.5-0.2  c3.9,0.5,5.8,2,6.7,3.2c1,1.3,1.2,2.6,1.1,3.4c-0.2,1.5-1.4,2.4-2,2.8c-0.5,0.3-0.9,0.6-0.8,1.2c0.2,0.8,1,0.7,1.3,0.7  c0.9-0.2,4.1-1.8,4.3-5.4c0.1-2.2-0.8-4.4-2.5-6.2c-2.2-2.3-5.5-3.5-9.3-3.4c-2.8,0-4.7,0.3-6.2,0.8c0,0-0.1-0.1-0.1-0.1  c-1.4-1.5-3.3-2.9-5-4.3c-4-3-7.7-5.9-7.5-10.2c0.3-5.4,5.6-10.7,15.9-15.8c9.1-4.5,16.5-4.7,20.4-3.3c1.6,0.6,2.7,1.4,3.1,2.3  c0.8,1.7,0.5,3.9-0.9,6.3c-2.3,4-8.1,9-17,10c-5.4,0.6-7.7-1.8-7.8-1.9c-0.6-0.7-1-1.1-1.7-0.7c-0.8,0.4-0.4,1.5-0.2,1.9  c0.4,1.1,2.1,3,5,4c2.3,0.8,8.2,1.3,15.5-1.5C86.8,57.7,92.6,48.7,90.9,41.8z M56.4,84.4c-0.1,0.2-0.1,0.4-0.2,0.6  c-0.1,0.2-0.2,0.4-0.2,0.6c-0.4,0.9-1,1.8-1.8,2.6c-2.3,2.5-5.4,3.2-6.4,2.6c-0.3-0.2-0.4-0.5-0.5-0.9c-0.2-1.2,0.5-3.6,2.6-5.7  c2.5-2.6,6-4.5,6.8-4.9C57,81.1,56.9,82.8,56.4,84.4z"
                    style={{ fill: '#FFFFFF' }}
                  />
                </svg>
              </a>

              {/* Node.js */}
              <a href="https://nodejs.org/en" title="Node Js" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path style={{ fill: '#46483E' }} d="M64,14c-27.6,0-50,22.4-50,50s22.4,50,50,50s50-22.4,50-50S91.6,14,64,14z" />
                  <g>
                    <path style={{ fill: '#81CF08' }} d="M64,95.9c-0.9,0-1.7-0.2-2.5-0.7l-7.8-4.6c-1.2-0.7-0.6-0.9-0.2-1c1.6-0.6,1.9-0.7,3.5-1.6   c0.2-0.1,0.4-0.1,0.6,0.1l6,3.6c0.2,0.1,0.5,0.1,0.7,0l23.4-13.5c0.2-0.1,0.4-0.4,0.4-0.6v-27c0-0.3-0.1-0.5-0.4-0.6L64.4,36.4   c-0.2-0.1-0.5-0.1-0.7,0L40.3,49.8c-0.2,0.1-0.4,0.4-0.4,0.6v27c0,0.2,0.1,0.5,0.4,0.6l6.4,3.7c3.5,1.7,5.6-0.3,5.6-2.4V52.8   c0-0.4,0.3-0.7,0.7-0.7h3c0.4,0,0.7,0.3,0.7,0.7v26.6c0,4.7-2.5,7.3-6.9,7.3c-1.4,0-2.4,0-5.4-1.5l-6.1-3.5   c-1.5-0.9-2.5-2.5-2.5-4.3v-27c0-1.7,0.9-3.4,2.5-4.3l23.4-13.5c1.5-0.8,3.5-0.8,4.9,0l23.4,13.5c1.5,0.9,2.5,2.5,2.5,4.3v27   c0,1.7-0.9,3.4-2.5,4.3L66.5,95.3C65.7,95.7,64.9,95.9,64,95.9z" />
                    <path style={{ fill: '#81CF08' }} d="M71.3,77.3c-10.2,0-12.4-4.7-12.4-8.6c0-0.4,0.3-0.7,0.7-0.7h3c0.3,0,0.6,0.2,0.7,0.6c0.4,3.1,1.8,4.6,8,4.6   c4.9,0,7-1.1,7-3.7c0-1.5-0.6-2.6-8.3-3.4c-6.4-0.6-10.4-2-10.4-7.2c0-4.7,4-7.5,10.7-7.5c7.5,0,11.2,2.6,11.7,8.2   c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2h-3c-0.3,0-0.6-0.2-0.7-0.5c-0.7-3.2-2.5-4.3-7.3-4.3c-5.4,0-6,1.9-6,3.3   c0,1.7,0.7,2.2,8,3.2c7.2,0.9,10.6,2.3,10.6,7.3C82.9,74.4,78.7,77.3,71.3,77.3z" />
                  </g>
                </svg>
              </a>

            </div>

            <div className="project__link">
              <button className="button button__flex">
                <a href="https://deploy-spotify-clone.web.app/" target='__blank'>Veja o Deploy</a>
              </button>

              <button className="button button__flex">
                <a href="https://github.com/AdemarCastro/angular-clone-spotify/" target='__blank'>Veja o Repositório</a>
              </button>
            </div>

          </div>
        </div>

        {/* Spotify Clone */}
        <div className="project__content">
          {/* Esse content da imagem deve preencher a metade esquerda */}
          <div className="content__img"></div>

          <div className='content__descricao'>
            <h3 className="project__title">Spotify Clone<br /></h3>
            <p className="project__text">
              O projeto é uma réplica do Spotify, desenvolvido utilizando Angular, HTML, CSS (SCSS), Express, Node.js, MariaDB e Firebase. A aplicação integra-se à API do Spotify, permitindo acessar músicas, playlists e artistas populares, além de permitir pesquisas e troca de músicas com o Spotify aberto. O objetivo final é possibilitar a audição de músicas diretamente no website e aprimorar o design para se assemelhar ainda mais ao Spotify. Por ser um projeto amplo e desenvolvido individualmente, a conclusão pode demandar algum tempo.
            </p>

            {/* Icones SVG */}
            <div className="project__tecnologias">
              {/* Icon Angular */}
              <a href="https://angular.io/" title="Angular" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="64" cy="64" r="50" style={{ fill: '#DD1B16' }} />
                  <polygon points="90.8,88.5 64,31.5 64,49.8 72.3,68 64,68 64,75.5 75.8,75.5 81.7,88.5" style={{ fill: '#B3B3B3' }} />
                  <polygon points="37.2,88.5 64,31.5 64,49.8 55.7,68 64,68 64,75.5 52.2,75.5 46.3,88.5" style={{ fill: '#F2F2F2' }} />
                </svg>
              </a>

              {/* HTML */}
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" title="HTML" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle cx="64" cy="64" r="50" style={{ fill: '#F0652A' }} />
                    <path d="M40.2,39l4.3,48.5L63.9,93l19.5-5.5L87.8,39H40.2z M78.4,54.8H55.6l0.5,6.1h21.7l-1.7,18.4L64,82.6h-0.1l-12.2-3.4L51,69.9h5.9l0.4,4.7l6.6,1.8l6.6-1.8l0.7-7.7H50.7l-1.6-18h29.8L78.4,54.8z" style={{ fill: '#FFFFFF' }} />
                  </g>
                </svg>
              </a>

              {/* CSS */}
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" title="CSS" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem'}}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle cx="64" cy="64" r="50" style={{ fill: '#33A9DC' }} />
                  </g>
                  <path
                    d="M90,42l-8,40l-24.1,8L37,82l2.1-10.7H48l-0.9,4.4l12.7,4.8l14.6-4.8l2-10.2H40.2l1.7-8.9h36.3   l1.1-5.7H43.1l1.8-8.9C44.9,42,90,42,90,42z"
                    style={{ fill: '#FFFFFF' }}
                  />
                </svg>
              </a>


              {/* SASS */}
              <a href="https://sass-lang.com/" title="SASS" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="64" cy="64" r="50" style={{ fill: '#CC6699' }} />
                  <path
                    d="M90.9,41.8c-0.6-2.4-2.3-4.4-4.9-5.8c-5.1-2.7-13.3-2.8-20.8-0.1c-4.5,1.6-13,5.2-19.4,11.1  c-6.4,6-7.4,11.3-6.9,13.4c1.1,5.8,7.2,9.9,12,13.3c1.3,0.9,2.5,1.7,3.4,2.5c-2.7,1.4-10,5.5-12,9.8c-1.5,3.4-0.8,5.9-0.2,7  c0.6,1.3,1.6,2.3,2.6,2.6c1,0.3,2.1,0.4,3.2,0.4c4.3,0,8.5-2.3,11.1-6.2c2.6-3.9,2.8-9.1,1.6-12.3c1.7-0.4,3.5-0.4,5.5-0.2  c3.9,0.5,5.8,2,6.7,3.2c1,1.3,1.2,2.6,1.1,3.4c-0.2,1.5-1.4,2.4-2,2.8c-0.5,0.3-0.9,0.6-0.8,1.2c0.2,0.8,1,0.7,1.3,0.7  c0.9-0.2,4.1-1.8,4.3-5.4c0.1-2.2-0.8-4.4-2.5-6.2c-2.2-2.3-5.5-3.5-9.3-3.4c-2.8,0-4.7,0.3-6.2,0.8c0,0-0.1-0.1-0.1-0.1  c-1.4-1.5-3.3-2.9-5-4.3c-4-3-7.7-5.9-7.5-10.2c0.3-5.4,5.6-10.7,15.9-15.8c9.1-4.5,16.5-4.7,20.4-3.3c1.6,0.6,2.7,1.4,3.1,2.3  c0.8,1.7,0.5,3.9-0.9,6.3c-2.3,4-8.1,9-17,10c-5.4,0.6-7.7-1.8-7.8-1.9c-0.6-0.7-1-1.1-1.7-0.7c-0.8,0.4-0.4,1.5-0.2,1.9  c0.4,1.1,2.1,3,5,4c2.3,0.8,8.2,1.3,15.5-1.5C86.8,57.7,92.6,48.7,90.9,41.8z M56.4,84.4c-0.1,0.2-0.1,0.4-0.2,0.6  c-0.1,0.2-0.2,0.4-0.2,0.6c-0.4,0.9-1,1.8-1.8,2.6c-2.3,2.5-5.4,3.2-6.4,2.6c-0.3-0.2-0.4-0.5-0.5-0.9c-0.2-1.2,0.5-3.6,2.6-5.7  c2.5-2.6,6-4.5,6.8-4.9C57,81.1,56.9,82.8,56.4,84.4z"
                    style={{ fill: '#FFFFFF' }}
                  />
                </svg>
              </a>

              {/* Node.js */}
              <a href="https://nodejs.org/en" title="Node Js" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path style={{ fill: '#46483E' }} d="M64,14c-27.6,0-50,22.4-50,50s22.4,50,50,50s50-22.4,50-50S91.6,14,64,14z" />
                  <g>
                    <path style={{ fill: '#81CF08' }} d="M64,95.9c-0.9,0-1.7-0.2-2.5-0.7l-7.8-4.6c-1.2-0.7-0.6-0.9-0.2-1c1.6-0.6,1.9-0.7,3.5-1.6   c0.2-0.1,0.4-0.1,0.6,0.1l6,3.6c0.2,0.1,0.5,0.1,0.7,0l23.4-13.5c0.2-0.1,0.4-0.4,0.4-0.6v-27c0-0.3-0.1-0.5-0.4-0.6L64.4,36.4   c-0.2-0.1-0.5-0.1-0.7,0L40.3,49.8c-0.2,0.1-0.4,0.4-0.4,0.6v27c0,0.2,0.1,0.5,0.4,0.6l6.4,3.7c3.5,1.7,5.6-0.3,5.6-2.4V52.8   c0-0.4,0.3-0.7,0.7-0.7h3c0.4,0,0.7,0.3,0.7,0.7v26.6c0,4.7-2.5,7.3-6.9,7.3c-1.4,0-2.4,0-5.4-1.5l-6.1-3.5   c-1.5-0.9-2.5-2.5-2.5-4.3v-27c0-1.7,0.9-3.4,2.5-4.3l23.4-13.5c1.5-0.8,3.5-0.8,4.9,0l23.4,13.5c1.5,0.9,2.5,2.5,2.5,4.3v27   c0,1.7-0.9,3.4-2.5,4.3L66.5,95.3C65.7,95.7,64.9,95.9,64,95.9z" />
                    <path style={{ fill: '#81CF08' }} d="M71.3,77.3c-10.2,0-12.4-4.7-12.4-8.6c0-0.4,0.3-0.7,0.7-0.7h3c0.3,0,0.6,0.2,0.7,0.6c0.4,3.1,1.8,4.6,8,4.6   c4.9,0,7-1.1,7-3.7c0-1.5-0.6-2.6-8.3-3.4c-6.4-0.6-10.4-2-10.4-7.2c0-4.7,4-7.5,10.7-7.5c7.5,0,11.2,2.6,11.7,8.2   c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2h-3c-0.3,0-0.6-0.2-0.7-0.5c-0.7-3.2-2.5-4.3-7.3-4.3c-5.4,0-6,1.9-6,3.3   c0,1.7,0.7,2.2,8,3.2c7.2,0.9,10.6,2.3,10.6,7.3C82.9,74.4,78.7,77.3,71.3,77.3z" />
                  </g>
                </svg>
              </a>

            </div>

            <div className="project__link">
              <button className="button button__flex">
                <a href="https://deploy-spotify-clone.web.app/" target='__blank'>Veja o Deploy</a>
              </button>

              <button className="button button__flex">
                <a href="https://github.com/AdemarCastro/angular-clone-spotify/" target='__blank'>Veja o Repositório</a>
              </button>
            </div>

          </div>
        </div>

        {/* Spotify Clone */}
        <div className="project__content">
          {/* Esse content da imagem deve preencher a metade esquerda */}
          <div className="content__img"></div>

          <div className='content__descricao'>
            <h3 className="project__title">Spotify Clone<br /></h3>
            <p className="project__text">
              O projeto é uma réplica do Spotify, desenvolvido utilizando Angular, HTML, CSS (SCSS), Express, Node.js, MariaDB e Firebase. A aplicação integra-se à API do Spotify, permitindo acessar músicas, playlists e artistas populares, além de permitir pesquisas e troca de músicas com o Spotify aberto. O objetivo final é possibilitar a audição de músicas diretamente no website e aprimorar o design para se assemelhar ainda mais ao Spotify. Por ser um projeto amplo e desenvolvido individualmente, a conclusão pode demandar algum tempo.
            </p>

            {/* Icones SVG */}
            <div className="project__tecnologias">
              {/* Icon Angular */}
              <a href="https://angular.io/" title="Angular" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="64" cy="64" r="50" style={{ fill: '#DD1B16' }} />
                  <polygon points="90.8,88.5 64,31.5 64,49.8 72.3,68 64,68 64,75.5 75.8,75.5 81.7,88.5" style={{ fill: '#B3B3B3' }} />
                  <polygon points="37.2,88.5 64,31.5 64,49.8 55.7,68 64,68 64,75.5 52.2,75.5 46.3,88.5" style={{ fill: '#F2F2F2' }} />
                </svg>
              </a>

              {/* HTML */}
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" title="HTML" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle cx="64" cy="64" r="50" style={{ fill: '#F0652A' }} />
                    <path d="M40.2,39l4.3,48.5L63.9,93l19.5-5.5L87.8,39H40.2z M78.4,54.8H55.6l0.5,6.1h21.7l-1.7,18.4L64,82.6h-0.1l-12.2-3.4L51,69.9h5.9l0.4,4.7l6.6,1.8l6.6-1.8l0.7-7.7H50.7l-1.6-18h29.8L78.4,54.8z" style={{ fill: '#FFFFFF' }} />
                  </g>
                </svg>
              </a>

              {/* CSS */}
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" title="CSS" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem'}}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle cx="64" cy="64" r="50" style={{ fill: '#33A9DC' }} />
                  </g>
                  <path
                    d="M90,42l-8,40l-24.1,8L37,82l2.1-10.7H48l-0.9,4.4l12.7,4.8l14.6-4.8l2-10.2H40.2l1.7-8.9h36.3   l1.1-5.7H43.1l1.8-8.9C44.9,42,90,42,90,42z"
                    style={{ fill: '#FFFFFF' }}
                  />
                </svg>
              </a>


              {/* SASS */}
              <a href="https://sass-lang.com/" title="SASS" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="64" cy="64" r="50" style={{ fill: '#CC6699' }} />
                  <path
                    d="M90.9,41.8c-0.6-2.4-2.3-4.4-4.9-5.8c-5.1-2.7-13.3-2.8-20.8-0.1c-4.5,1.6-13,5.2-19.4,11.1  c-6.4,6-7.4,11.3-6.9,13.4c1.1,5.8,7.2,9.9,12,13.3c1.3,0.9,2.5,1.7,3.4,2.5c-2.7,1.4-10,5.5-12,9.8c-1.5,3.4-0.8,5.9-0.2,7  c0.6,1.3,1.6,2.3,2.6,2.6c1,0.3,2.1,0.4,3.2,0.4c4.3,0,8.5-2.3,11.1-6.2c2.6-3.9,2.8-9.1,1.6-12.3c1.7-0.4,3.5-0.4,5.5-0.2  c3.9,0.5,5.8,2,6.7,3.2c1,1.3,1.2,2.6,1.1,3.4c-0.2,1.5-1.4,2.4-2,2.8c-0.5,0.3-0.9,0.6-0.8,1.2c0.2,0.8,1,0.7,1.3,0.7  c0.9-0.2,4.1-1.8,4.3-5.4c0.1-2.2-0.8-4.4-2.5-6.2c-2.2-2.3-5.5-3.5-9.3-3.4c-2.8,0-4.7,0.3-6.2,0.8c0,0-0.1-0.1-0.1-0.1  c-1.4-1.5-3.3-2.9-5-4.3c-4-3-7.7-5.9-7.5-10.2c0.3-5.4,5.6-10.7,15.9-15.8c9.1-4.5,16.5-4.7,20.4-3.3c1.6,0.6,2.7,1.4,3.1,2.3  c0.8,1.7,0.5,3.9-0.9,6.3c-2.3,4-8.1,9-17,10c-5.4,0.6-7.7-1.8-7.8-1.9c-0.6-0.7-1-1.1-1.7-0.7c-0.8,0.4-0.4,1.5-0.2,1.9  c0.4,1.1,2.1,3,5,4c2.3,0.8,8.2,1.3,15.5-1.5C86.8,57.7,92.6,48.7,90.9,41.8z M56.4,84.4c-0.1,0.2-0.1,0.4-0.2,0.6  c-0.1,0.2-0.2,0.4-0.2,0.6c-0.4,0.9-1,1.8-1.8,2.6c-2.3,2.5-5.4,3.2-6.4,2.6c-0.3-0.2-0.4-0.5-0.5-0.9c-0.2-1.2,0.5-3.6,2.6-5.7  c2.5-2.6,6-4.5,6.8-4.9C57,81.1,56.9,82.8,56.4,84.4z"
                    style={{ fill: '#FFFFFF' }}
                  />
                </svg>
              </a>

              {/* Node.js */}
              <a href="https://nodejs.org/en" title="Node Js" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path style={{ fill: '#46483E' }} d="M64,14c-27.6,0-50,22.4-50,50s22.4,50,50,50s50-22.4,50-50S91.6,14,64,14z" />
                  <g>
                    <path style={{ fill: '#81CF08' }} d="M64,95.9c-0.9,0-1.7-0.2-2.5-0.7l-7.8-4.6c-1.2-0.7-0.6-0.9-0.2-1c1.6-0.6,1.9-0.7,3.5-1.6   c0.2-0.1,0.4-0.1,0.6,0.1l6,3.6c0.2,0.1,0.5,0.1,0.7,0l23.4-13.5c0.2-0.1,0.4-0.4,0.4-0.6v-27c0-0.3-0.1-0.5-0.4-0.6L64.4,36.4   c-0.2-0.1-0.5-0.1-0.7,0L40.3,49.8c-0.2,0.1-0.4,0.4-0.4,0.6v27c0,0.2,0.1,0.5,0.4,0.6l6.4,3.7c3.5,1.7,5.6-0.3,5.6-2.4V52.8   c0-0.4,0.3-0.7,0.7-0.7h3c0.4,0,0.7,0.3,0.7,0.7v26.6c0,4.7-2.5,7.3-6.9,7.3c-1.4,0-2.4,0-5.4-1.5l-6.1-3.5   c-1.5-0.9-2.5-2.5-2.5-4.3v-27c0-1.7,0.9-3.4,2.5-4.3l23.4-13.5c1.5-0.8,3.5-0.8,4.9,0l23.4,13.5c1.5,0.9,2.5,2.5,2.5,4.3v27   c0,1.7-0.9,3.4-2.5,4.3L66.5,95.3C65.7,95.7,64.9,95.9,64,95.9z" />
                    <path style={{ fill: '#81CF08' }} d="M71.3,77.3c-10.2,0-12.4-4.7-12.4-8.6c0-0.4,0.3-0.7,0.7-0.7h3c0.3,0,0.6,0.2,0.7,0.6c0.4,3.1,1.8,4.6,8,4.6   c4.9,0,7-1.1,7-3.7c0-1.5-0.6-2.6-8.3-3.4c-6.4-0.6-10.4-2-10.4-7.2c0-4.7,4-7.5,10.7-7.5c7.5,0,11.2,2.6,11.7,8.2   c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2h-3c-0.3,0-0.6-0.2-0.7-0.5c-0.7-3.2-2.5-4.3-7.3-4.3c-5.4,0-6,1.9-6,3.3   c0,1.7,0.7,2.2,8,3.2c7.2,0.9,10.6,2.3,10.6,7.3C82.9,74.4,78.7,77.3,71.3,77.3z" />
                  </g>
                </svg>
              </a>

            </div>

            <div className="project__link">
              <button className="button button__flex">
                <a href="https://deploy-spotify-clone.web.app/" target='__blank'>Veja o Deploy</a>
              </button>

              <button className="button button__flex">
                <a href="https://github.com/AdemarCastro/angular-clone-spotify/" target='__blank'>Veja o Repositório</a>
              </button>
            </div>

          </div>
        </div>

        {/* Spotify Clone */}
        <div className="project__content">
          {/* Esse content da imagem deve preencher a metade esquerda */}
          <div className="content__img"></div>

          <div className='content__descricao'>
            <h3 className="project__title">Spotify Clone<br /></h3>
            <p className="project__text">
              O projeto é uma réplica do Spotify, desenvolvido utilizando Angular, HTML, CSS (SCSS), Express, Node.js, MariaDB e Firebase. A aplicação integra-se à API do Spotify, permitindo acessar músicas, playlists e artistas populares, além de permitir pesquisas e troca de músicas com o Spotify aberto. O objetivo final é possibilitar a audição de músicas diretamente no website e aprimorar o design para se assemelhar ainda mais ao Spotify. Por ser um projeto amplo e desenvolvido individualmente, a conclusão pode demandar algum tempo.
            </p>

            {/* Icones SVG */}
            <div className="project__tecnologias">
              {/* Icon Angular */}
              <a href="https://angular.io/" title="Angular" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="64" cy="64" r="50" style={{ fill: '#DD1B16' }} />
                  <polygon points="90.8,88.5 64,31.5 64,49.8 72.3,68 64,68 64,75.5 75.8,75.5 81.7,88.5" style={{ fill: '#B3B3B3' }} />
                  <polygon points="37.2,88.5 64,31.5 64,49.8 55.7,68 64,68 64,75.5 52.2,75.5 46.3,88.5" style={{ fill: '#F2F2F2' }} />
                </svg>
              </a>

              {/* HTML */}
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" title="HTML" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle cx="64" cy="64" r="50" style={{ fill: '#F0652A' }} />
                    <path d="M40.2,39l4.3,48.5L63.9,93l19.5-5.5L87.8,39H40.2z M78.4,54.8H55.6l0.5,6.1h21.7l-1.7,18.4L64,82.6h-0.1l-12.2-3.4L51,69.9h5.9l0.4,4.7l6.6,1.8l6.6-1.8l0.7-7.7H50.7l-1.6-18h29.8L78.4,54.8z" style={{ fill: '#FFFFFF' }} />
                  </g>
                </svg>
              </a>

              {/* CSS */}
              <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" title="CSS" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem'}}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <circle cx="64" cy="64" r="50" style={{ fill: '#33A9DC' }} />
                  </g>
                  <path
                    d="M90,42l-8,40l-24.1,8L37,82l2.1-10.7H48l-0.9,4.4l12.7,4.8l14.6-4.8l2-10.2H40.2l1.7-8.9h36.3   l1.1-5.7H43.1l1.8-8.9C44.9,42,90,42,90,42z"
                    style={{ fill: '#FFFFFF' }}
                  />
                </svg>
              </a>


              {/* SASS */}
              <a href="https://sass-lang.com/" title="SASS" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <circle cx="64" cy="64" r="50" style={{ fill: '#CC6699' }} />
                  <path
                    d="M90.9,41.8c-0.6-2.4-2.3-4.4-4.9-5.8c-5.1-2.7-13.3-2.8-20.8-0.1c-4.5,1.6-13,5.2-19.4,11.1  c-6.4,6-7.4,11.3-6.9,13.4c1.1,5.8,7.2,9.9,12,13.3c1.3,0.9,2.5,1.7,3.4,2.5c-2.7,1.4-10,5.5-12,9.8c-1.5,3.4-0.8,5.9-0.2,7  c0.6,1.3,1.6,2.3,2.6,2.6c1,0.3,2.1,0.4,3.2,0.4c4.3,0,8.5-2.3,11.1-6.2c2.6-3.9,2.8-9.1,1.6-12.3c1.7-0.4,3.5-0.4,5.5-0.2  c3.9,0.5,5.8,2,6.7,3.2c1,1.3,1.2,2.6,1.1,3.4c-0.2,1.5-1.4,2.4-2,2.8c-0.5,0.3-0.9,0.6-0.8,1.2c0.2,0.8,1,0.7,1.3,0.7  c0.9-0.2,4.1-1.8,4.3-5.4c0.1-2.2-0.8-4.4-2.5-6.2c-2.2-2.3-5.5-3.5-9.3-3.4c-2.8,0-4.7,0.3-6.2,0.8c0,0-0.1-0.1-0.1-0.1  c-1.4-1.5-3.3-2.9-5-4.3c-4-3-7.7-5.9-7.5-10.2c0.3-5.4,5.6-10.7,15.9-15.8c9.1-4.5,16.5-4.7,20.4-3.3c1.6,0.6,2.7,1.4,3.1,2.3  c0.8,1.7,0.5,3.9-0.9,6.3c-2.3,4-8.1,9-17,10c-5.4,0.6-7.7-1.8-7.8-1.9c-0.6-0.7-1-1.1-1.7-0.7c-0.8,0.4-0.4,1.5-0.2,1.9  c0.4,1.1,2.1,3,5,4c2.3,0.8,8.2,1.3,15.5-1.5C86.8,57.7,92.6,48.7,90.9,41.8z M56.4,84.4c-0.1,0.2-0.1,0.4-0.2,0.6  c-0.1,0.2-0.2,0.4-0.2,0.6c-0.4,0.9-1,1.8-1.8,2.6c-2.3,2.5-5.4,3.2-6.4,2.6c-0.3-0.2-0.4-0.5-0.5-0.9c-0.2-1.2,0.5-3.6,2.6-5.7  c2.5-2.6,6-4.5,6.8-4.9C57,81.1,56.9,82.8,56.4,84.4z"
                    style={{ fill: '#FFFFFF' }}
                  />
                </svg>
              </a>

              {/* Node.js */}
              <a href="https://nodejs.org/en" title="Node Js" target='__blank'>
                <svg
                  id="Lager_1"
                  style={{ enableBackground: 'new 0 0 128 128', height: '3rem' }}
                  version="1.1"
                  viewBox="0 0 128 128"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path style={{ fill: '#46483E' }} d="M64,14c-27.6,0-50,22.4-50,50s22.4,50,50,50s50-22.4,50-50S91.6,14,64,14z" />
                  <g>
                    <path style={{ fill: '#81CF08' }} d="M64,95.9c-0.9,0-1.7-0.2-2.5-0.7l-7.8-4.6c-1.2-0.7-0.6-0.9-0.2-1c1.6-0.6,1.9-0.7,3.5-1.6   c0.2-0.1,0.4-0.1,0.6,0.1l6,3.6c0.2,0.1,0.5,0.1,0.7,0l23.4-13.5c0.2-0.1,0.4-0.4,0.4-0.6v-27c0-0.3-0.1-0.5-0.4-0.6L64.4,36.4   c-0.2-0.1-0.5-0.1-0.7,0L40.3,49.8c-0.2,0.1-0.4,0.4-0.4,0.6v27c0,0.2,0.1,0.5,0.4,0.6l6.4,3.7c3.5,1.7,5.6-0.3,5.6-2.4V52.8   c0-0.4,0.3-0.7,0.7-0.7h3c0.4,0,0.7,0.3,0.7,0.7v26.6c0,4.7-2.5,7.3-6.9,7.3c-1.4,0-2.4,0-5.4-1.5l-6.1-3.5   c-1.5-0.9-2.5-2.5-2.5-4.3v-27c0-1.7,0.9-3.4,2.5-4.3l23.4-13.5c1.5-0.8,3.5-0.8,4.9,0l23.4,13.5c1.5,0.9,2.5,2.5,2.5,4.3v27   c0,1.7-0.9,3.4-2.5,4.3L66.5,95.3C65.7,95.7,64.9,95.9,64,95.9z" />
                    <path style={{ fill: '#81CF08' }} d="M71.3,77.3c-10.2,0-12.4-4.7-12.4-8.6c0-0.4,0.3-0.7,0.7-0.7h3c0.3,0,0.6,0.2,0.7,0.6c0.4,3.1,1.8,4.6,8,4.6   c4.9,0,7-1.1,7-3.7c0-1.5-0.6-2.6-8.3-3.4c-6.4-0.6-10.4-2-10.4-7.2c0-4.7,4-7.5,10.7-7.5c7.5,0,11.2,2.6,11.7,8.2   c0,0.2-0.1,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2h-3c-0.3,0-0.6-0.2-0.7-0.5c-0.7-3.2-2.5-4.3-7.3-4.3c-5.4,0-6,1.9-6,3.3   c0,1.7,0.7,2.2,8,3.2c7.2,0.9,10.6,2.3,10.6,7.3C82.9,74.4,78.7,77.3,71.3,77.3z" />
                  </g>
                </svg>
              </a>

            </div>

            <div className="project__link">
              <button className="button button__flex">
                <a href="https://deploy-spotify-clone.web.app/" target='__blank'>Veja o Deploy</a>
              </button>

              <button className="button button__flex">
                <a href="https://github.com/AdemarCastro/angular-clone-spotify/" target='__blank'>Veja o Repositório</a>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects