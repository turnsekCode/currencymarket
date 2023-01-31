import React from "react";
import "./header.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="contenedor_header">
      <div className="contenedor_padding">
        <Link to={"/dolares-cotizacion"} className="logo">
          <span>CURRENCY</span>MARKET®
        </Link>
        <div className="contenedor_llamar">
          <a href="tel:900373629">
            <LocalPhoneIcon />
            <h3>
              LLAMAR <span>A CURRENCY MARKET</span>
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
