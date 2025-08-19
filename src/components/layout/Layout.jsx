import { Outlet } from "react-router-dom";
import { Header } from "../header/Header.jsx";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
}
