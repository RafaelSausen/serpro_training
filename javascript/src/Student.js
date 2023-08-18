export default class Student {
  constructor(id, nome) {
    this._id = id;
    this._nome = nome;
  }

  getId() {
    return this._id;
  }

  getNome() {
    return this._nome;
  }
}
