function uppg10() {
  const numbers = [5, 12, 7, 10, 20, 9, 11];

  // skapa tre arrayer - bigEven, smallOdd, other
  // loopa igenom numbers och placera talen i respektive array
  // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
  // smallOdd ska innehålla tal mindre än 10 och udda
  // other ska innehålla alla andra tal
  // returnera ett objekt med de tre arrayerna
  const result = {
    bigEven: [],
    smallOdd: [],
    other: [],
  };

  numbers.forEach((number) => {
    if (number % 2 === 0 && number > 10) {
      result.bigEven.push(number);
      return;
    }
    if (number % 2 !== 0 && number < 10) {
      result.smallOdd.push(number);
      return;
    }
    result.other.push(number);
  });

  return result;
}

module.exports = { uppg10 };
