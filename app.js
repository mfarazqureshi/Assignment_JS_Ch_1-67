

               //Chapter 1           Alerts

//Task-1

alert("greetings ... Welcome Here")

//Task-2

alert("Error! Please enter a valid password.")

//Task-3

alert("Welcome to JS Land...." + "\n" + "Happy Coding!")

//Task-4

alert("Welcome to JS Land")
alert("Happy Coding")

//Task-5

alert("Hello... I can run JS through my web browser's console")



//Chapter 2 Variable for Strings

//Task-1

var username = "";

//Task-2

var myName = "Muhammad Faraz Qureshi"
alert(myName)

//Task-3

var message;
var message = "Hello World";
alert(message)

//Task-4

var Student;
var StudentName = "Jhone Doe"
alert(StudentName)
var StudentAge = "15 years old"
alert(StudentAge)
var StudentCourse = "Certified Mobile Application Development"
alert(StudentCourse)

//Task-5

var food = "PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P";
alert(food)


//Task-6

var email;
var email = "example@example.com";
alert("My Email address is " + email)

//Task-7

var book;
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book)

//Task-8

var display;
var display = "Yah! I can write HTML content through JavaScript"
document.write(display)

//Task-9

var thing = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”"
alert(thing)
document.write(thing)


//Chapter 3 Variable For Numbers


//Task-1

var age = "I am 15 Years Old";
alert(age)


//Task-2

for (var i = 1; i <= 13; i++)
    var message = "You have visited this site i times";
alert("You have visited this site " + i + " times")


//Task-3

var birth = "My birth year is 1990";
document.write(birth)


//Task-4

var VisitorName = "John Doe"
var ProductTitle = "T-shirt(s)"
var Quantity = "5 "
document.write(VisitorName + " ordered " + Quantity + ProductTitle + " on XYZ Clothing store")


// Chapter 4 Variable Names : Legal & Illegal


//Task-1

var name = "Muhammad Faraz Qureshi";
var age = "28 years old";
var number = "0345-2508034";
alert("my name is " + name + " Age is " + age + " my contact number is " + number)


//Task-2

var legal1 = "number";
var legal2 = "$";
var legal3 = "_";
var legal4 = "Uppercase letter (Lu)";
var legal5 = "Lowercase letter (Ll)";

var illegal1 = "break or boolean";
var illegal2 = "start with numeral";
var illegal3 = "";
var illegal4 = "";
var illegal5 = "";


//Task-3

var heading = "Rules for naming JS variables";
document.write("<b>" + heading + "</b>" + "<br> <br>")
document.write("Variable names can only contain numbers, $ , _ and . For example $my_1stVariable" + "<br>")
document.write("Variables must begin with a letter, $ or __. For example $name, _name or name" + "<br>")
document.write("Variable names are case sensitive" + "<br>")
document.write("Variable names should not be JS keywords" + "<br>")



//Chapter 5 Math Expressions


//Task-1

var a = 3;
var b = 5;
var c = a + b;
document.write("the sum of " + a + " and " + b + " is " + c)


//Task-2

var a = 3;
var b = 5;
var c = a - b;
document.write("the difference of " + a + " and " + b + " is " + c)

var a = 3;
var b = 5;
var c = a * b;
document.write("the product of " + a + " and " + b + " is " + c)


var a = 3;
var b = 5;
var c = a / b;
document.write("the div of " + a + " and " + b + " is " + c)


var a = 3;
var b = 5;
var c = a % b;
document.write("the modulus of " + a + " and " + b + " is " + c)

//Task-3

var value = 5;
document.write("Value after variable declaration is undefined " + "<br>")
document.write("Initial value: " + value + "<br>")
var value1 = value + 1;
document.write(" Value after increment is : " + value1 + "<br>")
var value2 = value1 + 7;
document.write(" Value after addition is : " + value2 + "<br>")
var value3 = value2 - 1;
document.write(" Value after decrement is : " + value3 + "<br>")
value3 = value3 / 4;
document.write(" Value is " + value3 + "<br>")
value3 = value3 % 3;
document.write(" The remainder is " + value3)


//Task-4

var ticket = 600;
document.write("Total cost to buy 5 tickets to a movie is " + 5 * ticket + "PKR")


//Task-5

var table = 5;
for (i = 1; i <= 10; i++) {
    document.write(table + "x" + i + "=" + table * i + "<br>")
}


//Task-6

var C = 25;
var F = 70;
var C1 = (F - 32) * 5 / 9;
var F1 = (C * 9 / 5) + 32;
document.write(C + " C is " + F1 + "F" + "<br>")
document.write(F + " F is " + C1 + "C")


//Task-7

var price1 = 650;
document.write("Price of item 1 is " + price1 + "<br>")
var price2 = 100;
document.write("Price of item 2 is " + price2 + "<br>")
var order1 = 3;
document.write("Quantity of item 1 is " + order1 + "<br>")
var order2 = 7;
document.write("Price of item 2 is " + order2 + "<br>")
var charges = 100;
document.write("Shipping charges " + charges + "<br>")
var totalCost = (price1 * order1) + (price2 * order2) + charges;
document.write("Total cost of your order is " + totalCost)


//Task-8

var marks = 980;
document.write("Total marks: " + marks + "<br>")
var obtained = 804;
document.write("Marks obtained: " + obtained + "<br>")
var percent = (obtained / marks) * 100;
document.write("Percentage: " + percent + "%")


//Task-9

var $ = 104.80;
var riyal = 28
var rate = (10 * $) + (25 * riyal)
document.write("Total currency in PKR: " + rate)


//Task-10

var a = 5;
document.write(((a + 5) * 10) / 2)


//Task-11

var current = 2020;
document.write("Current Year: " + current + "<br>")
var birth = 1992;
document.write("Birth Year: " + birth + "<br>")
var age = current - birth
document.write("Your Age is: " + age)


//Task-12

var pi = 3.142;
var rad = 20;
document.write("Radius of a Circle: " + rad + "<br>")
var circumference = 2 * pi * rad;
document.write("The Circumference is: " + circumference + "<br>")
var area = pi * rad * rad;
document.write("The Area is: " + area + "<br>")


//Task-13

var snack = "COCOMO";
document.write("Favourite Snack: " + snack + "<br>")
var age = 28;
document.write("Current age: " + age + "<br>")
var max_age = 50;
document.write("Estimate Maximum Age: " + max_age + "<br>")
var estimate = 2;
document.write("Amount of snacks per day: " + estimate + "<br>")
var total = (max_age - age) * 2;
document.write("You will need " + total + " cocomo to last you until the ripe old age of " + max_age)




//Chapter 6-9 Math Expressions


//Task-1

var a = 10;
document.write("Result:" + "<br>")
document.write("The value of a is : " + a + "<br>")

