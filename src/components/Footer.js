import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import logoicone from "../../public/favicon.ico";
import whats from "../image/whatsapp.webp";
import face from "../image/facebook.webp";
import insta from "../image/instagram.webp";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="./" className={styles.logo}>
          <Image src={logoicone} className={styles.logoicone}></Image>
        </a>
        <div className={styles.groupfooter}>
          <div className={styles.links}>
            <h3 className={styles.contato}>Entre em contato</h3>
            <ul>
              <li>
                <a
                  className={styles.flex}
                  target="._blank"
                  href="https://api.whatsapp.com/send?phone=5534991152814"
                >
                  <Image className={styles.img__whats2} src={whats}></Image>
                  (34) 99115-2814
                </a>
              </li>
              <li>
                <div href="mailto:cliente@espaçodigitalfinanceiro.com">
                  cliente@espaçodigitalfinanceiro.com
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.social}>
            <h3 className={styles.contato}>Redes Sociais</h3>
            <ul>
              <li>
                <a
                  target="._blank"
                  href="https://www.facebook.com/espacodigitalfinanceiro"
                >
                  <Image className={styles.img__whats} src={face}></Image>
                </a>
              </li>
              <li>
                <a
                  target="._blank"
                  href="https://www.instagram.com/espacodigitalfinanceiro/"
                >
                  <Image className={styles.img__whats} src={insta}></Image>
                </a>
              </li>
            </ul>
            /espacodigitalfinanceiro
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} Empresa Espaço Digital Financeiro,
          instituição financeira, inscrita sob o CNPJ nº 33.535.083/0001-72, com
          sede na Praça Cícero Siqueira, 10 - Serra Dourada Uberaba - MG.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
