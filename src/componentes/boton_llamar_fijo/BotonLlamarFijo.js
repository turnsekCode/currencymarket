import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./botonLlamarFijo.css";

const BotonLlamarFijo = () => {
  return (
    <div className="contenedor_llamar_fijo">
      <a href="tel:900373629">
        <LocalPhoneIcon />
        <h3>
          LLAMAR <span>A CURRENCY MARKET</span>
        </h3>
      </a>
    </div>
  );
};

export default BotonLlamarFijo;
