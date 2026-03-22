import React, { Component } from "react";
import "./CertificateViewer.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { certifications } from "../../portfolio";
import { Fade } from "react-reveal";

class CertificateViewer extends Component {
  render() {
    const theme = this.props.theme;
    const certId = this.props.match.params.id;
    const certificate = certifications.certifications.find(
      (cert) => cert.id === certId
    );

    if (!certificate || !certificate.certificate_image) {
      return (
        <div className="certificate-main">
          <Header theme={theme} />
          <div className="cert-viewer-container">
            <h1 style={{ color: theme.text }}>Certificate not found</h1>
            <a href="/education" className="cert-back-btn">
              ← Back to Education
            </a>
          </div>
          <Footer theme={theme} />
        </div>
      );
    }

    return (
      <div className="certificate-main">
        <Header theme={theme} />
        <div className="cert-viewer-container">
          <Fade bottom duration={1000} distance="20px">
            <a href="/education" className="cert-back-btn">
              ← Back to Education
            </a>
            <h1 className="cert-viewer-title" style={{ color: theme.text }}>
              {certificate.title}
            </h1>
            <p
              className="cert-viewer-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </p>
            <div className="cert-image-wrapper">
              {certificate.certificate_image.endsWith(".pdf") ? (
                <embed
                  src={require(`../../assets/certificates/${certificate.certificate_image}`)}
                  type="application/pdf"
                  className="cert-full-pdf"
                  title={certificate.title}
                />
              ) : (
                <img
                  src={require(`../../assets/certificates/${certificate.certificate_image}`)}
                  alt={certificate.title}
                  className="cert-full-image"
                />
              )}
            </div>
          </Fade>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default CertificateViewer;
