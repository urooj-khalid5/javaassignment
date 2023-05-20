//Q1
function power(a, b) {
    return Math.pow(a, b);
  }
let result = power(2, 3);
console.log(result);  

//Q2
function isLeapYear(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
  }
  let year = 2023;
  let res = isLeapYear(year);
  console.log(res); 
  
//Q3
// Function to calculate the semi-perimeter of the triangle
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
  }
  
  // Function to calculate the area of the triangle using the semi-perimeter
  function calculateTriangleArea(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
let a = 3;
let b = 4;
let c = 5;
  
let triangleArea = calculateTriangleArea(a, b, c);
console.log(triangleArea); 

//Q4
// Function to calculate the average of marks
function calculateAverage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var average = totalMarks / 3;
    return average;
  }
  
  // Function to calculate the percentage of marks
  function calculatePercentage(subject1, subject2, subject3) {
    var totalMarks = subject1 + subject2 + subject3;
    var totalMarksPossible = 300; // Assuming each subject has a maximum of 100 marks
    var percentage = (totalMarks / totalMarksPossible) * 100;
    return percentage;
  }
  
  // Main function to call other functions and display the results
  function mainFunction(subject1, subject2, subject3) {
    var average = calculateAverage(subject1, subject2, subject3);
    var percentage = calculatePercentage(subject1, subject2, subject3);
  
    console.log("Average: " + average);
    console.log("Percentage: " + percentage + "%");
  }
mainFunction(85, 90, 92);

//Q5
function customIndexOf(string, character) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === character) {
        return i;
      }
    }
    return -1;
  }
  let str = "aliza zahid";
  let char = "i";
  
  let index = customIndexOf(str, char);
  console.log(index); 

//Q6
function deleteVowels(sentence) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
  
    for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i].toLowerCase())) {
        result += sentence[i];
      }
    }
  
    return result;
  }
let sentence = "urooj khalid";
let updatedSentence = deleteVowels(sentence);
console.log(updatedSentence); 

//Q7
function countSuccessiveVowels(text) {
    let count = 0;
  
    for (let i = 0; i < text.length - 1; i++) {
      let currentChar = text[i].toLowerCase();
      let nextChar = text[i + 1].toLowerCase();
  
      if ('aeiou'.includes(currentChar) && 'aeiou'.includes(nextChar)) {
        count++;
      }
    }
  
    return count;
  }
  let text = "Pleases read this application and give me gratuity";
  let occurrences = countSuccessiveVowels(text);
  console.log(occurrences); 

  //Q8
  function convertToMeters(distance) {
    return distance * 1000;
  }
  
  function convertToFeet(distance) {
    return distance * 3280.84;
  }
  
  function convertToInches(distance) {
    return distance * 39370.08;
  }
  
  function convertToCentimeters(distance) {
    return distance * 100000;
  }
  
  function printDistanceConversions(distance) {
    const meters = convertToMeters(distance);
    const feet = convertToFeet(distance);
    const inches = convertToInches(distance);
    const centimeters = convertToCentimeters(distance);
  
    console.log("Distance Conversion:");
    console.log("Meters:", meters);
    console.log("Feet:", feet);
    console.log("Inches:", inches);
    console.log("Centimeters:", centimeters);
  }
  const distance = parseFloat(prompt("Enter the distance between two cities (in km):"));
  printDistanceConversions(distance);

 // Q9
 function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12;
    let overtimePay = 0;
  
    if (hoursWorked > regularHours) {
      const overtimeHours = hoursWorked - regularHours;
      overtimePay = overtimeHours * overtimeRate;
    }
  
    return overtimePay;
  }
  
  // Example usage
  const hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));
  const overtimePay = calculateOvertimePay(hoursWorked);
  console.log("Overtime Pay:", overtimePay);

 //Q10
 function calculateCurrencyNotes(amount) {
    const denominations = [100, 50, 10];
    const notesCount = [0, 0, 0]; // [100 notes count, 50 notes count, 10 notes count]
  
    for (let i = 0; i < denominations.length; i++) {
      if (amount >= denominations[i]) {
        notesCount[i] = Math.floor(amount / denominations[i]);
        amount %= denominations[i];
      }
    }
  
    return notesCount;
  }
  
  // Example usage
  const amountToWithdraw = parseInt(prompt("Enter the amount to withdraw (in hundreds):"));
  const notes = calculateCurrencyNotes(amountToWithdraw);
  console.log("Number of 100 notes:", notes[0]);
  console.log("Number of 50 notes:", notes[1]);
  console.log("Number of 10 notes:", notes[2]);