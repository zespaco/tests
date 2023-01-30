import styles from "../../styles/Home.module.css";

const CardEmprestimo = () => {
  const repositorio = [
    { id: 1, name: "Solicitar Emprestimo" , key:"solicconsignado"},
    { id: 2, name: "Cartão Consignado" , key:"solicconsignado"},
    { id: 3, name: "Cartão Beneficiário" , key:"solicconsignado"},
    { id: 4, name: "Refinanciamento de Contratos" , key:"solicconsignado"},
  ];
  return (
    <div className={styles.card__emprestimo}>
      <h1 className={styles.card__h1}>Emprestimo Consignado</h1>
      <ul className={styles.card__grid}>
        {repositorio.map((repo) => (
          <li href="#" className={styles.card__menu} key={repo.id}>
            <a className={styles.card__menu__link} href="#">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardEmprestimo;
