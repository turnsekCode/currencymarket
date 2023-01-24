import React from "react";
import "./banderasSuperior.css";
import BanderaSuperiorIzq from "../../assets/esquina-sup-izquierda.png";
import BanderaSuperiorDer from "../../assets/esquina-sup-derecha.png";

const BanderasSuperior = () => {
  return (
    <div className="contenedor_banderas">
      <img
        className="imagen_bandera_izq"
        src={BanderaSuperiorIzq}
        alt="banderas"
      />
      <img
        className="imagen_bandera_der"
        src={BanderaSuperiorDer}
        alt="banderas"
      />
    </div>
  );
};

export default BanderasSuperior;
