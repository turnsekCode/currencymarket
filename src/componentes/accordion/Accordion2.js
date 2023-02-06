import React from "react";
import {
  useFetchDelicias,
  useFetchTirso,
  useFetchTetuan,
  useFetchBernardo,
  useFetchCaminos,
  useFetchAlcala,
} from "../../Data";
import GoogleLogo from "../../assets/logo-Google 1.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./accordion.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link  } from "react-scroll";

const Accordion2 = ({ showPopup, setShowPopup, onSelectAlcala, onSelectDelicias, onSelectTetuan, onSelectBernardo, onSelectTirso, onSelectCaminos }) => {
  const { delicias } = useFetchDelicias();
  const { tirso } = useFetchTirso();
  const { tetuan } = useFetchTetuan();
  const { bernardo } = useFetchBernardo();
  const { caminos } = useFetchCaminos();
  const { alcala } = useFetchAlcala();
  const horarios = delicias?.result?.opening_hours?.weekday_text;
  const listaHorarios = horarios?.map((number, i) => (
    <li key={i} className={`dia_${i++}`}>
      {number}
    </li>
  ));

  const resenas = delicias?.result?.rating;
  if (resenas > 4.7) {
    var img_valoracion = 69;
  } else if (resenas < 4.8 && resenas < 4.3) {
    var img_valoracion = 62;
  } else if (resenas < 4.4 && resenas < 3.7) {
    var img_valoracion = 55;
  } else if (resenas < 3.8 && resenas < 3.3) {
    var img_valoracion = 48;
  } else if (resenas < 3.4 && resenas < 2.7) {
    var img_valoracion = 41;
  } else if (resenas < 2.8 && resenas < 2.3) {
    var img_valoracion = 34;
  } else if (resenas < 2.4 && resenas < 1.7) {
    var img_valoracion = 27;
  } else if (resenas < 1.8 && resenas < 1.3) {
    var img_valoracion = 20;
  } else if (resenas < 1.4 && resenas < 0.7) {
    var img_valoracion = 13;
  }
  const toggleTab = (index) => {
    setShowPopup(index);
  };
 
  return (
    <>
      <div
        id="delicias"
        className={
          showPopup === 1
            ? "contenedor_titulo_accordion active"
            : "contenedor_titulo_accordion"
        }
      >
        <span>
          <ArrowForwardIosIcon />
        </span>
        <Link
          to="contendor_mapa"
          smooth={true}
          offset={-110}
          spy={true}
          duration={500}
        >
          <h2
            onClick={() => {
              toggleTab(1);
              onSelectDelicias()
            }}
            className="nombre_tienda"
          >
            {delicias?.result?.name}
          </h2>
        </Link>
      </div>

      <div
        className={
          showPopup === 1
            ? "contenedor_accordion2_active"
            : "contenedor_accordion2"
        }
      >
        <div
          className={
            showPopup === 1 ? "cabecera_estrellas_active" : "cabecera_estrellas"
          }
        >
          <span
            className="boton_cierre"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            <HighlightOffIcon />
          </span>
          <div className="contenedor_google_accordion">
            <div className="logo_google">
              <img src={GoogleLogo} alt="" />
            </div>
            <div className="contenedor_resenas">
              <span>{delicias?.result?.rating}</span>
              <span className="img_stars">
                <span
                  style={{ width: img_valoracion }}
                  className="imgValoracion"
                ></span>
              </span>
              <div className="numero_reviews">
                <span>{delicias?.result?.user_ratings_total}</span> reseñas de
                Google
              </div>
            </div>
          </div>
          <div>
            <p className="contacto_accordion">Contacto:</p>
            <a
              href="http://bit.ly/3X3XYRj"
              rel="noreferrer"
              target="_blank"
              className="direccion_accordion"
            >
              {delicias.result?.formatted_address}
            </a>
            <br></br>
            <a
              href={`tel:${delicias.result?.international_phone_number}`}
              className="telefono_accordion"
            >
              {delicias.result?.international_phone_number}
            </a>
          </div>
          <div className="contenedor_horarios">
            <p className="contacto_accordion">Horarios:</p> {listaHorarios}
          </div>
        </div>
      </div>
      <Link to="contendor_mapa" smooth={true} offset={-110} duration={500}>
        <div
          onClick={() => {
            toggleTab(4);
            onSelectTirso()
          }}
          id="tirso"
          className={
            showPopup === 4
              ? "contenedor_titulo_accordion active"
              : "contenedor_titulo_accordion"
          }
        >
          <span>
            <ArrowForwardIosIcon />
          </span>
          <h2 className="nombre_tienda">{tirso?.result?.name}</h2>
        </div>
      </Link>
      <div
        className={
          showPopup === 4
            ? "contenedor_accordion2_active"
            : "contenedor_accordion2"
        }
      >
        <div
          className={
            showPopup === 4 ? "cabecera_estrellas_active" : "cabecera_estrellas"
          }
        >
          <span
            className="boton_cierre"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            <HighlightOffIcon />
          </span>
          <div className="contenedor_google_accordion">
            <div className="logo_google">
              <img src={GoogleLogo} alt="" />
            </div>
            <div className="contenedor_resenas">
              <span>{tirso?.result?.rating}</span>
              <span className="img_stars">
                <span
                  style={{ width: img_valoracion }}
                  className="imgValoracion"
                ></span>
              </span>
              <div className="numero_reviews">
                <span>{tirso?.result?.user_ratings_total}</span> reseñas de
                Google
              </div>
            </div>
          </div>
          <div>
            <p className="contacto_accordion">Contacto:</p>
            <a
              href="http://bit.ly/3tFiXwm"
              rel="noreferrer"
              target="_blank"
              className="direccion_accordion"
            >
              {tirso.result?.formatted_address}
            </a>
            <br></br>
            <a
              href={`tel:${tirso.result?.international_phone_number}`}
              className="telefono_accordion"
            >
              {tirso.result?.international_phone_number}
            </a>
          </div>
          <div className="contenedor_horarios">
            <p className="contacto_accordion">Horarios:</p> {listaHorarios}
          </div>
        </div>
      </div>
      <Link to="contendor_mapa" smooth={true} offset={-110} duration={500}>
        <div
          onClick={() => {
            toggleTab(3);
            onSelectCaminos()
          }}
          id="caminos"
          className={
            showPopup === 3
              ? "contenedor_titulo_accordion active"
              : "contenedor_titulo_accordion"
          }
        >
          <span>
            <ArrowForwardIosIcon />
          </span>

          <h2 className="nombre_tienda">{caminos?.result?.name}</h2>
        </div>
      </Link>
      <div
        className={
          showPopup === 3
            ? "contenedor_accordion2_active"
            : "contenedor_accordion2"
        }
      >
        <div
          className={
            showPopup === 3 ? "cabecera_estrellas_active" : "cabecera_estrellas"
          }
        >
          <span
            className="boton_cierre"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            <HighlightOffIcon />
          </span>
          <div className="contenedor_google_accordion">
            <div className="logo_google">
              <img src={GoogleLogo} alt="" />
            </div>
            <div className="contenedor_resenas">
              <span>{caminos?.result?.rating}</span>
              <span className="img_stars">
                <span
                  style={{ width: img_valoracion }}
                  className="imgValoracion"
                ></span>
              </span>
              <div className="numero_reviews">
                <span>{caminos?.result?.user_ratings_total}</span> reseñas de
                Google
              </div>
            </div>
          </div>
          <div>
            <p className="contacto_accordion">Contacto:</p>
            <a
              href="http://bit.ly/3EFq1iI"
              rel="noreferrer"
              target="_blank"
              className="direccion_accordion"
            >
              {caminos.result?.formatted_address}
            </a>
            <br></br>
            <a
              href={`tel:${caminos.result?.international_phone_number}`}
              className="telefono_accordion"
            >
              {caminos.result?.international_phone_number}
            </a>
          </div>
          <div className="contenedor_horarios">
            <p className="contacto_accordion">Horarios:</p> {listaHorarios}
          </div>
        </div>
      </div>
      <Link to="contendor_mapa" smooth={true} offset={-110} duration={500}>
        <div
          onClick={() => {
            toggleTab(2);
            onSelectBernardo()
          }}
          id="bernardo"
          className={
            showPopup === 2
              ? "contenedor_titulo_accordion active"
              : "contenedor_titulo_accordion"
          }
        >
          <span>
            <ArrowForwardIosIcon />
          </span>

          <h2 className="nombre_tienda">{bernardo?.result?.name}</h2>
        </div>
      </Link>
      <div
        className={
          showPopup === 2
            ? "contenedor_accordion2_active"
            : "contenedor_accordion2"
        }
      >
        <div
          className={
            showPopup === 2 ? "cabecera_estrellas_active" : "cabecera_estrellas"
          }
        >
          <span
            className="boton_cierre"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            <HighlightOffIcon />
          </span>
          <div className="contenedor_google_accordion">
            <div className="logo_google">
              <img src={GoogleLogo} alt="" />
            </div>
            <div className="contenedor_resenas">
              <span>{bernardo?.result?.rating}</span>
              <span className="img_stars">
                <span
                  style={{ width: img_valoracion }}
                  className="imgValoracion"
                ></span>
              </span>
              <div className="numero_reviews">
                <span>{bernardo?.result?.user_ratings_total}</span> reseñas de
                Google
              </div>
            </div>
          </div>
          <div>
            <p className="contacto_accordion">Contacto:</p>
            <a
              href="http://bit.ly/3V13uCi"
              rel="noreferrer"
              target="_blank"
              className="direccion_accordion"
            >
              {bernardo.result?.formatted_address}
            </a>
            <br></br>
            <a
              href={`tel:${bernardo.result?.international_phone_number}`}
              className="telefono_accordion"
            >
              {bernardo.result?.international_phone_number}
            </a>
          </div>
          <div className="contenedor_horarios">
            <p className="contacto_accordion">Horarios:</p> {listaHorarios}
          </div>
        </div>
      </div>
      <Link to="contendor_mapa" smooth={true} offset={-110} duration={500}>
        <div
          onClick={() => {
            toggleTab(6);
            onSelectAlcala()
          }}
          id="alcala"
          className={
            showPopup === 6
              ? "contenedor_titulo_accordion active"
              : "contenedor_titulo_accordion"
          }
        >
          <span>
            <ArrowForwardIosIcon />
          </span>{" "}
          <h2 className="nombre_tienda">{alcala?.result?.name}</h2>
        </div>
      </Link>
      <div
        className={
          showPopup === 6
            ? "contenedor_accordion2_active"
            : "contenedor_accordion2"
        }
      >
        <div
          className={
            showPopup === 6 ? "cabecera_estrellas_active" : "cabecera_estrellas"
          }
        >
          <span
            className="boton_cierre"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            <HighlightOffIcon />
          </span>
          <div className="contenedor_google_accordion">
            <div className="logo_google">
              <img src={GoogleLogo} alt="" />
            </div>
            <div className="contenedor_resenas">
              <span>{alcala?.result?.rating}</span>
              <span className="img_stars">
                <span
                  style={{ width: img_valoracion }}
                  className="imgValoracion"
                ></span>
              </span>
              <div className="numero_reviews">
                <span>{alcala?.result?.user_ratings_total}</span> reseñas de
                Google
              </div>
            </div>
          </div>
          <div>
            <p className="contacto_accordion">Contacto:</p>
            <a
              href="http://bit.ly/3THXcpZ"
              rel="noreferrer"
              target="_blank"
              className="direccion_accordion"
            >
              {alcala.result?.formatted_address}
            </a>
            <br></br>
            <a
              href={`tel:${alcala.result?.international_phone_number}`}
              className="telefono_accordion"
            >
              {alcala.result?.international_phone_number}
            </a>
          </div>
          <div className="contenedor_horarios">
            <p className="contacto_accordion">Horarios:</p> {listaHorarios}
          </div>
        </div>
      </div>
      <Link to="contendor_mapa" smooth={true} offset={-110} duration={500}>
        <div
          onClick={() => {
            //handleChange(5);
            //setShowPopup(null);
            toggleTab(5);
            onSelectTetuan()
          }}
          id="tetuan"
          className={
            showPopup === 5
              ? "contenedor_titulo_accordion active"
              : "contenedor_titulo_accordion"
          }
        >
          <span>
            <ArrowForwardIosIcon />
          </span>{" "}
          <h2 className="nombre_tienda">{tetuan?.result?.name}</h2>
        </div>
      </Link>
      <div
        className={
          showPopup === 5
            ? "contenedor_accordion2_active"
            : "contenedor_accordion2"
        }
      >
        <div
          className={
            showPopup === 5 ? "cabecera_estrellas_active" : "cabecera_estrellas"
          }
        >
          <span
            className="boton_cierre"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            <HighlightOffIcon />
          </span>
          <div className="contenedor_google_accordion">
            <div className="logo_google">
              <img src={GoogleLogo} alt="" />
            </div>
            <div className="contenedor_resenas">
              <span>{tetuan?.result?.rating}</span>
              <span className="img_stars">
                <span
                  style={{ width: img_valoracion }}
                  className="imgValoracion"
                ></span>
              </span>
              <div className="numero_reviews">
                <span>{tetuan?.result?.user_ratings_total}</span> reseñas de
                Google
              </div>
            </div>
          </div>
          <div>
            <p className="contacto_accordion">Contacto:</p>
            <a
              href="http://bit.ly/3EgcXPx"
              rel="noreferrer"
              target="_blank"
              className="direccion_accordion"
            >
              {tetuan.result?.formatted_address}
            </a>
            <br></br>
            <a
              href={`tel:${tetuan.result?.international_phone_number}`}
              className="telefono_accordion"
            >
              {tetuan.result?.international_phone_number}
            </a>
          </div>
          <div className="contenedor_horarios">
            <p className="contacto_accordion">Horarios:</p> {listaHorarios}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion2;
