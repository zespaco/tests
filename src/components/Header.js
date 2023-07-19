import styles from "../../styles/Home.module.css";
import DropDown from "./DropDown";
const Header = () => {
  return (
    <header className={styles.header}>
     <a href="./" id={styles.logo}>
        Espaço Digital <br></br>
        Financeiro
      </a>
      <nav className={styles.nav}>
        <DropDown></DropDown>
        <a href="./sobrenos" className={styles.instituicao} >
          Instituição
        </a>
      </nav>

    </header>
  );
};

export default Header;
