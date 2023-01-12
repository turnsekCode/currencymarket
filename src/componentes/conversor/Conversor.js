import React from "react";
import "./conversor.css";

const Conversor = () => {
  return (
    <>
      <div className="contenedor_conversor_divisa">
        <h4>
          Conversor <span>de divisa</span>
        </h4>
        <div className="contenedor_input">
          <div className="bloque_der_moneda">
            <p>USA</p>
          </div>
          <div className="bloque_izq_moneda">
            <input placeholder="100" /> $
            <p className="info_precio">1$ = 1,02 €</p>
          </div>
        </div>
      </div>
      <div className="contenedor_conversor_inferior">
        <div className="contenedor_input">
          <div className="bloque_der_moneda_inferior">
            <p>EUR</p>
          </div>
          <div className="bloque_izq_moneda">
            <input placeholder="100" /> $
            <p className="info_precio">Sin comisiones</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversor;
