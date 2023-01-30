import styles from "../../styles/Home.module.css";

const CardCartao = () => {
  const repositorio = [
    { id: 1, name: "Disponível para negativado" },
    { id: 2, name: "Não precisa pagar parcelas mensais" },
  ];
  return (
    <div className={styles.card__emprestimo}>
      <h3 className={styles.card__h1}>Emprestimo FGTS</h3>
      <ul className={styles.card__grid}>
        {repositorio.map((repo) => (
          <li href="#" className={styles.card__menu__cartao} key={repo.id}>
            {repo.name}
          </li>
        ))}
      </ul>
      <div className={styles.center__cartao}>
        <a href="#" className={styles.cartao__button}>Saber mais</a>
      </div>
    </div>
  );
};

export default CardCartao;
