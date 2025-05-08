function sort(numbers) {
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(number, "jämt");
    } else {
      console.log(number, "udda");
    }
  });
}

// Jag hade personligen skrivit den på det här sättet, men uppgiften ville att det skulle vara en if-stats
function otherSort(numbers) {
  numbers.forEach((number) => {
    if (typeof number !== "number") {
      console.log(number, "NaN");
      return;
    }
    const label = number % 2 === 0 ? "jämt" : "udda";
    console.log(number, label);
  });
}

function uppg9() {
  // skapa en funktion som heter sort och tar in en array av siffror som argument
  // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
  // i if-sattsen skriv ut i konsolen resultatet
  // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
  // anropa funktionen och skicka med en array som argument

  const numbers = [2, 7, 4, 12, 17, -2, 41, 22, 25, 9, -7];
  sort(numbers);
}

module.exports = { uppg9 };
uppg9();
