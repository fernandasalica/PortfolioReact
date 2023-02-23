import React from "react";

export const Skills = () => {
  return (
    <section class="skills" id="skills">
      <h1 className="text-center my-4">CONOCIMIENTOS</h1>
      <div class="container">
        <div class="skill">
          <div class="head">
            <div class="left">
              {/* <span class="material-icons-sharp">design_services</span> */}
              <span>
                <i class="fa-solid fa-pen-ruler"></i>
              </span>
              <h4>FrontEnd Development</h4>
            </div>
          </div>

          <div class="item">
            <h5>HTML</h5>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h5>92%</h5>
            </div>
          </div>

          <div class="item">
            <h5>CSS</h5>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h5>50%</h5>
            </div>
          </div>

          <div class="item">
            <h5>JAVASCRIPT</h5>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h5>75%</h5>
            </div>
          </div>
        </div>

        <div class="skill">
          <div class="head">
            <div class="left">
              <span class="material-icons-sharp">design_services</span>
              <h4>BackEnd Development</h4>
            </div>
          </div>

          <div class="item">
            <h5>NodeJs</h5>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress-node"></div>
              </div>
              <h5>40%</h5>
            </div>
          </div>

          <div class="item">
            <h5>Mongo DB</h5>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h5>50%</h5>
            </div>
          </div>

          <div class="item">
            <h5>MySql</h5>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h5>75%</h5>
            </div>
          </div>
        </div>

        <div class="skill">
          <div class="head">
            <div class="left">
              <span class="material-icons-sharp">design_services</span>
              <h4>CMS</h4>
            </div>
          </div>

          <div class="item">
            <h5>Wordpress</h5>
            <div class="progress-area">
              <div class="progress-bar">
                <div class="progress"></div>
              </div>
              <h5>92%</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
