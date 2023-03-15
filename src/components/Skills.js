import React from "react";

export const Skills = () => {
  return (
    <section class="skills" id="skills">
      <h4 className="text-center my-4">CONOCIMIENTOS</h4>
      <div class="container">
        <div class="skill">
          <div class="head">
            <div class="left">
              <span>
                <i class="fa-solid fa-pen-ruler"></i>
              </span>
              <h5>FrontEnd Development</h5>
            </div>
          </div>

          <div class="item">
            <p>HTML</p>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <p>92%</p>
            </div>
          </div>

          <div class="item">
            <p>CSS</p>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <p>50%</p>
            </div>
          </div>

          <div class="item">
            <p>JAVASCRIPT</p>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <p>75%</p>
            </div>
          </div>

          <div class="item">
            <p>REACT</p>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <p>50%</p>
            </div>
          </div>
        </div>

        <div class="skill">
          <div class="head">
            <div class="left">
              <span>
                <i class="fa-solid fa-pen-ruler"></i>
              </span>
              <h5>BackEnd Development</h5>
            </div>
          </div>

          <div class="item">
            <p>NodeJs</p>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress-node"></div>
              </div>
              <p>40%</p>
            </div>
          </div>

          <div class="item">
            <p>Mongo DB</p>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <p>50%</p>
            </div>
          </div>

          <div class="item">
            <p>MySql</p>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <p>75%</p>
            </div>
          </div>
        </div>

        <div class="skill">
          <div class="head">
            <div class="left">
              <span>
                <i class="fa-solid fa-pen-ruler"></i>
              </span>
              <h5>CMS</h5>
            </div>
          </div>

          <div class="item">
            <p>Wordpress</p>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <p>92%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
