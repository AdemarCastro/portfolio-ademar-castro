import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Castro</h1>

        <ul className="footer__list">
          <li>
            <a href='#about' className="footer__link">Sobre</a>
          </li>
          <li>
            <a href='#portfolio' className="footer__link">Projetos</a>
          </li>
          <li>
            <a href='#skills' className="footer__link">Habilidades</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.behance.net/ademarcastro" className="footer__social-link" target='_blank'>
            <i class="uil uil-behance-alt"></i>
          </a>
          
          <a href="https://github.com/AdemarCastro" className="footer__social-link" target='_blank'>
            <i class="uil uil-github-alt"></i>
          </a>

          <a href="https://www.linkedin.com/in/ademar-castro-8bb95b256/" className="footer__social-link" target='_blank'>
            <i class="uil uil-linkedin-alt"></i>
          </a>

          <a href="https://twitter.com/AdemarCastro20" className="footer__social-link" target='_blank'>
            <i class="uil uil-twitter-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Ademar Castro. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}

export default Footer