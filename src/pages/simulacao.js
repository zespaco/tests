import styles from "../../styles/simulacao.module.css";


const Simulacao = () => {
  return (
    <div className={styles.dacerto}>
      <section className={styles.beneficiaryCard}>
        <div className={styles.back}>
          <h2 className={styles.form__h1}>Cartão Beneficiário</h2>
          <p className={styles.form__p}>
            Aproveite todas as vantagens do Cartão Beneficiário. Sem custos
            extras: sem anuidade, taxa de serviço ou taxa de entrega. Confira os
            benefícios exclusivos:
          </p>
          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✓</span>
              Cashback em suas compras
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✓</span>
              Pagamento de contas e boletos
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✓</span>
              Saques em dinheiro em caixas eletrônicos
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✓</span>
              Aceito em milhares de estabelecimentos
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.benefitIcon}>✓</span>
              App exclusivo para gerenciar seu cartão
            </li>
          </ul>
          <p className={styles.form__p}>
            Solicite seu Cartão Beneficiário agora mesmo e tenha mais
            praticidade e segurança em suas transações financeiras.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Simulacao;
