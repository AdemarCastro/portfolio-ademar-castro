import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class='bx bx-award about__icon'></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">4 Meses - Estágio</span><br></br>
        <span className="about__subtitle">1 Ano - Bolsista PAPE</span>
      </div>

      <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>

        <h3 className="about__title">Projetos</h3>
        <span className="about__subtitle">+30 Repositórios</span>
      </div>

      <div className="about__box">
        <i class='bx bx-support about__icon'></i>

        <h3 className="about__title">Suporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default info