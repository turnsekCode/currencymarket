import React from "react";
import "./banderasSuperior.css";

const BanderasSuperior = () => {
  return (
    <div className="contenedor_banderas">
      <img
        className="imagen_bandera_izq"
        src="../esquina-sup-izquierda.png"
        alt=""
      />
      <img
        className="imagen_bandera_der"
        src="../esquina-sup-derecha.png"
        alt=""
      />
    </div>
  );
};

export default BanderasSuperior;
