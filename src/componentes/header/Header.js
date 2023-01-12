import React from "react";
import "./header.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Header = () => {
  return (
    <div className="contenedor_header">
      <div className="contenedor_padding">
        <h1 className="logo">
          <span>CURRENCY</span>MARKET
        </h1>
        <div className="contenedor_llamar">
          <LocalPhoneIcon />
          <h3>
            LLAMAR <span>A CURRENCY MARKET</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
