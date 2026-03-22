import React, { Component } from "react";
import { Fade } from "react-reveal";
import "./OpensourceCharts.css";
import { opensourceContributions } from "../../portfolio";

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
            <p
              className="os-charts-subtitle"
              style={{ color: theme.secondaryText }}
            >
              Projects I've built and published for the community
            </p>
          </Fade>
        </div>

        <div className="opensource-projects">
          {opensourceContributions.experiences.map((contribution, i) => {
            return (
              <Fade
                left={i % 2 === 0}
                right={i % 2 !== 0}
                duration={2000}
                distance="40px"
                key={i}
              >
                <div
                  className="repo-card-div horizontal-card"
                  style={{ backgroundColor: theme.highlight }}
                  onClick={() =>
                    window.open(contribution.company_url, "_blank")
                  }
                >
                  <div className="project-image-container">
                    <img
                      src={require(`../../assets/images/${
                        contribution.logo_path || "python_logo.png"
                      }`)}
                      alt={contribution.title}
                      className="project-cover-image"
                    />
                  </div>
                  <div className="repo-text-container">
                    <div className="repo-name-div">
                      <svg
                        aria-hidden="true"
                        className="octicon repo-svg"
                        height="16"
                        role="img"
                        viewBox="0 0 12 16"
                        width="12"
                        fill={theme.text}
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                        ></path>
                      </svg>
                      <p className="repo-name" style={{ color: theme.text }}>
                        {contribution.title}
                      </p>
                    </div>
                    <p
                      className="repo-description"
                      style={{ color: theme.text }}
                    >
                      {contribution.description}
                    </p>
                    <div className="repo-details">
                      <p
                        className="repo-creation-date subTitle"
                        style={{ color: theme.secondaryText }}
                      >
                        {contribution.duration}
                      </p>
                      <a
                        href={contribution.company_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="repo-link"
                        style={{ color: theme.imageHighlight }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Repository →
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    );
  }
}

export default OpensourceCharts;
