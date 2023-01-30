import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
// import { Router } from "react-router-dom";
import styles from "../../styles/Home.module.css";
import DropDown from "./DropDown";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.sub__header}>
        <div className={styles.word__header}>Trabalhamos com vários bancos</div>
      </div>
      <div className={styles.main__header}>
        <div className={styles.container}>
          <a href="#" id={styles.logo}>
            Espaço Digital <br /> Financeiro
          </a>

          <div className={styles.navbar}>
          <DropDown></DropDown>
          <a href="#" className={styles.aa}>Instituição</a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
