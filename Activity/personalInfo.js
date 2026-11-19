let student1 = {
  studentName: "Richelle Baniago",
  studentID: "2026-6779",
  yearLevel: "II",
  program: "Information Technology",
  grades: {
    course1: 85,
    course2: 90,
    course3: 78,
    course4: 92,
    course5: 88,
    course6: 95
  }
};

let student2 = {
  studentName: "Margaret Bier",
  studentID: "2026-6875",
  yearLevel: "II",
  program: "Information Technology",
  grades: {
    course1: 88,
    course2: 85,
    course3: 91,
    course4: 79,
    course5: 92,
    course6: 84
  }
};

let student3 = {
  studentName: "Shekinah Kimayong",
  studentID: "2026-6745",
  yearLevel: "II",
  program: "Information Technology",
  grades: {
    course1: 90,
    course2: 92,
    course3: 85,
    course4: 88,
    course5: 94,
    course6: 89
  }
};

let student4 = {
  studentName: "Shadrach Dela Cruz",
  studentID: "2026-5576",
  yearLevel: "II",
  program: "Information Technology",
  grades: {
    course1: 75,
    course2: 82,
    course3: 80,
    course4: 85,
    course5: 78,
    course6: 88
  }
};

let courseEnrolled = {
  course1: "Web Development",
  course2: "Database Management",
  course3: "Application Development",
  course4: "Networking 1",
  course5: "Event Driven Programming",
  course6: "Integrative Programming"
};

function printStudent(student) {
  let letterGrade = {};

  for (let i = 1; i <= 6; i++) {
    let courseKey = "course" + i;
    let grade = student.grades[courseKey];

    if (grade >= 100) {
      letterGrade[courseKey] = "A";
    } else if (grade >= 80 && grade < 100) {
      letterGrade[courseKey] = "B";
    } else if (grade >= 70 && grade < 80) { 
      letterGrade[courseKey] = "C";
    } else if (grade >= 60 && grade < 70) {
      letterGrade[courseKey] = "D";
    } else {
      letterGrade[courseKey] = "F";
    }
  }
  console.log(" ");
  console.log("======== Student Information ========");
  console.log("Student Name: " + student.studentName);
  console.log("Student ID: " + student.studentID);
  console.log("Year Level: " + student.yearLevel);
  console.log("Program: " + student.program);
  console.log("\n======== Courses Enrolled ========");
  console.log("course1: " + courseEnrolled.course1 + " - " + student.grades.course1 + " - " + letterGrade.course1);
  console.log("course2: " + courseEnrolled.course2 + " - " + student.grades.course2 + " - " + letterGrade.course2);
  console.log("course3: " + courseEnrolled.course3 + " - " + student.grades.course3 + " - " + letterGrade.course3);
  console.log("course4: " + courseEnrolled.course4 + " - " + student.grades.course4 + " - " + letterGrade.course4);
  console.log("course5: " + courseEnrolled.course5 + " - " + student.grades.course5 + " - " + letterGrade.course5);
  console.log("course6: " + courseEnrolled.course6 + " - " + student.grades.course6 + " - " + letterGrade.course6);

}

printStudent(student1);
printStudent(student2);
printStudent(student3);
printStudent(student4);