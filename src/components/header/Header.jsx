import React, { useState, useEffect } from 'react'
import "./header.css";
import Theme from '../theme/Theme';

const Header = () => {
  /* =============== Change Background Header =============== */
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  })

  /* =============== Toggle Menu =============== */
  const[Toggle, showMenu] = useState(false);
  const[activeNav, setActiveNav] = useState("#home");
  
  const[mode, setMode] = Theme();

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="index.html" className='nav__logo'>Ademar Castro</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href="#home"
              onClick={() => setActiveNav('#home')}
              className={
                activeNav === '#home'
                ? 'nav__link active-link'
                : 'nav__link'
                }
              >
                <i className='uil uil-estate nav__icon'></i> Início
              </a>
            </li>

            <li className='nav__item'>
              <a href="#about"
              onClick={() => setActiveNav('#about')}
              className={
                activeNav === '#about'
                ? 'nav__link active-link'
                : 'nav__link'
                }
              >
                <i className='uil uil-user nav__icon'></i> Sobre
              </a>
            </li>

            <li className='nav__item'>
              <a href="#skills"
              onClick={() => setActiveNav('#skills')}
              className={
                activeNav === '#skills'
                ? 'nav__link active-link'
                : 'nav__link'
                }
              >
                <i className='uil uil-file-alt nav__icon'></i> Habilidades
              </a>
            </li>

            <li className='nav__item'>
              <a href="#qualification"
              onClick={() => setActiveNav('#qualification')}
              className={
                activeNav === '#qualification'
                ? 'nav__link active-link'
                : 'nav__link'
                }
              >
                <i className='uil uil-book-alt nav__icon'></i> Qualificação
              </a>
            </li>

            <li className='nav__item'>
              <a href="#cursos"
              onClick={() => setActiveNav('#cursos')}
              className={
                activeNav === '#cursos'
                ? 'nav__link active-link'
                : 'nav__link'
                }
              >
                <i className='uil uil-book-alt nav__icon'></i> Cursos
              </a>
            </li>

            <li className='nav__item'>
              <a href="#services"
              onClick={() => setActiveNav('#services')}
              className={
                activeNav === '#services'
                ? 'nav__link active-link'
                : 'nav__link'
                }
              >
                <i className='uil uil-briefcase-alt nav__icon'></i> Serviços
              </a>
            </li>

            <li className='nav__item'>
              <a href="#portfolio"
              onClick={() => setActiveNav('#portfolio')}
              className={
                activeNav === '#portfolio'
                ? 'nav__link active-link'
                : 'nav__link'
                }
              >
                <i className='uil uil-scenery nav__icon'></i> Portfólio
              </a>
            </li>

            <li className='nav__item'>
              <a href="#contact"
              onClick={() => setActiveNav('#contact')}
              className={
                activeNav === '#contact'
                ? 'nav__link active-link'
                : 'nav__link'
                }
              >
                <i className='uil uil-message nav__icon'></i> Contato
              </a>
            </li>

            <li className="nav__item last__item">
              <div className="nav__link">
                <button className='nav__button' onClick={
                  () => setMode(mode === 'light' ? 'dark' : 'light')}
                >
                  {
                    mode === 'dark' ?
                    <i className='bx bx-sun nav__theme'></i> :
                    <i className='bx bx-moon nav__theme' ></i>
                  }
                </button>
              </div>
            </li>

          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header

