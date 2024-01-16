import React, { useState, useEffect } from "react";
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minha carreira</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
              ? "qualification__button qualification__active button__flex"
              : "qualification__button button__flex"}
            onClick={() => toggleTab(1)}
            >
            <i className="uil uil-graduation-cap qualification__icon"> Acadêmica</i>
          </div>

          <div
            className={
              toggleState === 2
              ? "qualification__button qualification__active button__flex"
              : "qualification__button button__flex"}
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"> Profissional</i>
          </div>
        </div>

        <div className="qualification__sections">
          {/* Educação */}
          <div className={toggleState === 1
          ? "qualification__content qualification__content-active"
          : "qualification__content"
          }>
            {/* 1ª - data */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title left" id="data1">OPEN CG Pacote Adobe</h3>
                <span className="qualification__subtitle left" id="data1">Gracom - Manaus/AM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt left" id="data1"> 2016 - 2018</i>
                </div>
              </div>

                <div>
                  <span className="qualification__rounder" id="data1"></span>
                  <span className="qualification__line" id="data1"></span>
                </div>
            </div>
            {/* 2ª - data */}
            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder"  id="data2"></span>
                  <span className="qualification__line"  id="data2"></span>
              </div>

              <div>
                <h3 className="qualification__title right" id="data2">Tec. em Análise de Sistemas</h3>
                <span className="qualification__subtitle right" id="data2">IFAM - Manaus/AM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt right" id="data2">02/2022 - Agora</i>
                </div>
              </div>
            </div>
          </div>

          {/* Experiência */}
          <div className={toggleState === 2
          ? "qualification__content qualification__content-active"
          : "qualification__content"
          }>
            {/* 1ª - data */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title left" id="data1">Soldado</h3>
                <span className="qualification__subtitle left" id="data1">PQR MNT 12 - Manaus/AM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt left" id="data1"> 03/2017 - 02/2018</i>
                </div>
              </div>

                <div>
                  <span className="qualification__rounder" id="data1"></span>
                  <span className="qualification__line" id="data1"></span>
                </div>
            </div>
            {/* 2ª - data */}
            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder" id="data2"></span>
                  <span className="qualification__line" id="data2"></span>
              </div>

              <div>
                <h3 className="qualification__title right" id="data2">Bolsista PAPE</h3>
                <span className="qualification__subtitle right" id="data2">ARANOUÁ SAMSUNG - Manaus/AM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt right" id="data2"> 07/2022 - Agora</i>
                </div>
              </div>
            </div>
            {/* 3ª - data */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title left" id="data3">Aluno Web Academy</h3>
                <span className="qualification__subtitle left" id="data3">IComp/UFAM - Manaus/AM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt left" id="data3"> 08/2023 - 09/2023</i>
                </div>
              </div>

                <div>
                  <span className="qualification__rounder" id="data3"></span>
                  <span className="qualification__line" id="data3"></span>
                </div>
            </div>
            {/* 4ª - data */}
            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder" id="data4"></span>
                  <span className="qualification__line" id="data4"></span>
              </div>

              <div>
                <h3 className="qualification__title right" id="data4">Estagiário Desenvolvedor de Software</h3>
                <span className="qualification__subtitle right" id="data4">DTI-PMAM - Manaus/AM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt right" id="data4"> 09/2023 - Agora</i>
                </div>
              </div>
            </div>
            {/* 5ª - data */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title left" id="data5">Bolsista Full Stack</h3>
                <span className="qualification__subtitle left" id="data5">Senac AM - Manaus/AM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt left" id="data5"> 10/2023 - Agora</i>
                </div>
              </div>

                <div>
                  <span className="qualification__rounder" id="data5"></span>
                  <span className="qualification__line" id="data5"></span>
                </div>
            </div>
            {/* 6ª - data */}
            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder" id="data6"></span>
                  <span className="qualification__line" id="data6"></span>
              </div>

              <div>
                <h3 className="qualification__title right" id="data6">Bolsista Web Academy</h3>
                <span className="qualification__subtitle right" id="data6">IComp/UFAM - Manaus/AM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt right" id="data6"> 02/2024 - Agora</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification