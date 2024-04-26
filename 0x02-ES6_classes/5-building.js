export default class Building {
  constructor(sqft) {
    // if (this.constructor === Building) {
    //   throw new Error('Class is of abstract type and can\'t be instantiated');
    // }
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() { return this._sqft; }
}
