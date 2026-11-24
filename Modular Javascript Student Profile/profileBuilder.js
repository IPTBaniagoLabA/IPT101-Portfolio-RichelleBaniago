//ProfileBuilder.js

function createStudentProfile(name,id, program, yearLevel, schoolYear){
    return { 
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear
    };
}

const myProfile = createStudentProfile(
    "Richelle Dumalig Baniago",
    6779,
    "Information Technology",
    "2nd Year",
    "2026-2027"

);

console.log(myProfile);