package com.training.serpro;

import java.sql.*;

public class Database {

    Connection connection = null;

    Database() throws SQLException {
        try {
            connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/teste", "postgres", "postgres");
            checkDatabase();
        } catch (SQLException error) {
            System.out.println("Error: " + error);
        }
    }
    
    private void checkDatabase() {
        String sql =
            "CREATE TABLE IF NOT EXISTS students (" +
            "    id SERIAL PRIMARY KEY," +
            "    nome TEXT " +
            ")";
        try {
            execute(sql);
        } catch (SQLException exception) {
            System.out.println(exception);
        }
    }
    
    public void execute(String sql) throws SQLException {
        PreparedStatement preparedStatement = this.connection.prepareStatement(sql);
        preparedStatement.execute();
    }
    
    public ResultSet query(String sql) throws SQLException {
        PreparedStatement preparedStatement = this.connection.prepareStatement(sql);
        preparedStatement.execute();
        return preparedStatement.getResultSet();
    }
}
