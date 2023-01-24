import React from "react";
import FooterPasos from "../footer_pasos/FooterPasos";
import SeccionFooter from "../seccion_footer/SeccionFooter";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="contenedor_footer">
      <FooterPasos />
      <SeccionFooter />
    </footer>
  );
};

export default Footer;
