import styles from "../../styles/Home.module.css";

const Contact = () => {
  return (
    <section className={styles.container__section2}>
      <div className={styles.bg__atendimento}>
        <div className={styles.ultimo__card}>
          <a href="https://api.whatsapp.com/send?phone=5534991152814">
          <img
            className={styles.imgg}
            src="https://img.icons8.com/color/48/undefined/whatsapp--v1.png"
          />
          </a>
          

          <span className={styles.word}>
            Atendimento WhatsApp <br />
            34 9 9115-2814
          </span>
        </div>
        <div className={styles.ultimo__card}>
          <img
            className={styles.imgg}
            src="https://img.icons8.com/ios-filled/50/000000/phone.png"
          />
          <span className={styles.word}>
            Atendimento Loja <br />
            34 3338-0458
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
