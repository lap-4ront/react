import { useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";
import { getCard } from "./cards";

const SECTION = styled.section`
  padding: 2rem;
  text-align: center;
`;

function App() {
  const [card, setCard] = useState(getCard());

  const setRandomCard = () => {
    const newCard = getCard();
    setCard(newCard);
  };

  return (
    <SECTION>
      <button onClick={setRandomCard}>Get new card</button>
      <Card value={card}></Card>
    </SECTION>
  );
}

export default App;
