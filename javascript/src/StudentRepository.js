import Database from "./Database.js";
import Student from "./Student.js";

export default class StudentRepository {
  constructor() {
    this._database = new Database();
  }

  async create(nome) {
    const sql = `INSERT INTO students (nome) VALUES ('${nome}') RETURNING id, nome;`;
    const student = await this._database.execute(sql);
    return new Student(student.rows[0].id);
  }

  async update(id, nome) {
    const sql = `UPDATE students SET nome = '${nome}' WHERE id = ${id} RETURNING id, nome;`;
    const student = await this._database.execute(sql);
    return new Student(student.rows[0].id);
  }

  async delete(id) {
    const sql = `DELETE FROM students WHERE id = ${id};`;
    await this._database.execute(sql);
  }

  async list() {
    const sql = `SELECT * FROM students;`;
    const rawStudents = await this._database.execute(sql);
    const students = [];
    for (const student in rawStudents) {
      students.push(new Student(student.id));
    }
    return students;
  }

  async clear() {
    const sql =
      "DELETE FROM students; ALTER SEQUENCE students_id_seq RESTART WITH 1;";
    await this._database.execute(sql);
  }
}
