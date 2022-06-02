const CARDS = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getCard() {
  const randomIndex = getRandomNumber(CARDS.length);
  return CARDS[randomIndex];
}

export { getCard };
