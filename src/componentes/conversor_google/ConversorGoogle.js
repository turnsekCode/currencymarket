import React from "react";
import "./conversor_google.css";
import LogoGoogle from "../../assets/logo-Google 1.png";
import MapaUsa from "../../assets/mapa_usa.png";
import Conversor from "../conversor/Conversor";
import Rectalgle34 from "../../../src/assets/Rectangle 34.png";

const ConversorGoogle = ({ open, setOpen }) => {
  const popupOpen = () => {
    setOpen(true);
  };
  console.log(open);
  return (
    <section>
      <div className="contenedor_precio_google">
        <div className="contenedor_conversor">
          <h1 className="titulo_precio">
            Te damos los <span>dólares </span>al precio que marque
            <img className="logo_google" src={LogoGoogle} alt="logo google" />
          </h1>
          <span className="boton_abrir_popup" onClick={popupOpen}>
            Compruébalo tú mismo
          </span>

          <div>
            <Conversor />
          </div>
        </div>
        <div className="contenedor_mapa_usa">
          <img src={MapaUsa} alt="mapa usa" />
        </div>
      </div>
      <div className="contenedor_texto_inferior">
        <div className="separador_section">
          <img src={Rectalgle34} alt="" />
        </div>
      </div>
      <div className="contenedor_parrafo">
        <p>
          <strong>¿Dónde está el truco?</strong> No hay truco. Simplemente nos
          sobran dólares y preferimos dártelos a ti en lugar de llevarlos al
          banco
        </p>
      </div>
    </section>
  );
};

export default ConversorGoogle;
