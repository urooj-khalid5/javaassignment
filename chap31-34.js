//Q1
var currentDate = new Date();
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var date = new Date();
var Day = date.getDay();
var Today = dayNames[Day];
document.write(currentDate)

//Q2
var currentDate = new Date();
var currentMonth = currentDate.getMonth();

var monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
var currentMonthName = monthNames[currentMonth];
alert("Current month: " + currentMonthName);

//Q3

var currentDate = new Date();
var currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
var firstThreeLetters = currentDay.slice(0, 3);
alert("First three letters of the current day: " + firstThreeLetters);

//Q4
var currentdate=new Date();
var currentDay=currentdate.getDay();
if(currentDay===6 || currentDay===0){
    alert("its funday today")
}else{
    alert("its not funday today")
}
//Q5

var currentdate=new Date();
var currentDay=currentdate.getDay();
if(currentDay<16){
    alert("first fifteen days")
}else{
    alert("last days of the month")
}
//Q6

var d=new Date();
var cart = d.getTime();
document.write(cart)

//Q7
var currentTime=new Date();
var currentHour=currentTime.getHours();
if(currentHour<12){
    alert("its AM")
}else{
    alert("its PM")
}
//Q8
var laterDate=new Date(2020, 11, 31)
document.write("laterDate:" +laterDate)

var ddate = new Date(2015,5,18);
var currentDate = new Date();
var timeDifference = currentDate.getTime() - ddate.getTime();
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
alert("Number of days passed since 1st Ramadan: " + daysPassed);

//Q9
var ddate=new Date(2015,5,18);
var currentDate=new Date();
var timeDifference=currentDate.getTime()-ddate.getTime();
var daysPassed=Math.floor(timeDifference/(1000*60*60*24));
alert("days past :" +daysPassed)

//Q10
var date=new Date(2016,7,12);
var refrenceDate=new Date(2015,0,1);
var timeDifference=refrenceDate.getTime()-date.getTime();
document.write("seconds elapsed between the refrence date and the beginning of 2015:" +timeDifference);

//Q11
var currentDate = new Date();
var currentHours = currentDate.getHours();
 currentDate.setHours(currentHours + 1);
document.write("Updated Date: " + currentDate);
var currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert("Date 100 years back: " + currentDate);

//Q12
var age=prompt("enter your age")
var currentDate =new Date();
var currentYear=currentDate.getFullYear();
var birthYear=currentYear-age;
document.write("your age is:" +birthYear)

//Q13
var age=prompt("dnjef")
var currentDate=new Date();
var currentYear=currentDate.getFullYear();
var birthYear=currentYear-age;
alert("your birth year is :" +birthYear)

//Q14
function generateBill() {

var customerName = prompt("Enter customer name:");
var currentMonth = prompt("Enter current month:");
var numberOfUnits = parseFloat(prompt("Enter number of units:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

    var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);


    document.write("Customer Name: " + customerName);
document.write("<br>")
document.write("Current Month: " + currentMonth);
document.write("<br>")

document.write("Number of Units: " + numberOfUnits.toFixed(2));
    document.write("<br>")

    document.write("Charges per Unit: " + chargesPerUnit.toFixed(2));
document.write("<br>")

document.write("Net Amount Payable (within Due Date): " + netAmountPayable);
document.write("<br>")

    document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
    document.write("<br>")

    document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);
}

generateBill();
