import { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 16rem auto;
`;

const FAQTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-left: 2rem;
  }
`;

const QuestionItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  cursor: pointer;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
`;

const Answer = styled.div`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  opacity: 0.8;
`;

const ExpandIcon = styled.span`
  font-size: 1.5rem;
`;

const FAQ = () => {
  const [expanded, setExpanded] = useState({});

  const questions = [
    { id: 1, question: 'O que é o ETC$ (ETECoin) e como posso ganhar?', answer: 'O ETC$ (ETECoin) é a moeda digital fictícia da escola, ela serve para comprar os produtos da feira.' },
    { id: 2, question: 'Como funciona a troca de produtos durante o evento?', answer: 'Você receberá sua comanda com seus ETC$ e trocará pelos produtos que deseja.' },
    { id: 3, question: 'Posso trocar produtos sem ter ETC$?', answer: 'Não, a Feira da Troca funciona por meio da troca com ETC$.' },
    { id: 4, question: 'Como posso saber quanto ETC$ eu tenho na minha comanda?', answer: 'No site ou nos computadores do evento você pode verificar a quantidade de ETC$ na sua comanda.' },
    { id: 5, question: 'Posso ter mais de uma comanda?', answer: 'Não, mas você pode trocar créditos entre comandas no evento.' },
    { id: 6, question: 'O que acontece se eu não usar todo o ETC$ que eu tenho?', answer: 'O ETC$ sobrante será convertido em produtos para instituições carentes.' },
    { id: 7, question: 'O que posso fazer se perder a minha comanda?', answer: 'Procure um funcionário para confirmar seus dados e receber uma nova comanda.' },
    { id: 8, question: 'Posso verificar o saldo da minha comanda enquanto estou no caixa?', answer: 'Sim, os caixas podem checar seu saldo.' },
    { id: 9, question: 'E se eu não tiver ETC$ suficiente para pagar pelos produtos?', answer: 'Você terá que deixar alguns produtos para trás.' },
    { id: 10, question: 'Há um limite de ETC$ que posso gastar no evento?', answer: 'Não, você pode realizar quantas trocas quiser.' },
  ];

  const handleExpandClick = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <FAQContainer>
      <FAQTitle id="faq">FAQ</FAQTitle>
      {questions.map((question) => (
        <QuestionItem key={question.id}>
          <QuestionHeader onClick={() => handleExpandClick(question.id)}>
            <ExpandIcon>{expanded[question.id] ? '<' : '>'}</ExpandIcon>
            {question.question}
          </QuestionHeader>
          {expanded[question.id] && <Answer>{question.answer}</Answer>}
        </QuestionItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
