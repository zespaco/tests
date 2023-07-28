import styles from "../../styles/simulacao.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Form from "./Form";

const FormMain = ({ Pagetype }) => {
  const router = useRouter();
  const [formHeading, setFormHeading] = useState("Simulação de Empréstimo");
  const [formBody, setFormBody] = useState(
    "Faça uma simulação e contrate seu empréstimo sem sair de casa"
  );
  useEffect(() => {
    if (router.pathname === "/aberturacartao") {
      setFormHeading("Abertura de Conta");
      setFormBody("Abra sua conta sem sair de casa");
    } else if (router.pathname === "/financiamentoveiculo") {
      setFormHeading("Investir em seu veiculo");
      setFormBody(
        "Faça uma simulação e financie o seu sonho de ter um veículo próprio sem sair de casa"
      );
    } else if (router.pathname === "/consorcio") {
      setFormHeading("Investir em seu futuro");
      setFormBody(
        "Faça uma simulação e invista no seu futuro sem sair de casa"
      );
    } else {
      setFormHeading("Simulação de Empréstimo");
      setFormBody(
        "Faça uma simulação e contrate seu empréstimo sem sair de casa"
      );
    }
  }, [router.pathname]);

  return (
    <div className={styles.dacerto}>
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.form__h1}>{formHeading}</h1>
          <p className={styles.form__p}>{formBody}</p>
          <p className={styles.form__p2}>
            Lembre-se de que estamos à disposição para esclarecer qualquer
            dúvida e fornecer orientações de forma transparente durante todo o
            processo de simulação e contratação pelo nosso WhatsApp.
          </p>

          <section className={styles.privacy}>
            <p className={styles.privacy__text}>
              Ao clicar em *Solicitar Simulação*, você está de acordo com as{" "}
              <a
                href="/politicas-de-privacidade"
                className={styles.privacy__link}
              >
                políticas de privacidade de uso e informações do espaço digital
                financeiro
              </a>
              .
            </p>
          </section>
        </div>
      </section>

      <section className={styles.section2}>
        <Form />
      </section>
    </div>
  );
};

export default FormMain;