var a = ++a;
document.write("The value of ++a is : " + a + "<br>")
document.write("Now the value of a is : " + a + "<br>")


var a = a++;
document.write("The value of a++ is : " + a + "<br>")
document.write("Now the value of a is : 12 " + "<br>")

var a = --a;
document.write("The value of --a is : 11" + "<br>")
document.write("Now the value of a is : 11" + "<br>")


a = a--;
document.write("The value of a-- is : 11 " + "<br>")
document.write("Now the value of a is : " + a + "<br>")



//Task-2

var a = 2;
document.write("a is: " + a + "<br>")
var b = 1;
document.write("b is: " + b + "<br>")
var result = --a - --b + ++b + b--;
document.write("result is: " + result + "<br>")

// --a; 1
// --a - --b; 1 - 0 =1
// --a - --b + ++b; 1 - 0 + 1 = 2
// --a - --b + ++b +b--; 1 - 0 + 1 + 1= 3 


//Task-3

var name = prompt("whats your name");
alert("welcome " + name)


//Task-5

var j = prompt("Enter a number");
for (var i = 1; i <= 10; i++) {

    if (j > 0) {
        document.write(j + "x" + i + "=" + j * i + "<br>")
    }

    else {
        document.write("5" + "x" + i + "=" + 5 * i + "<br>")
    }
}


//Task-6

var subject1 = prompt("Enter your first subject");
document.write("Subject 1 : " + subject1 + "<br>")
var subject2 = prompt("Enter your second subject");
document.write("Subject 2 : " + subject2 + "<br>")
var subject3 = prompt("Enter your third subject");
document.write("Subject 3 : " + subject3 + "<br>")

var subjectMarks = 100;

var marks1 = prompt("Enter your first subject marks")
document.write(subject1 + " marks: " + marks1 + "<br>")
var marks2 = prompt("Enter your second subject marks")
document.write(subject2 + " marks: " + marks2 + "<br>")
var marks3 = prompt("Enter your third subject marks")
document.write(subject3 + " marks: " + marks3 + "<br>")

percent1 = (marks1 / subjectMarks) * 100;
document.write("1st subject percentage is : " + percent1 + "%" + "<br>")
percent2 = (marks2 / subjectMarks) * 100;
document.write("2nd subject percentage is : " + percent2 + "%" + "<br>")
percent3 = (marks3 / subjectMarks) * 100;
document.write("3rd subject percentage is : " + percent3 + "%" + "<br>")
overallmarks = subjectMarks * 3;
document.write("Overall marks: " + overallmarks + "<br>")
obtainedmarks = +marks1 + +marks2 + +marks3;
document.write("Obtained marks is : " + obtainedmarks + "<br>")
totalpercent = (percent1 + percent2 + percent3) / 3;
document.write("Total percentage is:  " + totalpercent + "%" + "<br>")




// Chapter 9-11      USER INPUT & CONDITIONAL STATEMENT


//Task-1

var city = prompt("Enter your City")
if (city === "karachi") {
    alert("Welcome to city of lights")
}
else {
    alert("Welcome")
}


//Task-2

var gender = prompt("Enter your gender")
if (gender === "male") {
    alert("Good Morning Sir")
}
else if (gender === "female") {
    alert("Good Morning Ma'am")
}
else {
    alert("Good Morning")

}


//Task-3

var signal = prompt("enter your traffic signal color")
if (signal === "red") {
    document.write("Must Stop")
}
else if (signal === "yellow") {
    document.write("Ready to Move")
}
else if (signal === "green") {
    document.write("Move Now")
}
else {
    document.write("Stay Calm")
}


//Task-4

var fuel = prompt("remaining fuel in car ?")
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}
else {
    alert("Ok")
}


//Task-5

// a)

var a = 4;
if (++a === 5) {
    alert
        ("given condition for variable a is true");
}

document.write("Given condition is displayed " + "<br>")


// // b)

var b = 82;
if (b++ === 83) {
    alert
        ("given condition for variable b is true");
}

document.write("Given condition is not displayed " + "<br>")


// // c)

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if
    (c === 13) {
    alert
        ("condition 2 is true");
}
if (++c < 14) {
    alert
        ("condition 3 is true");
}
if (c === 14) {
    alert
        ("condition 4 is true");
}

document.write("Condition 2 and 4 are true " + "<br>")


// // d)

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
document.write("The cost equals" + "<br>")


// // e)

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
document.write("True" + "<br>")


// // f)

if ("car" < "cat") {
    alert("car is smaller than cat");
}


document.write("Car is smaller than cat" + "<br>")



//Task-6

var subone = prompt("enter subject 1 marks")
var subtwo = prompt("enter subject 2 marks")
var subthree = prompt("enter subject 3 marks")
var totalmarks = 300;
document.write("Total Marks :" + totalmarks + "<br>")
var subject = +subone + +subtwo + +subthree;
document.write("obtained marks: " + subject + "<br>")
var percent = subject * 100 / 300;
if (percent >= 80 && percent <= 100) {
    document.write("Grade: A-one " + "<br>" + "Percentage: " + percent + "<br>" + "Remarks: Excellent")
}
else if (percent >= 70 && percent < 80) {
    document.write("Grade: A " + "<br>" + "Percentage: " + percent + "<br>" + "Remarks: Good")
}
else if (percent >= 60 && percent < 70) {
    document.write("Grade: B " + "<br>" + "Percentage: " + percent + "<br>" + "Remarks: You need to improve")
}
else if (percent < 60) {
    document.write("Grade: Fail " + "<br>" + "Percentage: " + percent + "<br>" + "Remarks: Sorry")
}
else {
    document.write("please try again")
}



//Task-7

var secret = prompt("guess the secret number 1 to 10")
if (secret == 5) {
    alert("Bingo! ")
}
else if (secret == 6) {
    alert("Close enough to the correct answer")
}
else {
    alert("Try Again")
}


//Task-8

var number = prompt("enter a Number");
if (number % 3) {
    alert("Number is not divisible by 3")
}

else {
    alert("Number is divisible by 3")

}


//Task-9

var number = prompt("enter a Number");
if (number % 2) {
    alert("Its is an odd number")
}
else if (number / 1) {
    alert("Its is an even number")
}

else {
    alert("Try again")

}


//Task-10

var temp = prompt("Enter temperture!")
if (temp >= 40 && temp < 100) {
    document.write("It is too hot outside " + "<br>")
}
else if (temp > 30 && temp < 40) {
    document.write("The wheather today is normal " + "<br>")
}
else if (temp > 20 && temp < 30) {
    document.write("The wheather today is cool " + "<br>")
}
else if (temp > 10 && temp < 20) {
    document.write("OMG! The wheather today is so cool " + "<br>")
}
else {
    document.write("write the correct temperatur ")

}



