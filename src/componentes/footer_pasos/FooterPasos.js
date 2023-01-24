import React from "react";
import "./footerPasos.css";
import Rectangle46 from "../../assets/Rectangle 46.png";

const FooterPasos = () => {
  return (
    <section className="contenedor_section_footer">
      <h2 className="titulo_superior_footer">
        COMPRA DÓLAR <span>EN MENOS DE</span> 10 MINUTOS
      </h2>
      <div className="contenedor_cajas_pasos">
        <div className="caja_pasos">
          <h3>1</h3>
          <h4>LLAMA</h4>
        </div>
        <div className="caja_pasos">
          <h3>2</h3>
          <h4>RESERVA</h4>
        </div>
        <div className="caja_pasos">
          <h3>3</h3>
          <h4>RECOGE</h4>
        </div>
      </div>
      <h2 className="titulo_inferior_footer">
        DE FORMA <span>RÁPIDA Y SEGURA</span>
      </h2>
      <img className="barra_inferior" src={Rectangle46} alt="barra" />
    </section>
  );
};

export default FooterPasos;
