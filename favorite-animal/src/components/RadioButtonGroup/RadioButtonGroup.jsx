import { RadioButton } from './../RadioButton/RadioButton';
import styles from './RadioButtonGroup.module.css';
import { ANIMALS } from './../../data/animals';

const RadioButtonGroup = ({ onRadioChange, favoriteAnimal }) => {

  return (
    <fieldset className={styles.animals}>
      <legend>What is your favorite animal?</legend>
      {
        ANIMALS.map(({ id, animal }) => {
          return (
            <RadioButton
              key={id}
              label={animal}
              value={favoriteAnimal === animal}
              onChange={onRadioChange}
            />
          );
        })
      }
    </fieldset>
  );
};

export { RadioButtonGroup };
