import React, { useState } from "react";
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="qualification section">
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
            <i className="uil uil-graduation-cap qualification__icon"> Educação</i>
          </div>

          <div
            className={
              toggleState === 2
              ? "qualification__button qualification__active button__flex"
              : "qualification__button button__flex"}
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"> Experiência</i>
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
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">IFAM - Amazonas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Agora
                </div>
              </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
            </div>
            {/* 2ª - data */}
            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">IFAM - Amazonas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
            {/* 3ª - data */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">IFAM - Amazonas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
            </div>
            {/* 4ª - data */}
            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">IFAM - Amazonas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
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
                <h3 className="qualification__title">Product Designer</h3>
                <span className="qualification__subtitle">Google - UEA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Agora
                </div>
              </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
            </div>
            {/* 2ª - data */}
            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">Apple - UX e UI</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
            </div>
            {/* 3ª - data */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">Micosoft - Amazonas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2020
                </div>
              </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
            </div>
            {/* 4ª - data */}
            <div className="qualification__data">
              <div></div>

              <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Designer</h3>
                <span className="qualification__subtitle">TRT - Amazonas</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 
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