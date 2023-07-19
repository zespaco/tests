import styles from "../../styles/Form.module.css";
import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import ReCAPTCHA from "react-google-recaptcha";
const CAPTCHA_SITE_KEY = "6Lf2RzknAAAAAFqo58LzF2rAii86boOlUxV0ATTQ";

const Form = ({ Pagetype }) => {
  const router = useRouter();
  const [showAnimation, setShowAnimation] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [formUrl, setformUrl] = useState(
    "Faça uma simulação e contrate seu empréstimo sem sair de casa"
  );
  useEffect(() => {
    if (router.pathname === "/aberturacartao") {
      setformUrl("Abertura de Conta");
    } else if (router.pathname === "/financiamentoveiculo") {
      setformUrl("financiamento de veiculo");
    } else if (router.pathname === "/consorcio") {
      setformUrl("consorcio");
    } else if (router.pathname === "/consignado") {
      setformUrl("Emprestimo Consignado");
    } else if (router.pathname === "/fgts") {
      setformUrl("Emprestimo FGTS");
    } else if (router.pathname === "/trocacredito") {
      setformUrl("Emprestimo Pessoal Troca Credito");
    } else if (router.pathname === "/pessoal") {
      setformUrl("Emprestimo Pessoal IDOSO");
    } else if (router.pathname === "/cartaobeneficiario") {
      setformUrl("Emprestimo Cartão beneficiario");
    } else if (router.pathname === "/cartaoconsignado") {
      setformUrl("Emprestimo cartão consignado");
    } else {
      setformUrl("erro");
    }
  }, [router.pathname]);

  const sendEmail = (e) => {
    e.preventDefault();

    const isFormValid = validateForm();

    if (isFormValid) {
      emailjs
        .sendForm(
          "service_ztv7i38",
          "template_t0w9egv",
          form.current,
          "aqZ47Fz6CbJ77js92"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setShowForm(false);
      setShowAnimation(true);

      e.target.reset();
      setTimeout(() => {
        setShowAnimation(false);
        setShowForm(true);
      }, 10000);
    } else {
      window.scrollTo(0, form.current.offsetTop);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "CPF") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      form.current.CPF.value = formattedValue;
    }
  };
  const handleCellphoneBlur = (e) => {
    const { value } = e.target;
    const phoneDigits = value.replace(/[^\d]/g, "");
    if (phoneDigits.length === 11) {
      const formattedPhone =
        "(" +
        phoneDigits.substring(0, 2) +
        ") " +
        phoneDigits.substring(2, 7) +
        "-" +
        phoneDigits.substring(7, 11);
      form.Celular = formattedPhone;
      e.target.value = formattedPhone;
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!form.current.Nome.value.trim()) {
      errors.Nome = "Campo obrigatório";
    } else {
      const nameParts = form.current.Nome.value.trim().split(" ");
      if (nameParts.length < 2 || nameParts.some((part) => part.length < 2)) {
        errors.Nome = "Informe um Nome e Sobrenome válidos";
      }
    }

    if (!form.current.CPF.value.trim()) {
      errors.CPF = "Campo obrigatório";
    } else if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(form.current.CPF.value)) {
      errors.CPF = "CPF inválido";
    }

    if (!form.current.Celular.value.trim()) {
      errors.Celular = "Campo obrigatório";
    } else {
      const phoneDigits = form.current.Celular.value.replace(/[^\d]/g, "");
      if (phoneDigits.length !== 11) {
        errors.Celular = "O número de celular deve conter 11 dígitos";
      } else if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(form.current.Celular.value)) {
        errors.Celular = "Formato inválido (Ex: (99) 99999-9999)";
      }
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div className={styles.main}>
      <div className={styles.testando}>
        {showAnimation ? (
          <div className="animation-container">
            <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
            <p className="animation-text">Dados Recebidos</p> <br></br>
            <p className="animation-text">Em breve entraremos em contato</p>
          </div>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            id="form"
            className={styles.form}
            action=""
            method="post"
          >
            {showAnimation && (
              <div className="animation-container">
                <div className="loader"></div>
                <p className="animation-text">Dados recebidos com sucesso!</p>
              </div>
            )}

            <div className={styles.test}>
              <h3 className={styles.h3}>Preencha os dados</h3>
            </div>

            <div className={styles.test2}>
              <div className={styles.group__text}>
                <label className={styles.input__inv} htmlFor="Url"></label>
                <input
                  className={styles.input__inv}
                  type="text"
                  name="Url"
                  id="Url"
                  value={formUrl}
                  readOnly
                />
              </div>
              <div className={styles.group__text}>
                <label className={styles.input__label} htmlFor="Nome">
                  Digite o NOME completo
                </label>
                <input
                  placeholder="Ex: Miguel da Silva"
                  className={`${styles.input__text} ${
                    formErrors.Nome ? styles.input__error : ""
                  }`}
                  type="text"
                  name="Nome"
                  id=""
                />
                {formErrors.Nome && (
                  <div className={styles.error}>{formErrors.Nome}</div>
                )}
              </div>
              <div className={styles.group__text}>
                <label className={styles.input__label} htmlFor="CPF">
                  Digite o CPF
                </label>
                <input
                  placeholder="Ex: 123.456.789-12"
                  className={`${styles.input__text} ${
                    formErrors.CPF ? styles.input__error : ""
                  }`}
                  type="text"
                  name="CPF"
                  id=""
                  onChange={handleInputChange}
                />
                {formErrors.CPF && (
                  <div className={styles.error}>{formErrors.CPF}</div>
                )}
              </div>
              <h4 className={styles.simulacao__contato}>CONTATO</h4>
              <div className={styles.group__text}>
                <label className={styles.input__label} htmlFor="Celular">
                  Digite o Celular com DDD
                </label>
                <input
                  placeholder="(XX) XXXXX-XXXX"
                  className={`${styles.input__text} ${
                    formErrors.Celular ? styles.input__error : ""
                  }`}
                  type="text"
                  name="Celular"
                  id=""
                  onChange={handleCellphoneBlur}
                />
                {formErrors.Celular && (
                  <div className={styles.error}>{formErrors.Celular}</div>
                )}
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

            <div className={styles.recaptchaContainer}>
              <ReCAPTCHA sitekey={CAPTCHA_SITE_KEY} />
            </div>
            <div className={styles.test3}>
              <div className={styles.box__btn}>
                <input
                  type="submit"
                  className={styles.btn}
                  value="Solicitar Simulação"
                ></input>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
