/**
 * Ticket Fare Calculator
 * - Children (age < 10): free
 * - Students: 50% discount
 * - Senior citizens (age >= 60): 15% discount
 * - Otherwise: regular fare 800 tk
 */

const age = 65;
const isStudent = false;
const regularFare = 800;

let fare;

if (age < 10) {
  fare = 0;
  console.log("Children get free ticket.");
} else if (isStudent) {
  fare = (regularFare * 50) / 100;
  console.log("Student discount applied.");
} else if (age >= 60) {
  fare = (regularFare * 85) / 100;
  console.log("Senior citizen discount applied.");
} else {
  fare = regularFare;
  console.log("Regular ticket fare.");
}

console.log("Ticket fare:", fare, "tk");
