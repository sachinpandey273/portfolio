import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";

class OpensourceCharts extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="main-div">
        <div className="os-charts-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="os-charts-header" style={{ color: theme.text }}>
              Open Source Contributions
            </h1>
          </Fade>
        </div>

        <div className="opensource-projects">
          <div className="opensource-card">
            <h3>ASCII Forge</h3>
            <p>
              Professional ASCII Art Generation Toolkit published on PyPI.
              Converts images to ASCII art and generates animated text art with
              CLI support and customizable styles.
            </p>
            <a
              href="https://github.com/sachinpandey273/ASCIIFORGE"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>

          <div className="opensource-card">
            <h3>Contextual Audio Editing Package</h3>
            <p>
              Python package that adds contextual audio feedback based on
              editing content and situational themes to enhance user
              interaction.
            </p>
            <a
              href="https://github.com/sachinpandey273"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;
