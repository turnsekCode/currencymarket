import React from "react";
import "./banderas_inferior.css";
import BanderaIzq from "../../assets/bandera_footer_izq.png";
import BanderaDer from "../../assets/bandera_footer_der.png";

const BanderasInferior = () => {
  return (
    <div className="contenedor_banderas_inferior">
      <img
        loading="lazy"
        className="banderas_inferior izq"
        src={BanderaIzq}
        alt="bandera"
      />
      <img
        loading="lazy"
        className="banderas_inferior"
        src={BanderaDer}
        alt="bandera"
      />
    </div>
  );
};

export default BanderasInferior;
