import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Image from "next/image";

import toque from "../image/toque.webp";
import consignado from "../image/mulher-sorrindo.webp";
import fgts from "../image/homem-comemorando.webp";
import troca from "../image/troque-credito.webp";
import pessoal from "../image/mulher-dinheiro-mao.webp";
import cartaob from "../image/cartao-beneficiario.webp";
import abertura from "../image/abertura-cartao.webp";
import cartaoc from "../image/cartao-consignado.webp";
import financiamento from "../image/financiamento-veiculo.webp";
import refinanciamento from "../image/refinanciamento-veiculo.webp";
import consorcio from "../image/consorcio.webp";
import whats from "../image/whatsapp.webp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Espaço Digital Financeiro</title>
        <meta name="description"  />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </Head>

      <Header></Header>

      <main>
        <section className={styles.hero}>
          <div className={styles.title__slide}>
            Bem-vindo à nossa plataforma de serviços financeiro
          </div>
          <p className={styles.frase__slide}>
            Aqui você encontra soluções para suas necessidades financeiras, de
            forma rápida, segura e confiável.
          </p>

          <div className={styles.linha}>
            <div className={styles.bloco1}>
              <div className={styles.linha2}>
                <div>Aperte o card para saber mais </div>
                <Image src={toque} className={styles.toque__slide}></Image>
              </div>
              <div className={styles.linha2}>
                Preencha o formulario com seus dados que entraremos em contato
              </div>
            </div>
            <a
              className={styles.bloco2}
              href="https://api.whatsapp.com/send?phone=5534991152814"
            >
              <Image className={styles.img__whats} src={whats}></Image>

              <i className={styles.whats__tel}>
                Solicite pelo Whatsapp <br />
                34 99115-2814
              </i>
            </a>
          </div>
        </section>
        <div className={styles.titulos__services}>Emprestimos</div>
        <section className={styles.services}>
          <a href="../consignado" className={styles.card}>
            <Image src={consignado} className={styles.img}></Image>
            <div className={styles.card__image}></div>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Empréstimo Consignado</h3>
              <p className={styles.card__description}>
                Público: Aposentados, pensionitas, BPC-LOAS e servidores
                públicos.
              </p>

              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Aperte Saber mais
              </button>
            </div>
          </a>
          <a href="../fgts" className={styles.card}>
            <Image src={fgts} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Antecipação FGTS</h3>

              <p className={styles.card__description}>
                Realize a antecipação do seu Fundo de Garantia de forma rápida e
                segura.
              </p>
              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saber mais
              </button>
            </div>
          </a>

          <a href="../trocacredito" className={styles.card}>
            <Image src={troca} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>
                Emprestimo Pessoal Troca Crédito
              </h3>

              <p className={styles.card__description}>
                Empréstimo pessoal utilizando o limite disponivel do seu cartão
                de crédito.
              </p>

              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saber mais
              </button>
            </div>
          </a>

          <a href="../pessoal" className={styles.card}>
            <Image src={pessoal} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Empréstimo Pessoal</h3>
              <p className={styles.card__description}>
                Público:Exclusivo para beneficiarios do inss
                <br />
              </p>
              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saiba as Condições
              </button>
            </div>
          </a>
        </section>
        <div className={styles.titulos__services}>Cartões</div>
        <section className={styles.services}>
          <a href="../cartaobeneficiario" className={styles.card}>
            <Image src={cartaob} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Cartão Beneficiario</h3>
              <p className={styles.card__description}>
                Público: Aposentados, pensionitas, BPC-LOAS e servidores
                públicos.
              </p>
              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saber mais
              </button>
            </div>
          </a>
          <a href="../aberturacartao" className={styles.card}>
            <Image src={abertura} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Abertura de Conta</h3>
              <p className={styles.card__description}>
                Abra sua conta corrente facilmente e tenha chance a crédito.
              </p>

              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saber mais
              </button>
            </div>
          </a>

          <a href="../cartaoconsignado" className={styles.card}>
            <Image src={cartaoc} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Cartão Consignado</h3>
              <p className={styles.card__description}>
                Público: Aposentados, pensionitas, BPC-LOAS e servidores
                públicos.
              </p>

              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saber mais
              </button>
            </div>
          </a>
        </section>

        <div className={styles.titulos__services}>Veiculos</div>
        <section className={styles.services}>
          <a href="../financiamentoveiculo" className={styles.card}>
            <Image src={financiamento} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Financiamento de Veiculo</h3>
              <p className={styles.card__description}>
                Realize o sonho do seu novo carro com nosso financiamento.
              </p>

              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saber mais
              </button>
            </div>
          </a>

          <a href="../refinanciamentoveiculo" className={styles.card}>
            <Image src={refinanciamento} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Refinanciamento de Veiculo</h3>
              <p className={styles.card__description}>
                Utilize seu carro como garantia e obtenha um empréstimo com
                condições vantajosas.
              </p>
              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saber mais
              </button>
            </div>
          </a>

          <a href="../consorcio" className={styles.card}>
            <Image src={consorcio} className={styles.img}></Image>
            <div className={styles.card__content}>
              <h3 className={styles.card__title}>Consorcio</h3>
              <p className={styles.card__description}>
                Planeje seus sonhos com o consórcio e conquiste sua casa ou bem
                desejado.
              </p>
              <button className={styles.card__button}>
                <Image src={toque} className={styles.toque}></Image>
                Saber mais
              </button>
            </div>
          </a>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
