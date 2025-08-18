import { Outlet } from "react-router-dom";
import { Header } from "../header/Header.jsx";
// import styles from "./La yout.modules.css";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
