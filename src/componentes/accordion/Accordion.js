import * as React from "react";
import "./accordion.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {
  useFetchDelicias,
  useFetchTirso,
  useFetchTetuan,
  useFetchBernardo,
  useFetchCaminos,
  useFetchAlcala,
} from "../../Data";
import GoogleLogo from "../../assets/logo-Google 1.png";
import Accordion2 from "./Accordion2";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1.4rem", color: "#e9bb2d" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({ showPopup, setShowPopup }) {
  const { delicias } = useFetchDelicias();
  const { tirso } = useFetchTirso();
  const { tetuan } = useFetchTetuan();
  const { bernardo } = useFetchBernardo();
  const { caminos } = useFetchCaminos();
  const { alcala } = useFetchAlcala();
  const [expanded, setExpanded] = React.useState("");
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

  const handleChange = (panel) => (event, showPopup) => {
    setExpanded(showPopup ? panel : true);
  };

  return (
    <div className="contenedor_accordion">
      <Accordion2 showPopup={showPopup} />
      <Accordion expanded={expanded === "1"} onChange={handleChange("1")}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography>{delicias?.result?.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className="nombre_tienda">{delicias?.result?.name}</h2>
          <div className="cabecera_estrellas">
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
              <a href="/" className="direccion_accordion">
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
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>{tetuan?.result?.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className="nombre_tienda">{tetuan?.result?.name}</h2>
          <div className="cabecera_estrellas">
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
              <a href="/" className="direccion_accordion">
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
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>{bernardo?.result?.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className="nombre_tienda">{bernardo?.result?.name}</h2>
          <div className="cabecera_estrellas">
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
              <a href="/" className="direccion_accordion">
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
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>{caminos?.result?.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className="nombre_tienda">{caminos?.result?.name}</h2>
          <div className="cabecera_estrellas">
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
              <a href="/" className="direccion_accordion">
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
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>{alcala?.result?.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className="nombre_tienda">{alcala?.result?.name}</h2>
          <div className="cabecera_estrellas">
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
              <a href="/" className="direccion_accordion">
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
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>{tirso?.result?.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h2 className="nombre_tienda">{tirso?.result?.name}</h2>
          <div className="cabecera_estrellas">
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
              <a href="/" className="direccion_accordion">
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
