// @ts-nocheck
// NOTICE: DO NOT MODIFY THE CODE IN THIS FILE
// But you can uncomment code below and run this file to understand how to use the classes
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class MyClass {
  constructor() {
    if (stryMutAct_9fa48("0")) {
      {}
    } else {
      stryCov_9fa48("0");
      this.students = stryMutAct_9fa48("1") ? ["Stryker was here"] : (stryCov_9fa48("1"), []);
    }
  }
  addStudent(student) {
    if (stryMutAct_9fa48("2")) {
      {}
    } else {
      stryCov_9fa48("2");
      if (stryMutAct_9fa48("5") ? false : stryMutAct_9fa48("4") ? true : stryMutAct_9fa48("3") ? student instanceof Student : (stryCov_9fa48("3", "4", "5"), !(student instanceof Student))) {
        if (stryMutAct_9fa48("6")) {
          {}
        } else {
          stryCov_9fa48("6");
          return stryMutAct_9fa48("7") ? +1 : (stryCov_9fa48("7"), -1);
        }
      }
      this.students.push(student);
      return stryMutAct_9fa48("8") ? this.students.length + 1 : (stryCov_9fa48("8"), this.students.length - 1);
    }
  }
  getStudentById(id) {
    if (stryMutAct_9fa48("9")) {
      {}
    } else {
      stryCov_9fa48("9");
      if (stryMutAct_9fa48("12") ? id < 0 && id >= this.students.length : stryMutAct_9fa48("11") ? false : stryMutAct_9fa48("10") ? true : (stryCov_9fa48("10", "11", "12"), (stryMutAct_9fa48("15") ? id >= 0 : stryMutAct_9fa48("14") ? id <= 0 : stryMutAct_9fa48("13") ? false : (stryCov_9fa48("13", "14", "15"), id < 0)) || (stryMutAct_9fa48("18") ? id < this.students.length : stryMutAct_9fa48("17") ? id > this.students.length : stryMutAct_9fa48("16") ? false : (stryCov_9fa48("16", "17", "18"), id >= this.students.length)))) {
        if (stryMutAct_9fa48("19")) {
          {}
        } else {
          stryCov_9fa48("19");
          return null;
        }
      }
      return this.students[id];
    }
  }
}
class Student {
  constructor() {
    if (stryMutAct_9fa48("20")) {
      {}
    } else {
      stryCov_9fa48("20");
      this.name = undefined;
    }
  }
  setName(userName) {
    if (stryMutAct_9fa48("21")) {
      {}
    } else {
      stryCov_9fa48("21");
      if (stryMutAct_9fa48("24") ? typeof userName === 'string' : stryMutAct_9fa48("23") ? false : stryMutAct_9fa48("22") ? true : (stryCov_9fa48("22", "23", "24"), typeof userName !== (stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), 'string')))) {
        if (stryMutAct_9fa48("26")) {
          {}
        } else {
          stryCov_9fa48("26");
          return;
        }
      }
      this.name = userName;
    }
  }
  getName() {
    if (stryMutAct_9fa48("27")) {
      {}
    } else {
      stryCov_9fa48("27");
      if (stryMutAct_9fa48("30") ? this.name !== undefined : stryMutAct_9fa48("29") ? false : stryMutAct_9fa48("28") ? true : (stryCov_9fa48("28", "29", "30"), this.name === undefined)) {
        if (stryMutAct_9fa48("31")) {
          {}
        } else {
          stryCov_9fa48("31");
          return stryMutAct_9fa48("32") ? "Stryker was here!" : (stryCov_9fa48("32"), '');
        }
      }
      return this.name;
    }
  }
}

// const myClass = new MyClass();
// const names = ['John', 'Jane', 'Doe', 'Smith'];
// names.forEach(name => {
//     const student = new Student();
//     student.setName(name);
//     const newStudentId = myClass.addStudent(student);
//     const newStudentName = myClass.getStudentById(newStudentId).getName();
//     console.log('[+] Added student with id: %d, name: %s', newStudentId, newStudentName);
// });

module.exports = stryMutAct_9fa48("33") ? {} : (stryCov_9fa48("33"), {
  MyClass,
  Student
});