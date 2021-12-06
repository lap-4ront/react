import { RadioButton } from './../RadioButton/RadioButton';
import styles from './RadioButtonGroup.module.css';

const RadioButtonGroup = ({ onChange, favoriteAnimal }) => {
  // const [favoriteAnimal, setFavoriteAnimal] = useState('dog');

  // const handleChangeCat = () => {
  //   setFavoriteAnimal('cat');
  // };
  // const handleChangeDog = () => {
  //   setFavoriteAnimal('dog');
  // };
  // const handleChangePig = () => {
  //   setFavoriteAnimal('pig');
  // };

  return (
    <fieldset className={styles.animals}>
      <legend>What is your favorite animal?</legend>
      <RadioButton
        label="Cat"
        value={favoriteAnimal === 'cat'}
        onChange={onChange}
      />
      <RadioButton
        label="Dog"
        value={favoriteAnimal === 'dog'}
        onChange={onChange}
      />
      <RadioButton
        label="Pig"
        value={favoriteAnimal === 'pig'}
        onChange={onChange}
      />
    </fieldset>
  );
};

export { RadioButtonGroup };
