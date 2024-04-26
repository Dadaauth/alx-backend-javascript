export default class HolbertonClass {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');
    if (typeof length === 'number') this._length = length;
    else throw TypeError('Length must be a number');
    if (Array.isArray(students)) for (const student of students) if (typeof student !== 'string') throw TypeError('Students should be an array of strings');
    else throw TypeError('Students should be an array of strings');
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'string') {
      this._length = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) {
      for (const student of value) {
        if (typeof student !== 'string') {
        throw TypeError('Students should be an array of strings');
        }
      }
    } else {
        throw TypeError('Students should be an array of strings');
    }
    this._students = value;
  }
}
