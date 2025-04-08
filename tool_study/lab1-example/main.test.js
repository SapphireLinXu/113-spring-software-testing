const assert = require('assert');
const { MyClass, Student } = require('./main');

test("Test MyClass's addStudent", () => {
    const myClass = new MyClass();
    const student = new Student();
    const newStudentId = myClass.addStudent(student);
    assert.strictEqual(newStudentId, 0);
    assert.strictEqual(myClass.students.length, 1);
    assert.strictEqual(myClass.students[0], student);

    const newStudentId2 = myClass.addStudent('not a student');
    assert.strictEqual(newStudentId2, -1);
});

test("Test MyClass's getStudentById", () => {
    const myClass = new MyClass();
    const student = new Student();
    myClass.addStudent(student);
    const studentById = myClass.getStudentById(0);
    assert.strictEqual(studentById, student);

    const studentById2 = myClass.getStudentById(-1);
    assert.strictEqual(studentById2, null);
    const studentById3 = myClass.getStudentById(1);
    assert.strictEqual(studentById3, null);
});

test("Test Student's setName", () => {
    const student = new Student();
    student.setName("John");
    assert.strictEqual(student.getName(), "John");

    const student2 = new Student();
    student2.setName(123);
    assert.strictEqual(student.getName(), "John");
});

test("Test Student's getName", () => {
    const student = new Student();
    student.setName("John");
    assert.strictEqual(student.getName(), "John");

    const student2 = new Student();
    student2.setName(123);
    assert.strictEqual(student2.getName(), '');
});