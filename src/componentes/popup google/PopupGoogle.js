import React from "react";
import "./popup_google.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const PopupGoogle = ({ open, setOpen }) => {
  const popupCerrar = () => {
    setOpen(false);
  };
  return (
    <div
      className={open ? "contenedor_popup popup_activo" : "contenedor_popup"}
    >
      <div className="contenedor_google">
        <iframe
          src="https://www.google.com/search?q=euro+cotizacion&igu=1&ei=igfJY8XFFJaW9u8Pweik4AM&ved=0ahUKEwjFsrq6o9P8AhUWi_0HHUE0CTwQ4dUDCA8&uact=5&oq=euro+cotizacion&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIPCAAQsQMQgwEQQxBGEIICMgcIABCABBANMgcIABCABBANMgQIABBDMgYIABAHEB4yBwgAEIAEEA0yBggAEAcQHjIHCAAQgAQQDTIHCAAQgAQQDTIHCAAQgAQQDUoECEEYAEoECEYYAFAAWJAGYPcRaABwAXgAgAFsiAGoA5IBAzAuNJgBAKABAcABAQ&sclient=gws-wiz-serp"
          name="myIFrame"
          frameBorder="0"
          scrolling="no"
          title="mapa google"
          className="iframe_mapa"
        ></iframe>
        <div className="boton_cerrar_popup" onClick={popupCerrar}>
          <HighlightOffIcon />
        </div>
      </div>
    </div>
  );
};

export default PopupGoogle;
