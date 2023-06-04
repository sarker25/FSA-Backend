function countCharacters(inputString) {
  let letterCount = 0;
  let symbolCount = 0;
  let numericCount = 0;

  for (let i = 0; i < inputString.length; i += 1) {
    const char = inputString[i];

    // Check if the character is a letter
    if (/[a-zA-Z]/.test(char)) {
      letterCount += 1;
    } else if (/[!@#$%^&*(),.?":{}|<>]/.test(char)) {
      symbolCount += 1;
    } else if (/[0-9]/.test(char)) {
      numericCount += 1;
    }
  }

  // Create and return the result object
  const result = {
    letters: letterCount,
    symbols: symbolCount,
    numeric: numericCount,
  };

  return result;
}

module.exports = countCharacters;
