export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') this._code = code;
    if (typeof name === 'string') this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val === 'string') this._code = val;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') this._name = val;
  }

  displayFullCurrency = () => `${this._name} (${this._code})`
}
