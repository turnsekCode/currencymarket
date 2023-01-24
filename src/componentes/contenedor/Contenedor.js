import Header from "../header/Header";
import BanderasSuperior from "../banderas_superior/BanderasSuperior";
import Footer from "../footer/Footer";
import BanderasInferior from "../banderas_inferior/BanderasInferior";
import BotonLlamarFijo from "../boton_llamar_fijo/BotonLlamarFijo";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <BanderasSuperior />
      <main className="layout">{children}</main>

      <Footer />
      <BanderasInferior />
      <BotonLlamarFijo />
    </>
  );
}