//Task-11

var val1 = prompt("enter your first value")
var sign = prompt("enter your operator")
var val2 = prompt("enter your second value")

if (sign === '+') {
    alert((+val1) + (+val2))
}

else if (sign === '-') {
    alert(val1 - val2)
}


else if (sign === '*') {
    alert(val1 * val2)
}


else if (sign === '/') {
    alert(val1 / val2)
}

else if (sign === '%') {
    alert(val1 / val2 * 100 + '%')
}




//Chapter 12-13  IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS


//Task-1

var character = prompt("enter your character");

if (character < 65) {
    alert("character is a number")
}

else if
    (character >= 65 && character <= 90) {
    alert("character is a Uppercase letter")
}


else if (character >= 97 && character <= 122) {
    alert("character is a lowercase letter")
}


//Task-2

var integer1 = prompt("Enter integer one")
var integer2 = prompt("Enter integer two")
if (integer1 > integer2) {
    alert("larger integer: " + integer1)
}
else if (integer1 < integer2) {
    alert("larger integer: " + integer2)
}
else if (integer1 == integer2) {
    alert("Both are same")
}
else {
    alert("try again")
}


//Task-3

var a = prompt("enter a number");
if (a >= 1) {
    alert("Number is positive")
}
else if (a < 0) {
    alert("Number is negative")
}
else {
    alert("Number is zero")
}


//Task-4

var character = prompt("enter your character");


if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    alert("True")
}

else {
    alert("It is not a vowel")
}


//Task-5

var pass = prompt("Please Enter your password");
var password = "java2020";
if (pass == "") {
    alert("Please Enter your password")
}
else if (pass == password) {
    alert("Correct!")
}
else {
    alert("Incorrect Password")
}


//Task-6

var greeting;
var hour = 20;
if (hour < 18) {
    alert(greeting = "Good day")
}
else {
    alert(greeting = "Good evening")
}


//Task-7

var time = prompt("enter the time");

if (time >= 0000 && time < 1200) {
    alert("Good Morning!")
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon!")
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening!")
}
else {
    alert("Good Night!")
}





//Chapter 14-16 Arrays


//Task-1

students = []
document.write(students)


//Task-2

var students = []
document.write(students)


//Task-3

var students = ["Faraz", " Ameed", " Humza"]
document.write(students)


//Task-4

var students = [1, 2, 3, 4]
document.write(students)


//Task-5

var students = [10 > 9, 9 < 10]
document.write(students)


//Task-6

var students = ["nabeel", "ahmed", 15, "umer"]
document.write(students)


//Task-7

var Qualification = ["1)SSC", "<br>", "2)HSC", "<br>", "3)BCS", "<br>", "4)BS", "<br>", "5)BCOM", "<br>", "6)MS", "<br>", "7)M.PHIL", "<br>", "8)PHD"]
document.write([Qualification])


//Task-8

var student = ["Michael", "John", "Tony"];
var score = [320, 230, 480];
var totalmarks = 500;
percent1 = (score[0] / 500) * 100;
percent2 = (score[1] / 500) * 100;
percent3 = (score[2] / 500) * 100;
document.write("Score of " + student[0] + " is " + score[0] + ". Percentage: " + percent1 + "%" + "<br>")
document.write("Score of " + student[1] + " is " + score[1] + ". Percentage: " + percent2 + "%" + "<br>")
document.write("Score of " + student[2] + " is " + score[2] + ". Percentage: " + percent3 + "%")


//Task-9

// a)

var colours = ["red", "green", "blue", "black"]
document.write(colours)

// b)

var beginningColour = prompt("Enter colour to add in the beginning")
colours.unshift("purple")
document.write(colours)

// c)

var endingColour = prompt("Enter colour to add in the ending")
colours.push("maroon")
document.write(colours)

// d)

colours.unshift("orange", "black")
document.write(colours)

// e)

colours.shift("orange")
document.write(colours)

// f)

colours.pop("maroon")
document.write(colours)

var index = prompt("Enter index to add a colour")
var Colour = prompt("which colour you want to add")


var colours1 = colours.slice(1, 1, "pink")
document.write(colours)


// g)

var index = prompt("Enter index to delete a colour")
var Colour = prompt("which colour you want to delete/remove")
var colours1 = colours.splice(1, 1, "pink")
document.write(colours)



//Task-10

var scores = [320, 230, 480, 120]
var orderedScores = [120, 230, 320, 480]
document.write("scores of Students: " + scores + "<br>")
document.write("orderedScores of Students: " + orderedScores + "<br>")


//Task-11

var citiesList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
var selectedCities = citiesList.splice(2, 2)
document.write(selectedCities)


//Task-12

var arr = ["This", "is", "my", "cat" + "<br>"]
var arr1 = arr.join(" ")
document.write(arr)
document.write(arr1)


//Task-13

var computer = ["keyboard", "mouse", "printer", "monitor"]
document.write(computer)


//Task-14

var computer = ["keyboard", "mouse", "printer", "monitor"];
var rev = computer.reverse();
document.writeln(rev);


//Task-15

var mobilePhones = ["Apple", "Samsung", "Motorola", "Nokia", "Samsung", "Haeir"]
document.write(mobilePhones)




//Chapter 17-20  Arrays and Loops



// Task-1

let array = [
    [],
    [],
    [],
    [],
    []
];

document.write(array);


// Task-2

let array = [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [1, 4],
    [0, 5],
    [1, 6],
    [2, 7],
    [2, 8],
    [1, 9],
    [0, 10],
    [1, 11],

]
console.table(array)


// Task-3

var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var counting1 = counting.join(" " + "<br>")
document.write(counting1)


// Task-4

var j = prompt("Enter a number");
var i = prompt("Enter a number lenth");
for (var k = 1; k < 20; k++) {

    if (j > 0) {
        document.write(j + "x" + k + "=" + j * k + "<br>")
    }

    else {
        document.write("Try again" + "<br>")
    }
}


// Task-5


var fruits = ["apple", "banana", "mango", "orange", "strawberry" + "<br>"]
var fruits1 = fruits.join(" " + "<br>")
document.write(fruits1)
document.write("Element at index 0 is " + fruits[0] + "<br>")
document.write("Element at index 1 is " + fruits[1] + "<br>")
document.write("Element at index 2 is " + fruits[2] + "<br>")
document.write("Element at index 3 is " + fruits[3] + "<br>")
document.write("Element at index 4 is " + fruits[4])


//Task-6


var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
document.write("Counting: " + count + "<br>")
var revcount = count.reverse()
document.write("Reverse Counting: " + revcount + "<br>")

var i;
for (var i = 0; i <= 20; i = i + 2) {
    document.write("," + i)
}

