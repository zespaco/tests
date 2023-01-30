import styles from "../../styles/Form.module.css";
import Form from "./Form";

// let titleForm =
const FormMain = (props) => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.form__h1}>Simulação Emprestimo</h1>
        <p className={styles.form__p}>
          Simule e contrate sem sair de casa para BPC-LOAS, Aposentados,
          Pensionistas, Servidores Públicos e FGTS
        </p>
      </section>
      <section className={styles.section2}>
        <Form />
      </section>
    </>
  );
};

export default FormMain;
