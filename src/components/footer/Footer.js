import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting, socialMediaLinks } from "../../portfolio.js";

// Check if a hex color is "dark" (luminance < 0.5)
function isDark(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 0.5;
}

export default function Footer(props) {
  const theme = props.theme;
  const darkMode = isDark(theme.body);

  // In light mode: dark bg for contrast. In dark mode: slightly lighter bg for contrast.
  const footerBg = darkMode ? theme.highlight : theme.dark;
  const accentColor = darkMode ? theme.text : theme.highlight;

  return (
    <footer
      className="footer-section"
      style={{
        backgroundColor: footerBg,
        borderTopColor: theme.imageHighlight,
      }}
    >
      <Fade bottom duration={1000} distance="20px">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-brand-name" style={{ color: accentColor }}>
              {"< "}
              {greeting.title}
              {" />"}
            </h3>
            <p className="footer-tagline">
              Building impactful tech, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-links-title" style={{ color: accentColor }}>
              Quick Links
            </h4>
            <nav className="footer-nav">
              {[
                { name: "Home", path: "/home" },
                { name: "Education", path: "/education" },
                { name: "Experience", path: "/experience" },
                { name: "Projects", path: "/projects" },
                { name: "Open Source", path: "/opensource" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <a key={link.name} href={link.path} className="footer-nav-link">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h4 className="footer-social-title" style={{ color: accentColor }}>
              Connect
            </h4>
            <div className="footer-social-icons">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  style={{ backgroundColor: social.backgroundColor }}
                  title={social.name}
                >
                  <i className={`fab ${social.fontAwesomeIcon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-made">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by {greeting.title}
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} {greeting.title}. All rights reserved.
          </p>
        </div>
      </Fade>
    </footer>
  );
}
