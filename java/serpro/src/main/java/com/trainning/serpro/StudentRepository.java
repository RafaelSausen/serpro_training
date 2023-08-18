package com.trainning.serpro;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class StudentRepository {
    private Database database;

    public StudentRepository() throws SQLException {
        this.database = new Database();
    }
    
    public ArrayList<Student> list() throws SQLException {
        String sql = "SELECT * FROM students";
        ResultSet result = this.database.query(sql);
        ArrayList<Student> students = new ArrayList<>();
        while (result.next()) {
            students.add(new Student(result.getInt("id"),result.getString("nome")));
        }
        return students;
    }
    
    public Student create(String nome) throws SQLException {
        String sql = "INSERT INTO students (nome) VALUES ('" + nome + "') RETURNING id, nome";
        ResultSet result = this.database.query(sql);
        result.next();
        return new Student(result.getInt("id"),result.getString("nome"));
    }
    
    public Student update(int id, String nome) throws SQLException {
        String sql = "UPDATE students SET nome = '" + nome + "' WHERE id = " + id + " RETURNING id, nome";
        ResultSet result = this.database.query(sql);
        result.next();
        return new Student(result.getInt("id"),result.getString("nome"));
    }
    
    public void delete(int id) throws SQLException {
        String sql = "DELETE FROM students WHERE id = " + id;
        this.database.execute(sql);
    }
    
    public void clear() throws SQLException {
        String sql = "DELETE FROM students; ALTER SEQUENCE students_id_seq RESTART WITH 1;";
        this.database.execute(sql);
    }
}
