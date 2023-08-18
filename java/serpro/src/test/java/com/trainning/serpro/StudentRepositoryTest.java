package com.trainning.serpro;

import java.sql.SQLException;
import java.util.ArrayList;
import org.junit.jupiter.api.AfterAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

public class StudentRepositoryTest {

    static StudentRepository studentRepository;
    static String studentName;
    static String studentNameModified;

    @BeforeAll
    public static void setUpClass() throws SQLException {
        studentRepository = new StudentRepository();
        studentName = "Joãozinho";
        studentNameModified = "Joãozinho da Silva";
    }

    @AfterAll
    public static void tearDownClass() {
        studentRepository = null;
        System.gc();
    }

    @BeforeEach
    public void setUp() throws SQLException {
        studentRepository.clear();
    }

    @Test
    public void testCreate() throws SQLException {
        Student student = studentRepository.create(studentName);
        assertEquals(1, student.getId(), "O Id do estudante deve ser 1");
        assertEquals(studentName, student.getNome(), "O Nome do estudante deve ser " + studentName);
    }

    @Test
    public void testUpdate() throws SQLException {
        this.testCreate();
        Student student = studentRepository.update(1, studentNameModified);
        assertEquals(1, student.getId(), "O Id do estudante deve ser 1");
        assertEquals(studentNameModified, student.getNome(), "O Nome do estudante deve ser " + studentNameModified);
    }

    @Test
    public void testList() throws SQLException {
        this.testCreate();
        ArrayList<Student> students = studentRepository.list();
        assertEquals(1, students.get(0).getId(), "O Id do estudante na posição 0 deve ser 1");
        assertEquals(studentName, students.get(0).getNome(), "O Nome do estudante na posição 0 deve ser " + studentName);
    }

    @Test
    public void testDelete() throws SQLException {
        this.testList();
        studentRepository.delete(1);
        ArrayList<Student> students = studentRepository.list();
        assertEquals(0, students.size(), "O tamanho da lista deve ser 0");
    }
}
