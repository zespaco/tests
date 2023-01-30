import styles from "../../styles/Form.module.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Form = () => {
  const repositorios = [
    { id: 1, name: "Consignado" },
    { id: 2, name: "Saque FGTS" },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ztv7i38', 'template_t0w9egv', form.current, 'aqZ47Fz6CbJ77js92')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form} action="" method="post">
      <div className={styles.test}>
        <h3 className={styles.h3}>Preencha os dados</h3>
        
        
      </div>

      <div className={styles.test2}>
        <div className={styles.group__text}>
          <label className={styles.input__label} htmlFor="Nome">
            Digite o Nome completo
          </label>
          <input
            placeholder="Ex: Miguel da Silva"
            className={styles.input__text}
            type="text"
            name="Nome"
            id=""
          />
        </div>
        <div className={styles.group__text}>
          <label className={styles.input__label} htmlFor="Dtnasc">
            Digite a data de nascimento
          </label>
          <input
            placeholder="Ex: 08/11/1992"
            className={styles.input__text}
            type="text"
            name="Dtnasc"
            id=""
          />
        </div>
        <div className={styles.group__text}>
          <label className={styles.input__label} htmlFor="CPF">
            Digite o CPF
          </label>
          <input
            placeholder="Ex: 123.456.789-12"
            className={styles.input__text}
            type="text"
            name="CPF"
            id=""
          />
        </div>
        <h4 className={styles.simulacao__contato}>CONTATO</h4>
        <div className={styles.group__text}>
          <label className={styles.input__label} htmlFor="Celular">
            Digite o Celular
          </label>
          <input
            placeholder="(XX) XXXXX-XXXX"
            className={styles.input__text}
            type="text"
            name="Celular"
            id=""
          />
        </div>
        <div className={styles.group__text}>
          <label className={styles.input__label} htmlFor="Email">
            Digite o Email (Opcional)
          </label>
          <input
            placeholder="Ex: miguel@email.com"
            className={styles.input__text}
            type="text"
            name="Email"
            id=""
          />
        </div>
      </div>

      <div className={styles.test3}>
        <div className={styles.box__btn}>
        <input type="submit" className={styles.btn} value="Solicitar Simulação "></input>
        </div>
      </div>
    </form>
  );
};

export default Form;
