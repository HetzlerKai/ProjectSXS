function rollDice(min, max) {
  return (min-1) + Math.ceil(Math.random() * (max-min + 1));
}

function difference = function (a, b) { return Math.abs(a - b); }