var i;
for (var i = 1; i <= 20; i = i + 2) {
    document.write("," + i)
}

var i;
for (var i = 2; i <= 20; i = i + 2) {
    document.write(" " + i + "k")
}


//Task-7

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Enter your order dear");

if (input = A) {
    document.write("Your order is available dear")
}

else {
    document.write("Your order is not available dear")
}


//Task-8

var a = [24, 53, 78, 91, 12];
document.write("Array Items: " + a + "<br>")
var a = prompt["enter a number"];
var largestNumber = [91];
if (a = largestNumber) {
    document.write("Largest number is: " + largestNumber)
}

else {
    document.write("This is not the largest number")
}


//Task-9

var a = [24, 53, 78, 91, 12];
document.write("Array Items: " + a + "<br>")
var a = prompt["enter a number"];
var smallestNumber = [12];
if (a = smallestNumber) {
    document.write("Largest number is: " + smallestNumber)
}

else {
    document.write("This is not the largest number")
}


//Task-10


var j = 5;
for (var i = 1; i <= 20; i++) {

    if (j > 0) {
        document.write(j * i + "<br>")
    }

    else {
        document.write("Try again" + "<br>")
    }
}


// Chapter # 21-25    String Methods

//   Task  1


var a = prompt("Whats your First Name?");
var b = prompt("Whats your Last Name?");

alert("Welcome " + a + " " + b)


// Task  2

var a = prompt("Whats your Favorite Mobile Model ? ");
var b = a.length
document.write("My Favorite Phone is: " + a + "<br>");
document.write("Length of String: " + b)


// Task  3


var a = "Pakistani";
var index = a.indexOf("n")
document.write("String: " + a + "<br>");
document.write("Index of 'n': " + index)


//  Task  4


var word = "Hello World"
var lastindex = word.lastIndexOf("l")
document.write("String: " + word + "<br>" + "Last Index of 'l': " + lastindex)


// Task  5


var String = "Pakistani"
var index = String.charAt(3)
document.write("String: " + String + "<br>" + "Character at Index 3: " + index)


//  Task  6


var firstname = prompt("Whats your first name")
var secondname = prompt("Whats your second name")
var res = firstname.concat(secondname);
document.write("Wellcome: " + res)


// Task  7


var city = "Hyderabad";
var citynum = city.indexOf("Hyderabad");
var firstcity = city.slice(0, citynum);
var replacingcity = "Islam";
var secondcity = city.slice(citynum + 5)
document.write("City: " + city + "<br>")
document.write("Replacing City: " + firstcity + replacingcity + secondcity)


//  Task  8


var message = "Ali and Sami are best friends. They play cricket and football together.";
var message1 = message.replace(/and/g, "&")
document.write("Message: " + message + "<br>")
document.write("Replacing Message: " + message1)


//  Task 9


var value = "472"
number = ("472")
document.write("Value: " + value + "<br>")
document.write("Type: string" + "<br>")
document.write("Value: " + number + "<br>")
document.write("Type: number" + "<br>")


//  Task  10


var input = prompt("What you Want? ")
var upperinput = input.toUpperCase()
document.write("User Input: " + input + "<br>" + "Upper Case: " + upperinput)


//  Task  11


var word = prompt("JS stand for? ")
var firstchar = word.slice(0, 1)
firstchar = firstchar.toUpperCase()
var otherchar = word.slice(1)
otherchar = otherchar.toLowerCase()
var output = firstchar + otherchar;
document.write("User Input: " + word + "<br>" + "Title Case: " + output)


//  Task  12


var num = 35.36;
var newNum = num.toString()
var result = newNum.replace(/35.36/g, "3536");
document.write("Number: " + num + "<br>" + "Result: " + result)


//  Task  13


var name = prompt("Enter a user name");
if (name = name.charCodeAt(33, 44, 46, 64)) {
    alert("Please enter a valid username")
}
else {
    alert("Wellcome")
}



//   Task  14


var order = prompt("Wellcome to Bakery..Enter your order Please ..")
order1 = order.toLowerCase()
var A = ["cake", "apple pie", "cookies", "chips", "patties"]
var index = A.indexOf(order1)
if (A[0] === order1 || A[1] === order1 || A[2] === order1 || A[3] === order1 || A[4] === order1) {

    document.write(order1 + " is available at index " + index + " in our bakery")

}
else {
    document.write(order1 + " is not available in our bakery")

}


//  Task  15


var pw = prompt("Enter a Password Here");

if (pw.length < 6) {
    alert("Password must be at least 6 characters long.");
}
else {
    alert("Greetings")
}


//  Task  16


var university = "University of Karachi";
var out = university.split("").join("<br>")
document.write(out)


//  Task  17


var userInput = prompt("Enter your name")
var lastCharacter = userInput.charAt(-1);
document.write("User Input: " + userInput + "<br>" + "Last character of input: " + lastCharacter)


//  Task  18


var message = "The quick brown fox jumps over the lazy dog"
var occurence = message.indexOf()
document.write(message + "<br>" + "There are " + occurence + " occurences of the word the")




//   Chapter 26-30   Math Methods


//  Task  01


var number = prompt("Enter a Positive Integer");
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)
document.write("Number: " + number + "<br>" + "Round of Value: " + round + "<br>" + "Floor Value: " + floor + "<br>" + "Ceil Value: " + ceil)


//  Task  02


var number = prompt("Enter a Negative Integer");
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)
document.write("Number: " + number + "<br>" + "Round of Value: " + round + "<br>" + "Floor Value: " + floor + "<br>" + "Ceil Value: " + ceil)


//  Task  03


var A = -4;
var B = 5;
var absolute = Math.abs(A)
var absolute1 = Math.abs(B)
document.write("The absolute value of -4 is " + absolute)


//  Task  04


var random = Math.random() * 6;
var round = Math.round(random);
document.write("Random dice value: " + round)


//   Task  05


var head = "Heads"
var tails = "Tails"

var toss = Math.random() * 2;

var floor = Math.floor(toss)
if (floor === 0) {
    document.write("2 " + "<br>" + "Random coin value: " + head)
}
else {
    document.write("1 " + "<br>" + "Random coin value: " + tails)
}
console.log(toss)



//   Task  06


var random = Math.random() * 100;
var round = Math.round(random);
document.write("Random Number Between 1 and 100: " + round)


//   Task  07


var weight = prompt("Enter your weight in Kilograms");
document.write("The Weight of User is: " + weight + " Kilograms")


//   Task  08


var random = 9;
var secret = +prompt("Enter a Secret Number b/w 1 to 10");

if (secret === random) {
    alert("Congratulations!")
}
else {
    alert(" Try Again!")
}



//    Chapter 31-34        Data Methods

//  Task  01


var a = new Date();
document.write(a)


//  Task  02

