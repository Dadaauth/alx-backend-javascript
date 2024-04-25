export default class HolbertonClass {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');
    if (typeof length === 'number') this._length = length;
    else throw TypeError('Length must be a number');
    for (const student of students) if (typeof student !== 'string') throw TypeError('Students should be an array of strings');
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = value;
  }
}
