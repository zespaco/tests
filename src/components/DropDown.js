import React from "react";
import { Dropdown } from "@nextui-org/react";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/react";

export default function DropDown() {
  const [selectedColor, setSelectedColor] = React.useState("white");
  const [selectedSize, setSelectedSize] = React.useState(300);

  const menuItems = [
    { key: "consignado", name: "Emprestimo consignado" },
    { key: "fgts", name: "Antecipação saque FGTS" },
    { key: "trocacredito", name: "Troca Credito" },
    { key: "pessoal", name: "Pessoal Inss" },
    { key: "cartaobeneficiario", name: "Cartão Beneficiario" },
    { key: "aberturacartao", name: "Abertura de Conta" },
    { key: "cartaoconsignado", name: "Cartão Consignado" },
    { key: "financiamentoveiculo", name: "Financiamento Veiculo" },
    { key: "refinanciamentoveiculo", name: "Refinanciamento Veiculo" },
    { key: "consorcio", name: "Consorcio" },
  ];

  const router = useRouter();
  return (
    <Dropdown>
      <Dropdown.Button
        css={{
          fontWeight: "$semibold",
          fontSize: "1rem",
          color:"white",
        }}
        className={styles.instituicao}
        light
      >
       Produtos
      </Dropdown.Button>
      <Dropdown.Menu css={
              {
               background:"#f0f0f04",
              }
            } className={styles.aa} aria-label="" items={menuItems}>
        {(item) => (
          <Dropdown.Item
             key={item.key}
            className={styles.aas}
            css={
              {
                borderTop:"1px solid #22222224",
                boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",
                borderBottom:"1px solid #22222224",
                marginTop:"0.5rem",
              }
            }
          >
            <Link css={{
          fontWeight: "$semibold",
          fontSize: "1rem",
          color:"black",
          fontFamily: "$Lato sans-serif",
        }} href={item.key}>{item.name}</Link>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
