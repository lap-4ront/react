import { useState } from "react";
import "./App.css";
import { RadioButtonGroup } from "./components/RadioButtonGroup/RadioButtonGroup";
import { FavoriteAnimal } from "./components/FavoriteAnimal/FavoriteAnimal";

function App() {
  const [favoriteAnimal, setFavoriteAnimal] = useState("dog");

  const handleInputChange = (value) => {
    setFavoriteAnimal(value);
  };

  return (
    <>
      <RadioButtonGroup
        onRadioChange={handleInputChange}
        favoriteAnimal={favoriteAnimal}
      />
      <FavoriteAnimal animal={favoriteAnimal} />
    </>
  );
}

export default App;
