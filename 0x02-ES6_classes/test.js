import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.code);
console.log(dollar.name);
dollar.code = '@'
dollar.name = 'Clement'
console.log(dollar.displayFullCurrency());