const personal_Information = {
  studentName: "Richelle Baniago",
  studentID: "2026-6779",
  yearLevel: "II",
  program: "Information Technology"
};

// Courses Enrolled
const courseEnrolled = {
  course1: "Web Development",
  course2: "Database Management",
  course3: "Application Development",
  course4: "Networking 1",
  course5: "Event Driven Programming",
  course6: "Integrative Programming",  
};

const grades = {
  course1: 85,
  course2: 90,
  course3: 78,
  course4: 92,
  course5: 88,
  course6: 95
};

let letterGrade = {};

// Course 1
if (grades.course1 >= 100) {
  letterGrade.course1 = "A";
} else if (grades.course1 >= 80 && grades.course1 < 100) {
  letterGrade.course1 = "B";
} else if (grades.course1 >= 70 && grades.course1 < 80) {
  letterGrade.course1 = "C";
} else if (grades.course1 >= 60 && grades.course1 < 70) {
  letterGrade.course1 = "D";
} else {
  letterGrade.course1 = "F";
}

// Course 2
if (grades.course2 >= 100) {
  letterGrade.course2 = "A";
} else if (grades.course2 >= 80 && grades.course2 < 100) {
  letterGrade.course2 = "B";
} else if (grades.course2 >= 70 && grades.course2 < 80) {
  letterGrade.course2 = "C";
} else if (grades.course2 >= 60 && grades.course2 < 70) {
  letterGrade.course2 = "D";
} else {
  letterGrade.course2 = "F";
}

// Course 3
if (grades.course3 >= 100) {
  letterGrade.course3 = "A";
} else if (grades.course3 >= 80 && grades.course3 < 100) {
  letterGrade.course3 = "B";
} else if (grades.course3 >= 70 && grades.course3 < 80) {
  letterGrade.course3 = "C";
} else if (grades.course3 >= 60 && grades.course3 < 70) {
  letterGrade.course3 = "D";
} else {
  letterGrade.course3 = "F";
}

// Course 4
if (grades.course4 >= 100) {
  letterGrade.course4 = "A";
} else if (grades.course4 >= 80 && grades.course4 < 100) {
  letterGrade.course4 = "B";
} else if (grades.course4 >= 70 && grades.course4 < 80) {
  letterGrade.course4 = "C";
} else if (grades.course4 >= 60 && grades.course4 < 70) {
  letterGrade.course4 = "D";
} else {
  letterGrade.course4 = "F";
}

// Course 5
if (grades.course5 >= 100) {
  letterGrade.course5 = "A";
} else if (grades.course5 >= 80 && grades.course5 < 100) {
  letterGrade.course5 = "B";
} else if (grades.course5 >= 70 && grades.course5 < 80) {
  letterGrade.course5 = "C";
} else if (grades.course5 >= 60 && grades.course5 < 70) {
  letterGrade.course5 = "D";
} else {
  letterGrade.course5 = "F";
}

// Course 6
if (grades.course6 >= 100) {
  letterGrade.course6 = "A";
} else if (grades.course6 >= 80 && grades.course6 < 100) {
  letterGrade.course6 = "B";
} else if (grades.course6 >= 70 && grades.course6 < 80) {
  letterGrade.course6 = "C";
} else if (grades.course6 >= 60 && grades.course6 < 70) {
  letterGrade.course6 = "D";
} else {
  letterGrade.course6 = "F";
}

// Output Results
console.log("======== Student Information ========");
console.log("Student Name: " + personal_Information.studentName);
console.log("Student ID: " + personal_Information.studentID);
console.log("Year Level: " + personal_Information.yearLevel);
console.log("Program: " + personal_Information.program);

console.log(" ");
console.log("======== Courses Enrolled ========");
console.log("course1:  " + courseEnrolled.course1 + " - " + grades.course1 + " - " + letterGrade.course1);
console.log("course2:  " + courseEnrolled.course2 + " - " + grades.course2 + " - " + letterGrade.course2);
console.log("course3:  " + courseEnrolled.course3 + " - " + grades.course3 + " - " + letterGrade.course3);
console.log("course4:  " + courseEnrolled.course4 + " - " + grades.course4 + " - " + letterGrade.course4);
console.log("course5:  " + courseEnrolled.course5 + " - " + grades.course5 + " - " + letterGrade.course5);
console.log("course6:  " + courseEnrolled.course6 + " - " + grades.course6 + " - " + letterGrade.course6);
console.log(" ");