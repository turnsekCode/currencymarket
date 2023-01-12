import Header from "../header/Header";
import BanderasSuperior from "../banderas_superior/BanderasSuperior";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <BanderasSuperior />
      <main className="layout">{children}</main>
    </>
  );
}
