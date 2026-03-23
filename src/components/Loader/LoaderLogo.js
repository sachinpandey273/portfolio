import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    const strokeColor = theme.body !== theme.splashBg ? theme.body : theme.text;
    return (
      <svg
        className="raw_logo"
        width="100%"
        height="100%"
        viewBox="0 0 800 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
                
                .premium-text {
                  font-family: 'Dancing Script', cursive;
                  font-size: 80px;
                  font-weight: 700;
                  fill: transparent;
                  stroke: ${strokeColor};
                  stroke-width: 1.5px;
                  stroke-dasharray: 1000;
                  stroke-dashoffset: 1000;
                  animation: dash 4s ease-in-out forwards 0.5s, fillText 1s ease forwards 4s;
                }
                @keyframes dash {
                  0% { stroke-dashoffset: 1000; }
                  100% { stroke-dashoffset: 0; }
                }
                @keyframes fillText {
                  0% { fill: transparent; stroke: ${strokeColor}; }
                  100% { fill: ${strokeColor}; stroke: transparent; }
                }
              `,
            }}
          />
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="premium-text"
        >
          Sachin Pandey
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
