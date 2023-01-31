import React from "react";
import "./tituloIzq.css";

const TituloIzq = () => {
  return (
    <div className="contenedor_titulos">
      <h2>Cambia Euros a</h2>
      <h1>DÓLARES</h1>
      <h2>
        A SU PRECIO REAL
        <br />
        <span className="titulo_span">
          Sin comisiones
          <br />
          Sin intereses
        </span>
      </h2>
    </div>
  );
};

export default TituloIzq;
