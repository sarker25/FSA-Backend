console.clear();
const express = require('express');
const generateRandomNumber = require('./utils/generateRandNum');
const countCharacters = require('./utils/countCharacters');

const app = express();

app.get('/generateRandValue', (req, res) => {
  const { start, end } = req.query;
  res.status(200).json({ randomNUm: generateRandomNumber(Number(start), Number(end)) });
});

app.get('/countCharacter', (req, res) => {
  const { string } = req.query;
  res.status(200).json({ Characters: countCharacters(string) });
});

app.listen(4000, () => {
  console.log('server is listening');
});
