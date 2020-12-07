import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Achievements = () => {
  return (
    <div id="achievements">
      <Grid container className="about-css">
        <Grid item xs={12}>
          <h1 className="name-css">
            <span className="surname">Achievements</span>
          </h1>
          <div
            data-aos="zoom-in-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
          >
            <Paper
              elevation={24}
              style={{ backgroundColor: "#2c3e50", color: "white" }}
            >
              <div className="achievements">
                <ul className="fa-ul mb-0">
                  <li>
                    <i
                      className="fa-li fa fa-trophy"
                      style={{ color: "#F1F2B5" }}
                    />
                 Completed online certification from Udemy on “HTML” course on July,2020
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy"
                      style={{ color: "#F1F2B5" }}
                    />
                
Attended a seminar on “Digital Marketing” at Techcushy Bangalore Jun,2019 
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                     Attended a webinar on “PYTHON 3” Conducted by AP Trainings on Jun,2020
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
              Participated and successfully completed quiz on “Data Structures” on Jun,2020
                  </li>
                  <li>
                    <i
                      className="fa-li fa fa-trophy "
                      style={{ color: "#F1F2B5" }}
                    />
                   Represented School at District Level Throw Ball Tournament 2016

                  </li>
                  
                </ul>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Achievements;