import React from "react";
import "./header.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Header = () => {
  return (
    <div className="contenedor_header">
      <div className="contenedor_padding">
        <a href="/" className="logo">
          <span>CURRENCY</span>MARKET®
        </a>
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
