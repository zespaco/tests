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
    { key: "cartaoconsignado", name: "Cartão Consignado" },
    { key: "cartaobeneficiario", name: "Cartão beneficiario" },
  ];

  const router = useRouter();
  return (
    <Dropdown>
      <Dropdown.Button
        color={selectedColor}
        css={{
          fontWeight: "$semibold",
          fontSize: "1rem",
          fontFamily: "$Lato sans-serif",
        }}
        className={styles.aa}
        light
      >
        Emprestimos
      </Dropdown.Button>
      <Dropdown.Menu className={styles.aa} aria-label="" items={menuItems}>
        {(item) => (
          <Dropdown.Item
            // key={item.key}
            // color={item.key === "cartaob" ? "error" : "default"}
            className={styles.aas}
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
