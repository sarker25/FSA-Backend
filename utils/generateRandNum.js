function generateRandomNumber(min, max) {
  const randomDecimal = Math.random();

  const randomNumber = randomDecimal * (max - min + 1) + min;

  return Math.floor(randomNumber);
}
module.exports = generateRandomNumber;
