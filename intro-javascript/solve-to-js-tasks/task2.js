const subjectMathematic = 75.25;
const subjectBiology = 65;
const subjectChemistry = 80;
const subjectPhysics = 35.45;
const subjectBangle = 99.5;

const studentTotalMarks =
  subjectMathematic +
  subjectBiology +
  subjectChemistry +
  subjectPhysics +
  subjectBangle;

// console.log(studentTotalMarks);

const subAverage = studentTotalMarks / 5;
const result = parseFloat(subAverage.toFixed(2));
console.log(result);