var a = new Date();
var b = a.getMonth();
alert(b)


const month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const d = new Date();
document.write("Current Month: " + month[d.getMonth()]);


//  Task  03


var a = new Date();
var b = a.getDay();
alert(b)

const day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const d = new Date();
document.write("Today is " + day[d.getDay()]);


//   Task  04


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
if (days !== 0 || 6) {
    document.write("Current day: " + days[d.getDay()])
}
else if (days === 0 || 6) {

    document.write("Its fun day");

}


//   Task  05


var datesNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

var d = new Date();
if (d < 16) {
    document.write("First fifteen days of the month")
}
else if (d > 15) {

    document.write("Last Fifteen days of the month");

}


//   Task  06


var date = new Date(prompt("Enter your date", "April 30,1992"));
var timemili = date.getTime();
var timemin = timemili / (1000 * 60);
var today = new Date();
document.write(today + "<br>" + "Elapsed MilliSeconds Since: " + date + " " + timemili + "<br>" + "Elapsed Minutes Since: " + date + " " + timemin)


//   Task  07

var a = new Date();
var b = a.toLocaleTimeString();
console.log(b)


//   Task  08


var date = new Date(prompt("Enter Date december 31,2020:"))
document.write("Later Date: " + date)


//   Task  09


var d = new Date("apr 25, 2020")
var dmili = d.getTime();
var accuage = dmili
var accuage1 = dmili / (1000 * 60 * 60 * 24 * 30 * 12)
var round = Math.round(accuage1)
document.write(round + " days have passed since 1st ramadan , 2020")
console.log(round)



//   Task  10


var date1 = new Date("Jan 01,2015")
var date1mili = date1.getTime();
var out1 = date1mili / (1000 * 60);
var date2 = new Date("dec 05,2015")
var date2mili = date2.getTime();
var out2 = date2mili / (1000 * 60);
var result = out2 - out1
document.write(result + " seconds had passed since beginning of 2015")
console.log(out1)
console.log(out2)


//   Task   11


var a = new Date()
var b = a.setHours(1);
var c = new Date(-b)

document.write("Current Date: " + a + "<br>" + "1 hour ago it was " + c)


//   Task  12


var a = new Date();
var d = new Date();
var pastYear = d.getFullYear() - 100;
var c = d.setFullYear(pastYear);
document.write("Current date: " + a + "<br>" + "100 years back,it was " + d)


//  Task  13


var a = new Date(prompt("Whats your age ?", "jan 01,2020"));
var out = a.getFullYear();
document.write("Your birth year is: " + out)


//  Task  14


var name = "Muhammad Faraz Qureshi";
var month = "June";
var units = 410;
var charges = 16;
var payable = units * charges;
var lateCharge = 350;
var grossPayable = payable + lateCharge;
document.write("<h1> K-Electric Bill </h1>" + "<br>" + "Customer Name: " + name + "<br>"
    + "Month: " + month + "<br>" + "No. of units: " + units + "<br>" + "Charges per units: " + charges
    + "<br>" + "<br>" + "Net amount payable (within due date): " + payable + "<br>" + "Late payment surcharge: " + lateCharge
    + "<br>" + "Gross amount payable (after due date): " + grossPayable)


// Chapter 35-38        Function


//   Task  01


var a = new Date();
function date() {
    document.write(a)
}
date();


//   Task  02


var a = prompt("Enter your first name")
var b = prompt("Enter your last name")
function name() {
    document.write("Welcome: " + a + " " + b)
}
name();


//   Task  03


var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var add = num1 + num2
function sum() {
    document.write("Sum of two number is: " + add)
}
sum();


//   Task  04

function calc(num1, opr, num2) {
    if (opr === "+") {
        return num1 + num2
    }
    else if (opr === "-") {
        return num1 - num2
    }
    else if (opr === "*") {
        return num1 * num2
    }
    else if (opr === "/") {
        return num1 / num2
    }
    else {
        return "Incorrect Operator"
    }
}

var result = calc(5, "+", 5)
var result1 = calc(4, "*", 4)
var result2 = calc(4, "$", 9)
var result3 = calc(5, "/", 9)
var result4 = calc(3, "-", 3)
document.write(result + "<br>")
document.write(result1 + "<br>")
document.write(result2 + "<br>")
document.write(result3 + "<br>")
document.write(result4 + "<br>")


//   Task  05

var a = prompt("write a number who want to square");
function square(sq) {
    sq = a * a;
    document.write("The sum of squares for numbers up to and including " + a + " is " + sq)
}
square();


//   Task  06

var n = prompt("Write a number who want to Factorial");
function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);


//   Task  07


function sum() {
    for (var a = 1; a < 100; a = a + 10) {
        for (var b = a; b < a + 10; b++) {
            document.write(b + "  " + " ");
        }

        document.write("<br>")

    }
}
sum();



//   Task  08


var base = +prompt("Enter base value")
var perp = +prompt("Enter perpendicular value")

function hyp() {

    var a = base * base;
    var b = perp * perp
    var hypot = a + b;
    document.write("Hypotenuse^2 = " + hypot)
}
hyp();


//   Task  09


var width = +prompt("Enter width value")
var height = +prompt("Enter height value")

function area() {

    var a = width * height;
    document.write("Area of the rectangle is: " + a)

}
area();


//   Task   10


var word = prompt("Enter your word");
var check = "";

function pallindrome() {
    for (var i = word.length - 1; i >= 0; i--) {
        check += word[i]
    }

    {
        document.write(word[i])
    }

    document.write(word, check)



    if (check === word) {
        document.write("<br>" + word + " is palindrome word")
    }
}
pallindrome();


//   Task  11

var message = "the quick brown fox";
function titleCase() {
    var firstchar = message.indexOf('the quick brown fox ')
    var replacing = 'The Quick Brown Fox'
    var out2 = message.slice(firstchar + 20)
    document.write("Example String: " + message + "<br>" + "Expected Output: " + replacing + out2)
}
titleCase();

//   Task  12



var str = "Web Development Tutorial"
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
findLongestWord("Web Development Tutorial");
function findLongestWord(str) {
    return str.length;
}
findLongestWord("Web Development Tutorial");
findLongestWord(str);
document.write(findLongestWord(str))



//   Task   13

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o'));



//   Task  14


var r = prompt("Enter value of Radius")
var pi = 3.142;

function calcCircumference() {

    var Circumference = 2 * pi * r;
    document.write("Circumference Of Circle: " + Circumference + "<br>");
}

calcCircumference();

function calcArea() {

    var area = pi * r * r;
    document.write("Area Of Circle: " + area)

}

calcArea();


// Chapter # 21-25    String Methods

//   Task  1


var a = prompt("Whats your First Name?");
var b = prompt("Whats your Last Name?");

