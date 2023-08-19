import StudentRepository from "../src/StudentRepository.js";

const studentRepository = new StudentRepository();
const studentName = "Joãozinho";
const studentNameModified = "Joãozinho da Silva";

test("Testa o método create", async () => {
  const student = await studentRepository.create(studentName);
  expect(student.getNome()).toBe(studentName);
});

test("Testa o método update", async () => {
  await studentRepository.clear();
  await studentRepository.create(studentName);
  const student = await studentRepository.update(1, studentNameModified);
  expect(student.getNome()).toBe(studentNameModified);
});

test("Testa o método delete", async () => {
  await studentRepository.clear();
  const student = await studentRepository.create(studentName);
  expect(student.getNome()).toBe(studentName);
  await studentRepository.delete(student.getId());
  const students = await studentRepository.list();
  expect(students.length).toBe(0);
});

test("Testa o método list", async () => {
  await studentRepository.clear();
  await studentRepository.create(studentName);
  await studentRepository.list();
  const students = await studentRepository.list();
  expect(students[0].getNome()).toBe(studentName);
});
