import unittest
from StudentRepository import StudentRepository

studentName = "Joãozinho"
studentNameModified = "Joãozinho da Silva"
studentRepository = StudentRepository()

class StudentRepositoryTest(unittest.TestCase):
    def testClear(self):
        studentRepository.clear()

    def testCreate(self):
        student = studentRepository.create(studentName)
        self.assertEqual(studentName, student.getNome(), f"O nome do estudante deveria ser: {studentName}")

    def testUpdate(self):
        studentRepository.clear()
        self.testCreate()
        student = studentRepository.update(1,studentNameModified)
        self.assertEqual(studentNameModified, student.getNome(), f"O nome do estudante deveria ser: {studentNameModified}")

    def testList(self):
        studentRepository.clear()
        self.testCreate()
        students = studentRepository.list()
        self.assertEqual(studentName, students[0].getNome(), f"O nome do estudante deveria ser: {studentName}")

    def testUpdate(self):
        self.testList()
        studentRepository.delete(1)
        students = studentRepository.list()
        self.assertEqual(0, len(students), f"A lista de estudantes deveria estar vazia")

if __name__ == "__main__":
    unittest.main()