import React, { Component, Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import priyanka from "../images/priyanka.jpg";
import Fab from "@material-ui/core/Fab";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", margin: "auto" }} className="home-page">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <img src={priyanka} className="priyanka-img" />
              </div>
              <h1 className="name-css">
                Priyanka <span className="surname">Raju</span>
              </h1>
              <p className="sub-detail">Artist and Developer</p>
              <br />
              <br />

              <div className="sub-detail">
                <p>Follow Me</p>
              </div>
              <p className="sub-detail2">
                <a href="https://github.com/priyanka-hs/20171cse0539-priyanka-hs-">
                  <i class="fab fa-github " />
                </a>
                <a href="https://www.instagram.com/priyanka_raju_08/">
                  <i class="fab fa-instagram " />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009529215266">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="https://www.linkedin.com/in/priyanka-h-s-0827431a8 /">
                  <i class="fab fa-linkedin" />
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;