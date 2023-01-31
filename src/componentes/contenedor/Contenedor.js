import Header from "../header/Header";
import BanderasSuperior from "../banderas_superior/BanderasSuperior";
import Footer from "../footer/Footer";
import BanderasInferior from "../banderas_inferior/BanderasInferior";
import BotonLlamarFijo from "../boton_llamar_fijo/BotonLlamarFijo";
import ScrollToTop from "react-scroll-to-top";
import { ScrollRestoration } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <BanderasSuperior />
      <main className="layout">{children}</main>
      <ScrollToTop smooth />
      <ScrollRestoration />
      <Footer />
      <BanderasInferior />
      <BotonLlamarFijo />
      <div></div>
    </>
  );
}
