// chp 35 to 38 start.

//Q1

function dateTime(){
    var currentDate=new Date();
    var datetime=currentDate.toLocaleString()
    document.write(datetime)
}
dateTime();

//Q2
 function firstLastname(){
    var firstName=prompt("enter your 1st name")
    var lastName=prompt("enter last name")
    var greet= (firstName +  " "  +lastName)
    document.write(greet)
 }
 firstLastname();

//Q3
function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var sum = num1 + num2;
     return sum;
}
var result=addNumbers();
alert("The sum of the two numbers is: " + result);

//Q4
const operator = prompt("Enter Operetor (either +, -, * or /):");
const number1 = (prompt("Enter value"));
const number2 = (prompt("Enter value"));

function add() {
    let sum = number1 + number2;
    return sum
}
function sub() {
    let min = number1 - number2;
    return min
}
function mul() {
    let multiply = number1 * number2;
    return multiply;
}
function div() {
    let divide = number1 / number2;
    return divide;
}
let val = 0;

if (operator == "+") {
    val = add(number1, number2);
}
else if (operator == "-") {
    val = sub(number1, number2);
}
else if (operator == "*") {
    val = mul(number1, number2)
}
else if (operator == "/") {
    val = div(number1, number2);
}

document.write("value 01: " + number1 + " value 02: " + number2 + " RESULT: " + val)


//Q5
function square(number) {
    return number * number;
}
let results = square(4);
document.write(results)

function func() {
    function fact(num) {
       if (num < 0){
          return -1;
       }
       else if(num == 0){
          return 1;
       }
       else {
          let result = 1;
          for(var i = num; i > 1; i--){
             result *= i;
          };
          return result;
       }
    };
    const num = 4;
    document.getElementById("para").innerHTML = fact(num);
 };

//Q6
function factorial(n){
if(n==0){
    return 1
}
else{
    return factorial(n-1)*n
}
}
document.write(factorial(10))

//Q7
function displayCounting(start, end) {
var rear=prompt("enter your 1st no")
var rear=prompt("enter your 2nd no")
    if (start <= end) {
      for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
      }
    } else {
      for (let i = start; i >= end; i--) {
        document.write(i + "<br>");
      }
    }
  }
  displayCounting(1,30)

//Q7
let a;
let b;
let c;

a=window.prompt("enter side A")
a=Number(a)

b=window.prompt("enter side B")
b=Number(b)

c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
document.write("side c:" ,c)

//Q9
function calculateArea(width, height) {
    var area = width * height;
    return area;
}
var result = calculateArea(2, 9);
console.log(result)
//Q10

function ispalindrome(str){
var val=str.split("").reverse().join("")
if(str.toLowerCase()===val.toLowerCase()){
    document.write(str+ "is palindrome")
}
else{
    document.write(str+ "not palindrome")
}
}
document.write(ispalindrome("fox"))

function ispalindrome(str){
    var val=str.split("").reverse().join("")
    if(str.toLowerCase()===val.toLowerCase()){
        document.write(str+"is palindrome")
    }
    else{
        document.write(str+"is not palindrome")
    }
}
document.write(ispalindrome("yoyo"))

//Q11

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];

  for(var i = 0; i < array1.length; i++){
newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));

//Q12
function long(str){
var newString=str.split(' ')
newString.sort(function(a,b){return b.length-a.length})
return newString[0];
} document.write(long("keyword are"));



//Q13
function countOccurrences(str, letter) {

    var count = 0;

    str = str.toLowerCase();
    letter = letter.toLowerCase();


    for (var i = 0; i < str.length; i++) {

        if (str[i] === letter) {

            count++;
        }
    }

    return count;
}

var inputString = 'google';
var letterToCount = 'o';
var occurrences = countOccurrences(inputString, letterToCount);
document.write(occurrences)

//Q14

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
     document.write("The circumference is " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("The area is " + area);
}

var radius = 5;
calcCircumference(radius)
calcArea(radius)

function power(a,b){
return Math.pow(a,b)
}
var result= power(2,4)
document.write(result);