alert("Welcome " + a + " " + b)


// Task  2

var a = prompt("Whats your Favorite Mobile Model ? ");
var b = a.length
document.write("My Favorite Phone is: " + a + "<br>");
document.write("Length of String: " + b)


// Task  3


var a = "Pakistani";
var index = a.indexOf("n")
document.write("String: " + a + "<br>");
document.write("Index of 'n': " + index)


//  Task  4


var word = "Hello World"
var lastindex = word.lastIndexOf("l")
document.write("String: " + word + "<br>" + "Last Index of 'l': " + lastindex)


// Task  5


var String = "Pakistani"
var index = String.charAt(3)
document.write("String: " + String + "<br>" + "Character at Index 3: " + index)


//  Task  6


var firstname = prompt("Whats your first name")
var secondname = prompt("Whats your second name")
var res = firstname.concat(secondname);
document.write("Wellcome: " + res)


// Task  7


var city = "Hyderabad";
var citynum = city.indexOf("Hyderabad");
var firstcity = city.slice(0, citynum);
var replacingcity = "Islam";
var secondcity = city.slice(citynum + 5)
document.write("City: " + city + "<br>")
document.write("Replacing City: " + firstcity + replacingcity + secondcity)


//  Task  8


var message = "Ali and Sami are best friends. They play cricket and football together.";
var message1 = message.replace(/and/g, "&")
document.write("Message: " + message + "<br>")
document.write("Replacing Message: " + message1)


//  Task 9


var value = "472"
number = ("472")
document.write("Value: " + value + "<br>")
document.write("Type: string" + "<br>")
document.write("Value: " + number + "<br>")
document.write("Type: number" + "<br>")


//  Task  10


var input = prompt("What you Want? ")
var upperinput = input.toUpperCase()
document.write("User Input: " + input + "<br>" + "Upper Case: " + upperinput)


//  Task  11


var word = prompt("JS stand for? ")
var firstchar = word.slice(0, 1)
firstchar = firstchar.toUpperCase()
var otherchar = word.slice(1)
otherchar = otherchar.toLowerCase()
var output = firstchar + otherchar;
document.write("User Input: " + word + "<br>" + "Title Case: " + output)


//  Task  12


var num = 35.36;
var newNum = num.toString()
var result = newNum.replace(/35.36/g, "3536");
document.write("Number: " + num + "<br>" + "Result: " + result)


//  Task  13


var name = prompt("Enter a user name");
if (name = name.charCodeAt(33, 44, 46, 64)) {
    alert("Please enter a valid username")
}
else {
    alert("Wellcome")
}



//   Task  14


var order = prompt("Wellcome to Bakery..Enter your order Please ..")
order1 = order.toLowerCase()
var A = ["cake", "apple pie", "cookies", "chips", "patties"]
var index = A.indexOf(order1)
if (A[0] === order1 || A[1] === order1 || A[2] === order1 || A[3] === order1 || A[4] === order1) {

    document.write(order1 + " is available at index " + index + " in our bakery")

}
else {
    document.write(order1 + " is not available in our bakery")

}


//  Task  15


var pw = prompt("Enter a Password Here");

if (pw.length < 6) {
    alert("Password must be at least 6 characters long.");
}
else {
    alert("Greetings")
}


//  Task  16


var university = "University of Karachi";
var out = university.split("").join("<br>")
document.write(out)


//  Task  17


var userInput = prompt("Enter your name")
var lastCharacter = userInput.charAt(-1);
document.write("User Input: " + userInput + "<br>" + "Last character of input: " + lastCharacter)


//  Task  18


var message = "The quick brown fox jumps over the lazy dog"
var occurence = message.indexOf()
document.write(message + "<br>" + "There are " + occurence + " occurences of the word the")




//   Chapter 26-30   Math Methods


//  Task  01


var number = prompt("Enter a Positive Integer");
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)
document.write("Number: " + number + "<br>" + "Round of Value: " + round + "<br>" + "Floor Value: " + floor + "<br>" + "Ceil Value: " + ceil)


//  Task  02


var number = prompt("Enter a Negative Integer");
var round = Math.round(number)
var floor = Math.floor(number)
var ceil = Math.ceil(number)
document.write("Number: " + number + "<br>" + "Round of Value: " + round + "<br>" + "Floor Value: " + floor + "<br>" + "Ceil Value: " + ceil)


//  Task  03


var A = -4;
var B = 5;
var absolute = Math.abs(A)
var absolute1 = Math.abs(B)
document.write("The absolute value of -4 is " + absolute)


//  Task  04


var random = Math.random() * 6;
var round = Math.round(random);
document.write("Random dice value: " + round)


//   Task  05


var head = "Heads"
var tails = "Tails"

var toss = Math.random() * 2;

var floor = Math.floor(toss)
if (floor === 0) {
    document.write("2 " + "<br>" + "Random coin value: " + head)
}
else {
    document.write("1 " + "<br>" + "Random coin value: " + tails)
}
console.log(toss)



//   Task  06


var random = Math.random() * 100;
var round = Math.round(random);
document.write("Random Number Between 1 and 100: " + round)


//   Task  07


var weight = prompt("Enter your weight in Kilograms");
document.write("The Weight of User is: " + weight + " Kilograms")


//   Task  08


var random = 9;
var secret = +prompt("Enter a Secret Number b/w 1 to 10");

if (secret === random) {
    alert("Congratulations!")
}
else {
    alert(" Try Again!")
}



//    Chapter 31-34        Data Methods

//  Task  01


var a = new Date();
document.write(a)


//  Task  02

var a = new Date();
var b = a.getMonth();
alert(b)


const month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const d = new Date();
document.write("Current Month: " + month[d.getMonth()]);


//  Task  03


var a = new Date();
var b = a.getDay();
alert(b)

const day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
const d = new Date();
document.write("Today is " + day[d.getDay()]);


//   Task  04


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
if (days !== 0 || 6) {
    document.write("Current day: " + days[d.getDay()])
}
else if (days === 0 || 6) {

    document.write("Its fun day");

}


//   Task  05


var datesNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

var d = new Date();
if (d < 16) {
    document.write("First fifteen days of the month")
}
else if (d > 15) {

    document.write("Last Fifteen days of the month");

}


//   Task  06


var date = new Date(prompt("Enter your date", "April 30,1992"));
var timemili = date.getTime();
var timemin = timemili / (1000 * 60);
var today = new Date();
document.write(today + "<br>" + "Elapsed MilliSeconds Since: " + date + " " + timemili + "<br>" + "Elapsed Minutes Since: " + date + " " + timemin)


//   Task  07

var a = new Date();
var b = a.toLocaleTimeString();
console.log(b)


//   Task  08


var date = new Date(prompt("Enter Date december 31,2020:"))
document.write("Later Date: " + date)


