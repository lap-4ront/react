import styles from './FavoriteAnimal.module.css';

const FavoriteAnimal = ({ animal }) => {
  return (
    <div className={styles.output}>Your favorite animal is {animal}</div>
  );
};

export { FavoriteAnimal };
