from Database import Database
from Student import Student

class StudentRepository():
    def __init__(self):
        self.__database = Database()
    
    def list(self):
        sql = "SELECT * FROM students;"
        rawStudents = self.__database.execute(sql)
        students = []
        for student in rawStudents:
            students.append(Student(student))
        return students

    def create(self, nome) -> Student:
        sql = f"INSERT INTO students (nome) VALUES ('{nome}') RETURNING id, nome;"
        result = self.__database.execute(sql)
        return Student(result[0])
    
    def update(self, id, nome):
        sql = f"UPDATE students SET nome = '{nome}' WHERE id = {id} RETURNING id, nome;"
        result = self.__database.execute(sql)
        return Student(result[0])
    
    def delete(self, id):
        sql = f"DELETE FROM students WHERE id = {id};"
        return self.__database.execute(sql)
    
    def clear(self):
        sql = "DELETE FROM students; ALTER SEQUENCE students_id_seq RESTART WITH 1;"
        return self.__database.execute(sql)
    