import { useState } from "react";
import "./App.css";
import { RadioButtonGroup } from "./components/RadioButtonGroup/RadioButtonGroup";
import { FavoriteAnimal } from "./components/FavoriteAnimal/FavoriteAnimal";

function App() {
  const [favoriteAnimal, setFavoriteAnimal] = useState("dog");

  // const handleChangeCat = () => {
  //   setFavoriteAnimal("cat");
  // };
  // const handleChangeDog = () => {
  //   setFavoriteAnimal("dog");
  // };
  // const handleChangePig = () => {
  //   setFavoriteAnimal("pig");
  // };

  const handleChange = (event) => {
    setFavoriteAnimal(event.target.nextSibling.nodeValue.toLowerCase());
  };

  return (
    <>
      <RadioButtonGroup
        onChange={handleChange}
        favoriteAnimal={favoriteAnimal}
      />
      <FavoriteAnimal animal={favoriteAnimal} />
    </>
  );
}

export default App;
