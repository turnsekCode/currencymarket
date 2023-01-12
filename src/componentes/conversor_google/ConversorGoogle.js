import React from "react";
import "./conversor_google.css";

const ConversorGoogle = () => {
  return (
    <section>
      <h2 className="titulo_precio">
        Utilizamos <span>el precio de </span>Google
      </h2>
      <div className="contenedor_precio_google">
        <div className="contenedor_google">
          <iframe
            src="https://www.google.com/search?q=dolar+cotizacion&igu=1&source=hp&ei=0thjY9nGHtKKur4Pz4ieuAk&iflsig=AJiK0e8AAAAAY2Pm4mguI7sumXHK4Mj2KMRumz8q6yBD&ved=0ahUKEwjZ98fZpJL7AhVShc4BHU-EB5cQ4dUDCAo&uact=5&oq=dolar+cotizacion&gs_lp=Egdnd3Mtd2l6uAED-AEBMg8QABixAxiDARhDGEYYggIyBBAAGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABMICBBAjGCfCAgsQABiABBixAxiDAcICCRAAGEMYRhiCAsICChAAGLEDGIMBGEPCAgcQABixAxhDwgIIEAAYsQMYgwHCAggQABiABBixA8ICCBAAGIAEGMsBSMkoUABYjCNwAHgAyAEAkAEAmAF5oAG3DaoBBDMuMTM&sclient=gws-wiz"
            name="myIFrame"
            frameBorder="0"
            scrolling="no"
            title="mapa google"
            className="iframe_mapa"
          ></iframe>
        </div>
        <div className="contenedor_mapa_usa">
          <img src="../../../mapa_usa.png" alt="mapa usa" />
        </div>
      </div>
      <div className="contenedor_texto_inferior">
        <span>Conversor de</span>
        <img
          className="logo_google"
          src="../../../logo-Google 1.png"
          alt="logo google"
        />
      </div>
    </section>
  );
};

export default ConversorGoogle;
