import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') this._amount = amount;
    if (currency instanceof Currency) this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(val) { if (typeof val === 'number') this._amount = val; }

  get currency() { return this._currency; }

  set currency(val) { if (val instanceof Currency) this._currency = val; }

  displayFullPrice() { return `${this._amount} ${this._currency.displayFullCurrency()}`; }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    return null;
  }
}
