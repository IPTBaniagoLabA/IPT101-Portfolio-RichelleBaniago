// studentModule.js

export const studentDetails = {
    name: " Richelle Dumalig Baniago",
    id: 6779,
    program: "Information Technology",
    yearLevel: "2nd Year",
    schoolYear: "2026-2027",

};

    export function printSummary(student, status) {
        return `Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`;
    }