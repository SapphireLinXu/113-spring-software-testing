const assert = require('assert');
const { MyClass, Student } = require('./main');

test("Test MyClass's addStudent", () => {
    const myClass = new MyClass();
    const student = new Student();
    const newStudentId = myClass.addStudent(student);
    expect (newStudentId).toBe(0);
    expect (myClass.students.length).toBe(1);
    expect (myClass.students[0]).toBe(student);

    const newStudentId2 = myClass.addStudent('not a student');
    expect (newStudentId2).toBe(-1);
});

test("Test MyClass's getStudentById", () => {
    const myClass = new MyClass();
    const student = new Student();
    myClass.addStudent(student);
    const studentById = myClass.getStudentById(0);
    expect (studentById).toBe(student);

    const studentById2 = myClass.getStudentById(-1);
    expect (studentById2).toBe(null);

    const studentById3 = myClass.getStudentById(1);
    expect (studentById3).toBe(null);
});

test("Test Student's setName", () => {
    const student = new Student();
    student.setName("John");
    expect (student.getName()).toBe("John");

    const student2 = new Student();
    student2.setName(123);
    expect (student2.getName()).toBe('');
});

test("Test Student's getName", () => {
    const student = new Student();
    student.setName("John");
    expect (student.getName()).toBe("John");

    const student2 = new Student();
    student2.setName(123);
    expect (student2.getName()).toBe('');
});