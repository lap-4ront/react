import { useState } from "react";
import { Card } from "./Card";
import { getCard } from "./cards";

function App() {
  const [card, setCard] = useState(getCard());

  const setRandomCard = () => {
    const newCard = getCard();
    setCard(newCard);
  };

  return (
    <>
      <button onClick={setRandomCard}>Get new card</button>
      <Card value={card}></Card>
    </>
  );
}

export default App;
