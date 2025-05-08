function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return NaN;
  return x + y;
}

function uppg7() {
  // skapa en funktion som tar in två tal som argument
  // funktionen ska returnera summan av talen
  // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

  return sum(5, 10);
}

module.exports = { uppg7 };