//   Task  09


var d = new Date("apr 25, 2020")
var dmili = d.getTime();
var accuage = dmili
var accuage1 = dmili / (1000 * 60 * 60 * 24 * 30 * 12)
var round = Math.round(accuage1)
document.write(round + " days have passed since 1st ramadan , 2020")
console.log(round)



//   Task  10


var date1 = new Date("Jan 01,2015")
var date1mili = date1.getTime();
var out1 = date1mili / (1000 * 60);
var date2 = new Date("dec 05,2015")
var date2mili = date2.getTime();
var out2 = date2mili / (1000 * 60);
var result = out2 - out1
document.write(result + " seconds had passed since beginning of 2015")
console.log(out1)
console.log(out2)


//   Task   11


var a = new Date()
var b = a.setHours(1);
var c = new Date(-b)

document.write("Current Date: " + a + "<br>" + "1 hour ago it was " + c)


//   Task  12


var a = new Date();
var d = new Date();
var pastYear = d.getFullYear() - 100;
var c = d.setFullYear(pastYear);
document.write("Current date: " + a + "<br>" + "100 years back,it was " + d)


//  Task  13


var a = new Date(prompt("Whats your age ?", "jan 01,2020"));
var out = a.getFullYear();
document.write("Your birth year is: " + out)


//  Task  14


var name = "Muhammad Faraz Qureshi";
var month = "June";
var units = 410;
var charges = 16;
var payable = units * charges;
var lateCharge = 350;
var grossPayable = payable + lateCharge;
document.write("<h1> K-Electric Bill </h1>" + "<br>" + "Customer Name: " + name + "<br>"
    + "Month: " + month + "<br>" + "No. of units: " + units + "<br>" + "Charges per units: " + charges
    + "<br>" + "<br>" + "Net amount payable (within due date): " + payable + "<br>" + "Late payment surcharge: " + lateCharge
    + "<br>" + "Gross amount payable (after due date): " + grossPayable)


// Chapter 35-38        Function


//   Task  01


var a = new Date();
function date() {
    document.write(a)
}
date();


//   Task  02


var a = prompt("Enter your first name")
var b = prompt("Enter your last name")
function name() {
    document.write("Welcome: " + a + " " + b)
}
name();


//   Task  03


var num1 = +prompt("Enter first number")
var num2 = +prompt("Enter second number")
var add = num1 + num2
function sum() {
    document.write("Sum of two number is: " + add)
}
sum();


//   Task  04

function calc(num1, opr, num2) {
    if (opr === "+") {
        return num1 + num2
    }
    else if (opr === "-") {
        return num1 - num2
    }
    else if (opr === "*") {
        return num1 * num2
    }
    else if (opr === "/") {
        return num1 / num2
    }
    else {
        return "Incorrect Operator"
    }
}

var result = calc(5, "+", 5)
var result1 = calc(4, "*", 4)
var result2 = calc(4, "$", 9)
var result3 = calc(5, "/", 9)
var result4 = calc(3, "-", 3)
document.write(result + "<br>")
document.write(result1 + "<br>")
document.write(result2 + "<br>")
document.write(result3 + "<br>")
document.write(result4 + "<br>")


//   Task  05

var a = prompt("write a number who want to square");
function square(sq) {
    sq = a * a;
    document.write("The sum of squares for numbers up to and including " + a + " is " + sq)
}
square();


//   Task  06

var n = prompt("Write a number who want to Factorial");
function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);


//   Task  07


function sum() {
    for (var a = 1; a < 100; a = a + 10) {
        for (var b = a; b < a + 10; b++) {
            document.write(b + "  " + " ");
        }

        document.write("<br>")

    }
}
sum();



//   Task  08


var base = +prompt("Enter base value")
var perp = +prompt("Enter perpendicular value")

function hyp() {

    var a = base * base;
    var b = perp * perp
    var hypot = a + b;
    document.write("Hypotenuse^2 = " + hypot)
}
hyp();


//   Task  09


var width = +prompt("Enter width value")
var height = +prompt("Enter height value")

function area() {

    var a = width * height;
    document.write("Area of the rectangle is: " + a)

}
area();


//   Task   10


var word = prompt("Enter your word");
var check = "";

function pallindrome() {
    for (var i = word.length - 1; i >= 0; i--) {
        check += word[i]
    }

    {
        document.write(word[i])
    }

    document.write(word, check)



    if (check === word) {
        document.write("<br>" + word + " is palindrome word")
    }
}
pallindrome();


//   Task  11

var message = "the quick brown fox";
function titleCase() {
    var firstchar = message.indexOf('the quick brown fox ')
    var replacing = 'The Quick Brown Fox'
    var out2 = message.slice(firstchar + 20)
    document.write("Example String: " + message + "<br>" + "Expected Output: " + replacing + out2)
}
titleCase();

//   Task  12



var str = "Web Development Tutorial"
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
findLongestWord("Web Development Tutorial");
function findLongestWord(str) {
    return str.length;
}
findLongestWord("Web Development Tutorial");
findLongestWord(str);
document.write(findLongestWord(str))



//   Task   13

function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o'));



//   Task  14


var r = prompt("Enter value of Radius")
var pi = 3.142;

function calcCircumference() {

    var Circumference = 2 * pi * r;
    document.write("Circumference Of Circle: " + Circumference + "<br>");
}

calcCircumference();

function calcArea() {

    var area = pi * r * r;
    document.write("Area Of Circle: " + area)

}

calcArea();



// Chapter 38-42     FUNCTIONS, switch statements, while… do-while loops


//   Task  01

var a = prompt("Enter value of base")
var b = prompt("Enter value of power")
function myFunction() {
    var z = Math.pow(a, b);
    document.write("Base value is: " + a + " and Power value is: " + b + "<br>")
    document.write("The result is: " + z)
}
myFunction()


//   Task  02

var a = prompt("Enter a year")

function leapYear(a) {
    return (a % 100 === 0) ? (a % 400 === 0) : (a % 4 === 0);
}

document.write(a + " is Leap Year: " + leapYear(a))


//   Task  03


var a = +prompt('Enter value of triangle side1: ');
var b = +prompt('Enter value of triangle side2: ');
var c = +prompt('Enter value of triangle side3: ');

function triangle(area) {
    var s = (a + b + c) / 2
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    document.write(
        "The Area of Triangle with side length " + a + ", " + b + " and " + c + " is: " + area)
}

triangle()


//    Task  04


var marks1 = +prompt("Enter marks of subject 1")
var marks2 = +prompt("Enter marks of subject 2")
var marks3 = +prompt("Enter marks of subject 3")
function Marks() {

    document.write("Subject 1 Marks = " + marks1 + "<br>" + "Subject 2 Marks = " + marks2 + "<br>" + "Subject 3 Marks = " + marks3 + "<br>")
}




