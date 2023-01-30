import styles from "../../styles/Form.module.css";
import Form from "../components/Form";

// let titleForm =
const FormMain = (props) => {
  return (
    <div className={styles.display}>
      
      <section className={styles.section}>
        <h1 className={styles.form__h1}>Simulação Emprestimo</h1>
        <p className={styles.form__p}>
          Simule e contrate sem sair de casa para todos <br />
          BPC-LOAS, Aposentados, Pensionistas, Servidores Públicos e FGTS
        </p>
        <p className={styles.form__p}>
            Seguimos as normas LGPD, tornando os dados cadastrados seguros e
            protegidos, tendo o objetivo unicamente para identificação e contato
            ao cliente
          </p>
          <p className={styles.form__p}>
            Ao confirmar o envio dos dados, o cliente está totalmente informado
            para qual afinidade os dados foram solicitados
          </p>
      </section>
      <section className={styles.section2}>
        <Form />
      </section>
      
      
    </div>
  );
};

export default FormMain;
