import StudentRepository from "../src/StudentRepository.js";
import { assert } from "node:console";

const studentRepository = new StudentRepository();
const studentName = "Joãozinho";
const studentNameModified = "Joãozinho da Silva";

test("Testa o método create", async () => {
  const student = await studentRepository.create(studentName);
  assert(
    studentName == student.getNome(),
    `Deveria retornar o estudante ${studentName}`
  );
});

test("Testa o método update", async () => {
  await studentRepository.clear();
  await studentRepository.create(studentName);
  const student = await studentRepository.update(1, studentNameModified);
  assert(
    studentNameModified == student.getNome(),
    `Deveria retornar o estudante ${studentNameModified}`
  );
});

test("Testa o método delete", async () => {
  await studentRepository.clear();
  const student = await studentRepository.create(studentName);
  assert(
    studentName == student.getNome(),
    `Deveria retornar o estudante ${studentName}`
  );
  await studentRepository.delete(student.getId());
  const students = await studentRepository.list();
  assert(students.length == 0, "A lista de estudantes deveria estar vazia");
});

test("Testa o método list", async () => {
  await studentRepository.clear();
  await studentRepository.create(studentName);
  await studentRepository.list();
  const students = await studentRepository.list();
  assert(
    students[0].getNome() == studentName,
    `Deveria retornar o estudante ${studentName}`
  );
});