function Average() {

    var Average = (marks1 + marks2 + marks3) / 3
    document.write("Average Marks: " + Average + "<br>")
}


function percent() {
    var totalMarks = 300;
    var marksObtained = marks1 + marks2 + marks3
    var percent = (marksObtained / totalMarks) * 100
    document.write("Percentage: " + percent + " %" + "<br>")
}


function mainFunction() {
    Marks()
    Average()
    percent()

}

mainFunction()


//   Task   05



function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;

    for (var x = 0; x < str1.length; x++) {
        if (vowel_list.indexOf(str1[x]) !== -1) {
            vcount += 1;
        }

    }
    return vcount;
}
document.write("Vowel Count: " + vowel_count("Web And Mobile Hybrid Application"));



//    Task   06


var strings = ["Web and Mobile Applications"];

Vowels = strings.map(function (string) {
    return string.replace(/[aeiouAEIOU]/g, '');
});
document.write("Original: " + strings + "<br>" + "Replace vowels: " + Vowels)


//   Task   07



function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;

    for (const letter of str.toLowerCase()) {
        switch (letter) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                {
                    if (haveSeenVowel) {
                        count++;
                        haveSeenVowel = false;
                    } else {
                        haveSeenVowel = true;
                    }
                    break;
                }
            default:
                haveSeenVowel = false
        }
    }
    return count
}

console.log(findOccurrences());




//        Task 8


var Km = +prompt("Enter distance between two cities in Km")

function Meter() {
    var m = Km * 1000;
    document.write("KiloMeter: " + Km + "<br>" + "Meter: " + m + "<br>")
}

Meter()

function Feet() {
    var ft = Km * 3281;
    document.write("Feet: " + ft + "<br>")
}

Feet()

function Inches() {
    var In = Km * 39370;
    document.write("Inches: " + In + "<br>")
}

Inches()


function Centimeters() {
    var Cm = Km * 1000000;
    document.write("Centimeters: " + Cm + "<br>")
}

Centimeters()





//        Task 9


var hours = + prompt("Enter hours of working");
var earning = 12 * hours;

function overTime() {
    if (hours > 39) {
        document.write("OverTime Earning of an Employee: " + earning + " Rupees")
    }
    else if (hours < 40) {
        document.write("Work atleast 40 hours to get an overtime pay")
    }
}

overTime()




//           Task 10


function currencyDenomination() {
    var amount = +prompt("Enter cash (in hundreds) ");
    var ten = amount / 100;
    var tenRound = Math.floor(ten)
    var fifty = (amount % 100) / 50;
    var fiftyRound = Math.floor(fifty)
    var hundred = (((amount % 100) % 50) / 10);
    var hundredRound = Math.floor(hundred)
    var remaining = (((amount % 100) % 50) % 10);
    var remainingRound = Math.floor(remaining)

    document.write("Required notes of Rs. 100  :  ", tenRound + "<br>");
    document.write("Required notes of Rs. 50   :  ", fiftyRound + "<br>");
    document.write("Required notes of Rs. 10   :  ", hundredRound + "<br>");
    document.write("Amount still remaining Rs. :  ", remainingRound + "<br>");

}


currencyDenomination()


// Chapter 43-48                   Events


//    Task 01


function mobile() {
    alert("Mobile Phone LookUp")
}


//    Task  02


function car1() {
    alert("Thanks for Purchasing")
}


//    Task   03


function dltBtn() {
    var name = document.getElementById("name")
    name.remove()
}


//    Task   04


function bigImg(x) {
    x.style.height = "640px";
    x.style.width = "640px";
}

function normalImg(x) {
    x.style.height = "320px";
    x.style.width = "320px";
}


//    Task   05


var clicks = 0;
function helloUp() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}
function helloDown() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}




// Chapter 49-52                  Events



//     Task  01


function sign() {
    document.write("Your Form is Submitted")
}



//     Task   02 


function readMore() {
    var text = "Samsung S9 is a very stylish smartphone. it has many features which are as follows : 1) it is no 1 brand in Asia. 2) it has soo manu quality features."
    var para = document.getElementById("para")
    para.innerHTML = text
}

readMore()


//     Task  03


function dltBtn() {
    var name = document.getElementById("name")
    name.remove()
}


function editBtn() {
    var name = document.getElementById("name")
    name.innerHTML = ""
}



// Chapter 53-58                  Events



//     Task    01


function showimage(e) {
    var modalImg = document.getElementById("modalImg")
    modalImg.src = e.src
}


//     Task   02


function zoomIn() {
    document.getElementById("para").style.fontSize = "28px"
}

function zoomOut() {
    document.getElementById("para").style.fontSize = "8px"
}




// Chapter 58-67                  DOM



////////QUESTION NO 1 //////////

var myList = document.getElementById("main-content")


///////POINT  NO  2///////  

var myList = document.getElementById("main-content")
var b = document.getElementsByTagName('div')

console.log(b)

////////   POINT NO 2 ///////


var myList = document.getElementById("main-content")
var b = document.getElementsByClassName("content")
var c = "content".innerHTML;
console.log(c)

var myList = document.getElementById("main-content")
var p = document.getElementsByClassName("content")
var c = p.innerHTML;

console.log(c)



/////////  POINT NO 3 /////////

var input = document.getElementById("first-name")
input.value = "Alex"


//////// point no 4 //////////           

var input = document.getElementById("last-name")
input.value = "Bank"


var input = document.getElementById("email")
input.value = "alexbank@example.com  "



/// QUESTION NO 2 ///

//// POINT NO 1 //////


var d = document.getElementById("form-content");
d.nodeType

console.log(d)



//// POINT NO 2 //////


var type = document.getElementById("lastName")
type.nodeType

console.log(type)

var child = document.getElementById("lastName")
child.childNodes
var childNodes = child.innerHTML;

console.log(childNodes)


//// POINT NO 3 //////


var childUpdate = document.getElementById("lastName")
childUpdate.childNodes
var childNoes = childUpdate.innerHTML;

console.log(childNoes)

//// POINT NO 4 //////

var firstChildId = document.getElementById("main-content")
firstChildId.firstChild

console.log(firstChildId)



var lastChildId = document.getElementById("main-content")
lastChildId.lastChild

console.log(lastChildId)


//// POINT NO 5 //////

var getSibling = document.getElementById("lastName").nextSibling
console.log(getSibling)



var getSiblingPre = document.getElementById("lastName").previousSibling
    / console.log(getSiblingPre)


//// POINT NO 6 //////


var getParentNote = document.getElementById("email").parentNode
console.log(getParentNote)


var getNoteType = document.getElementById("email").nodeType
console.log(getNoteType)