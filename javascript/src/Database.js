import pg from "pg";

export default class Database {
  constructor() {
    this.connection = new pg.Client({
      host: "localhost",
      port: "5432",
      database: "teste",
      user: "postgres",
      password: "postgres",
    });
    this.connection.connect(function (error) {
      if (error) throw error;
      //console.log("Conectado!");
    });
    this.checkError();
  }

  async checkError() {
    await this.connection.query(`
    CREATE TABLE IF NOT EXISTS students (
     id SERIAL PRIMARY KEY,
     nome CHARACTER VARYING(50)   
    );`);
  }

  async execute(sql) {
    return await this.connection.query(sql);
  }
}
