import { useState } from 'react';
import { RadioButton } from './../RadioButton/RadioButton';
import { styles } from './RadioButtonGroup.module.css';

const RadioButtonGroup = () => {
  const [favoriteAnimal, setFavoriteAnimal] = useState('dog');

  const handleChangeCat = () => {
    setFavoriteAnimal('cat');
  };
  const handleChangeDog = () => {
    setFavoriteAnimal('dog');
  };
  const handleChangePig = () => {
    setFavoriteAnimal('pig');
  };

  return (
    <fieldset>
      <legend>What is your favorite animal?</legend>
      <RadioButton
        label="Cat"
        value={favoriteAnimal === 'cat'}
        onChange={handleChangeCat}
      />
      <RadioButton
        label="Dog"
        value={favoriteAnimal === 'dog'}
        onChange={handleChangeDog}
      />
      <RadioButton
        label="Pig"
        value={favoriteAnimal === 'pig'}
        onChange={handleChangePig}
      />
    </fieldset>
  );
};

export { RadioButtonGroup };
