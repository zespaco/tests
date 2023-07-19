import { useState } from "react";
import styles from "../../styles/Faq.module.css";

const Faq = ({ pageType }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const consignadoFaqs = [
    {
      question: "O que é empréstimo consignado?",
      answer:
        "O empréstimo consignado é uma modalidade de crédito na qual o valor das parcelas é descontado diretamente do salário, aposentadoria ou pensão do solicitante. Ele oferece taxas de juros mais baixas em comparação a outras formas de crédito, tornando-se uma opção acessível para quem precisa de dinheiro .",
    },
    {
      question: "É seguro contratar um empréstimo consignado?",
      answer:
        "Sim, o empréstimo consignado é seguro, desde que você contrate com uma instituição financeira confiável e autorizada. Certifique-se de ler atentamente o contrato, entender todas as cláusulas e tirar todas as suas dúvidas antes de assinar. ",
    },
    {
      question: " Quem pode solicitar um empréstimo consignado?",
      answer:
        "O empréstimo consignado está disponível para aposentados, BPC-LOAS, pensionistas e servidores públicos. É necessário ter margem consignável disponível, ou seja, uma parte do salário ou benefício que pode ser comprometida para pagamento das parcelas.",
    },
    {
      question: "Qual é a taxa de juros do empréstimo consignado?",
      answer:
        "A taxa de juros do empréstimo consignado é uma das mais baixas do mercado. A taxa pode variar dependendo do convênio, Atualmente 1,97%  para emprestimo consignado.",
    },
    {
      question: " Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar,  sinta-se à vontade para entrar em contato conosco pelo WhatsApp.",
    },
  ];
  const fgtsFaqs = [
    {
      question: "O que é Antecipação do Saque FGTS?",
      answer:
        "A Antecipação do Saque FGTS é uma modalidade de crédito que permite adiantar parte do valor que você teria direito a receber no futuro do seu Fundo de Garantia por Tempo de Serviço. É uma opção financeira para obter recursos imediatos e atender suas necessidades presentes.",
    },
    {
      question: "É seguro contratar a Antecipação do Saque FGTS?",
      answer:
        "Sim, a Antecipação do Saque FGTS é segura, desde que você contrate com uma instituição financeira confiável e autorizada. Verifique cuidadosamente os termos do contrato, tire todas as suas dúvidas e assegure-se de entender todas as condições antes de prosseguir.",
    },
    {
      question: "Saldo FGTS bloqueado o que é?",
      answer:
        "Quando um trabalhador antecipa o saldo do FGTS , o valor antecipado é descontado do saldo total disponível na conta do FGTS, ficando reservado para pagar o valor adiantado.",
    },
    {
      question: "Quem pode solicitar a Antecipação do Saque FGTS?",
      answer:
        "A Antecipação do Saque FGTS está disponível para trabalhadores que possuem saldo disponível no FGTS e atendem aos requisitos estabelecidos. Verifique sua elegibilidade e confira as condições necessárias para solicitar a antecipação.",
    },
    {
      question: "Qual é a taxa de juros da Antecipação do Saque FGTS?",
      answer:
        "As taxas de juros da Antecipação do Saque FGTS podem variar de acordo com a instituição financeira. É importante comparar as opções disponíveis e buscar taxas competitivas. Certifique-se de entender completamente as taxas aplicadas antes de tomar uma decisão.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar. Fique à vontade para entrar em contato conosco pelo WhatsApp e esclarecer todas as suas dúvidas sobre a Antecipação do Saque FGTS.",
    },
  ];
  const troqueFaqs = [
    {
      question: "O que é troca de crédito?",
      answer:
        "A troca de crédito é uma modalidade de crédito na qual você troca o crédito disponivel no cartão por dinheiro, o desconto das parcelas através da própria fatura do seu cartão de crédito. ",
    },
    {
      question: "É seguro contratar a troca de crédito?",
      answer:
        "Sim, a troca de crédito é segura, desde que você contrate com uma instituição financeira confiável e autorizada. Certifique-se de ler atentamente o contrato, entender todas as cláusulas e tirar todas as suas dúvidas antes de assinar.",
    },
    {
      question: "Quem pode solicitar a troca de crédito?",
      answer:
        "A troca de crédito está aberta para todos que tem limite de crédito disponivel a partir de R$400,00.",
    },
    {
      question: "Qual o valor máximo consigo da troca de crédito?",
      answer:
        "Com a troca de crédito, você tem a possibilidade de obter valores de R$400 até R$10.000 em uma única solicitação.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar. Sinta-se à vontade para entrar em contato conosco pelo WhatsApp e esclarecer todas as suas dúvidas sobre a troca de crédito.",
    },
  ];

  const pessoalFaqs = [
    {
      question: "O que é empréstimo pessoal?",
      answer:
        "O empréstimo pessoal é uma modalidade de crédito na qual você recebe uma quantia em dinheiro e deve pagar em parcelas fixas ao longo de um período determinado. Ele pode ser utilizado para diversos fins, como pagamento de dívidas, despesas médicas, viagens, entre outros.",
    },
    {
      question: "É seguro contratar um empréstimo pessoal?",
      answer:
        "Sim, é seguro contratar um empréstimo pessoal, desde que você faça isso com uma instituição financeira confiável e autorizada. Verifique cuidadosamente as condições do contrato, as taxas de juros, os prazos e certifique-se de entender todas as cláusulas antes de assinar.",
    },
    {
      question: "Quem pode solicitar um empréstimo pessoal?",
      answer:
        "O empréstimo pessoal está disponível para pessoas que atendem aos critérios estabelecidos pela instituição financeira, como ter uma renda comprovada, idade mínima e possuir documentação necessária. Cada instituição pode ter seus próprios requisitos específicos.",
    },
    {
      question: "Qual é a taxa de juros do empréstimo pessoal?",
      answer:
        "A taxa de juros do empréstimo pessoal pode variar de acordo com a instituição financeira, o valor solicitado e o perfil do solicitante. É importante comparar as opções disponíveis e buscar taxas competitivas. Verifique as condições oferecidas antes de tomar uma decisão.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar. Sinta-se à vontade para entrar em contato conosco pelo WhatsApp e esclarecer todas as suas dúvidas sobre o empréstimo pessoal.",
    },
  ];

  const cartaoBeneficiarioFaqs = [
    {
      question: "O que é o cartão do beneficiário?",
      answer:
        "É um cartão de crédito consignado, semelhante a um cartão de crédito comum, mas que oferece benefícios gratuitos ao titular, como: desconto em farmácias.",
    },
    {
      question: "Como solicitar o cartão do beneficiário?",
      answer:
        "O cartão beneficiario está disponível para aposentados, BPC-LOAS, pensionistas e servidores públicos que possuem margem consignável disponível. É necessário atender aos requisitos estabelecidos pelo banco emissor do cartão.",
    },
    {
      question: "Quais são as vantagens do cartão do beneficiário?",
      answer:
        "O cartão do beneficiário oferece diversas vantagens, como desconto em farmacias, auxílio e assistência funeral gratuitos (INSS).",
    },
    {
      question: "Quais são as taxas e tarifas do cartão do beneficiário?",
      answer:
        "As taxas de juros do cartão consignado podem variar de acordo com o banco emissor e o convênio. No entanto, em geral, as taxas são mais baixas do que as dos cartões de crédito convencionais. É importante consultar o banco emissor para obter informações precisas sobre as taxas aplicadas.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar. Entre em contato conosco pelo WhatsApp e esclareça todas as suas dúvidas sobre o cartão do beneficiário.",
    },
  ];

  const aberturaFaqs = [
    {
      question:
        "Quais são os documentos necessários para abrir uma conta bancária?",
      answer:
        "Os documentos necessários incluem CPF, RG e comprovante de residência.",
    },
    {
      question: "Quais são os benefícios de abrir uma conta bancária?",
      answer:
        "Abrir uma conta bancária oferece diversos benefícios, como a segurança de guardar o dinheiro em um local seguro, a praticidade de realizar transações financeiras, como pagamentos e transferências, a facilidade de receber salários e benefícios diretamente na conta, entre outros.",
    },
    
    {
      question: "Existem taxas ou tarifas para abrir uma conta bancária?",
      answer:
        "Você conta com diversas opções de pacotes de serviços, algumas delas você consegue tarifa zero e sem anuidade, Você escolhe.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Estamos aqui para ajudar! Se você possui mais dúvidas sobre a abertura de conta bancária, entre em contato conosco pelo WhatsApp e teremos prazer em esclarecer suas dúvidas.",
    },
  ];
  const cartaoConsignadoFaqs = [
    {
      question: "O que é o cartão consignado?",
      answer:
        "O cartão consignado é uma modalidade de cartão de crédito vinculado ao seu salário, aposentadoria ou pensão. Ele permite realizar compras e saques, e o valor das faturas é descontado diretamente do seu benefício mensal, oferecendo mais segurança e controle nas suas finanças.",
    },
    {
      question: "Quais são as vantagens do cartão consignado?",
      answer:
        "O cartão consignado oferece diversas vantagens, como taxas de juros reduzidas, limite de crédito pré-aprovado, praticidade para realizar compras e saques, além da facilidade de pagamento, com desconto direto na folha de pagamento.",
    },
    {
      question: "Quem pode solicitar um cartão consignado?",
      answer:
        "O cartão consignado está disponível para aposentados, BPC-LOAS, pensionistas e servidores públicos que possuem margem consignável disponível. É necessário atender aos requisitos estabelecidos pelo banco emissor do cartão.",
    },
    {
      question: "Qual é a taxa de juros do cartão consignado?",
      answer:
        "As taxas de juros do cartão consignado podem variar de acordo com o banco emissor e o convênio. No entanto, em geral, as taxas são mais baixas do que as dos cartões de crédito convencionais. É importante consultar o banco emissor para obter informações precisas sobre as taxas aplicadas.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar. Fique à vontade para entrar em contato conosco pelo WhatsApp e esclarecer todas as suas dúvidas sobre o cartão consignado.",
    },
  ];

  const financiamentoVeiculoFaqs = [
    {
      question: "O que é o financiamento de veículo?",
      answer:
        "O financiamento de veículo é uma modalidade de crédito na qual você obtém o valor necessário para comprar um veículo, pagando-o em parcelas ao longo de um período determinado. Essa é uma opção para adquirir um veículo novo ou usado sem precisar desembolsar o valor total de uma só vez.",
    },
    {
      question:
        "Quais são os requisitos para obter um financiamento de veículo?",
      answer:
        "Os requisitos para obter um financiamento de veículo podem variar de acordo com a instituição financeira. Geralmente, é necessário ter uma renda comprovada, apresentar documentação pessoal e do veículo, além de atender às políticas de crédito estabelecidas pela instituição. Verifique com o banco ou instituição financeira os requisitos específicos.",
    },
    {
      question: "Quais são as vantagens de um financiamento de veículo?",
      answer:
        "O financiamento de veículo oferece diversas vantagens, como a possibilidade de adquirir um veículo mesmo sem ter o valor total em mãos, a flexibilidade de pagamento em parcelas fixas, taxas de juros competitivas, facilidade na obtenção do crédito e a possibilidade de escolher o prazo de pagamento que melhor se encaixa no seu orçamento.",
    },
    {
      question: "Qual é a taxa de juros do financiamento de veículo?",
      answer:
        "A taxa de juros do financiamento de veículo pode variar de acordo com a instituição financeira, o valor financiado, o prazo de pagamento e outras variáveis. É importante pesquisar e comparar as opções disponíveis no mercado para obter as melhores condições.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar. Fique à vontade para entrar em contato conosco pelo WhatsApp e esclarecer todas as suas dúvidas sobre o financiamento de veículo.",
    },
  ];

  const refinanciamentoVeiculoFaqs = [
    {
      question: "O que é refinanciamento de veículo?",
      answer:
        "O refinanciamento de veículo é uma modalidade de crédito na qual você utiliza seu veículo quitado como garantia para obter um empréstimo. Nessa operação, você recebe um valor com base no valor de mercado do veículo e, em contrapartida, assume parcelas mensais para quitar o empréstimo.",
    },
    {
      question:
        "Quais são os requisitos para obter um refinanciamento de veículo?",
      answer:
        "Para obter um refinanciamento de veículo, é necessário que o veículo esteja quitado, ou seja, sem pendências financeiras. Além disso, você precisará apresentar documentação pessoal, comprovante de renda e documentação do veículo. Os requisitos específicos podem variar de acordo com a instituição financeira.",
    },
    {
      question: "Quais são as vantagens do refinanciamento de veículo?",
      answer:
        "O refinanciamento de veículo oferece diversas vantagens, como a possibilidade de obter um empréstimo com taxas de juros mais baixas em comparação a outras modalidades de crédito, a flexibilidade de prazos de pagamento, a manutenção do uso do veículo durante o período do empréstimo e a rapidez na liberação do valor.",
    },
    {
      question: "Qual é a taxa de juros do refinanciamento de veículo?",
      answer:
        "A taxa de juros do refinanciamento de veículo pode variar de acordo com a instituição financeira e as condições do empréstimo. É importante comparar as opções disponíveis no mercado para obter as melhores taxas e condições de pagamento.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar. Fique à vontade para entrar em contato conosco pelo WhatsApp e esclarecer todas as suas dúvidas sobre o refinanciamento de veículo.",
    },
  ];
  const consorcioFaqs = [
    {
      question: "O que é consórcio?",
      answer:
        "O consórcio é uma modalidade de aquisição de bens ou serviços por meio de um grupo de pessoas que se reúnem com o objetivo de formar uma poupança comum. A cada mês, os participantes pagam suas parcelas e, por meio de sorteios ou lances, têm a chance de ser contemplados e receber a carta de crédito para realizar a compra desejada.",
    },
    {
      question: "Quais são as vantagens do consórcio?",
      answer:
        "O consórcio oferece diversas vantagens, como a ausência de juros, a flexibilidade de prazos e parcelas, a possibilidade de programar a compra do bem ou serviço desejado, a oportunidade de formar uma reserva financeira, a facilidade de participação mesmo sem entrada inicial e a segurança proporcionada pela regulamentação do sistema de consórcios.",
    },
    {
      question: "Quais são os tipos de consórcio disponíveis?",
      answer:
        "Existem diferentes tipos de consórcio disponíveis, abrangendo diversos segmentos, os principais que trabalhamos imóveis e veículos. É possível escolher o tipo de consórcio de acordo com suas necessidades e interesses.",
    },
    {
      question: "Como funciona a contemplação no consórcio?",
      answer:
        "A contemplação no consórcio pode ocorrer por meio de sorteios realizados nas assembleias mensais ou por lances oferecidos pelos participantes. Ao ser contemplado, o consorciado recebe a carta de crédito que permite a aquisição do bem ou serviço desejado.",
    },
    {
      question: "Ainda tem dúvidas?",
      answer:
        "Não se preocupe! Estamos aqui para ajudar. Fique à vontade para entrar em contato conosco pelo WhatsApp e esclarecer todas as suas dúvidas sobre o consórcio.",
    },
  ];
  let selectedFaqs = [];
  if (pageType === "consignado") {
    selectedFaqs = consignadoFaqs;
  } else if (pageType === "fgts") {
    selectedFaqs = fgtsFaqs;
  } else if (pageType === "troquecredito") {
    selectedFaqs = troqueFaqs;
  } else if (pageType === "emprestimopessoal") {
    selectedFaqs = pessoalFaqs;
  } else if (pageType === "cartaobeneficiario") {
    selectedFaqs = cartaoBeneficiarioFaqs;
  } else if (pageType === "aberturacartao") {
    selectedFaqs = aberturaFaqs;
  } else if (pageType === "cartaoconsignado") {
    selectedFaqs = cartaoConsignadoFaqs;
  } else if (pageType === "financiamentoveiculo") {
    selectedFaqs = financiamentoVeiculoFaqs;
  } else if (pageType === "refinanciamentoveiculo") {
    selectedFaqs = refinanciamentoVeiculoFaqs;
  } else if (pageType === "consorcio") {
    selectedFaqs = consorcioFaqs;
  }
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
      <div className={styles.faqList}>
        {selectedFaqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <h3 className={styles.question}>{faq.question}</h3>
            {activeIndex === index && (
              <p className={styles.answer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
