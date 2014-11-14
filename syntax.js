// This is one sentence comments
/* 
	this is block comments 
*/

var name; // this is how varible is defined
var NAME; // varible is case sensitive

// js is weakly typed language
name = "Jacky"; // This is a string literal
var age = 20; // this is a number literal
age = "tweenty" // this is leagal because js does not care whether age is string or number 

// Type in JS. 
// Strings
var mood = 'happy'; // '' is OK
mood = "happy"; // "" is also OK
mood = "don't ask"; // ' in "" is OK
mood = 'don\' ask'; // you have to escaping like this
mood = "don't \" "; // similar
console.log(mood);

// Numbers
var price = 10.5; // float
var temperature = -10.9; // negative 

// Boolean true or false
var sleeping = true;

// Arrays
var beatles = new Array(5); 
beatles = new Array(); // or []
beatles[0] = "John"; // index starts from 0

beatles = Array("John", "Paul", "George");
beatles = ["John", "Paul", "George"]; // this is also OK
console.log(beatles.length);

var mixture = ["John", 90, false];

var arrayElement = [];
arrayElement[0] = mixture;

arrayElement[0][0]; // is "John"

// associative array. 
var namedIndex = [];
namedIndex["name"] = "Jacky";
namedIndex["age"] = 20;
/*
This is called an associative array. It’s much more readable than a numeric array because you can
use strings instead of numbers, but they're actually considered bad form and we recommend that you
don’t use them. The reason for this is that when you create an associative array, you're actually creating
properties on the Array object. In JavaScript, all variables are really objects of some type. A boolean is a
Boolean object. An array is an Array object, and so on. In this example you are giving the lennon array
new name, year and living properties. Ideally you don't want to be modifying the properties of the Array
object. Instead, you should be using a generic Object.
*/

// Operations
var number = 1 + 3 * 5 - 6 / 5;
console.log (number);
var string = "I am feeling" + " happy " + 100; // join strings
string += "%"; 

// Conditional statements
if (true) {

} else {

}

// Comparison operators > < >= <= == !=

var a = false;
var b = "";
if (a == b) {
	console.log("a == b is true because empty string is regarded as false ");
}

if (a !== b) {
	console.log(" a === b is not true when do the strict Comparison of both the value and type ");
}

// Logical operators && || ! 
var num = 6;
if (num > 5 && num < 10 || num == -1 || !(num ==0)) {};

// Looping statements
while (true) {
	if(num < 100) {
		num++;
		continue;
	}	
	break;
}

do {

} while (false);

for (var i = mixture.length - 1; i >= 0; i--) {
	console.log(mixture[i]);
};

// Functions

function hello (argument) {
	console.log("hello " + argument);
	return "OK";
};

hello("Jacky");
// build-in Functions alert()
// http://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm
var num = Math.round(num);
console.log(num);
var current_date = new Date();
var today = current_date.getDay();
console.log(today);

// Variable scope: global or local
// A global variable can be referenced from anywhere in the script.
// A local variable exists only within the function in which it is declared. 
// If you use var within a function, the variable will be treated as a local variable.
// If you don’t use var, the variable will be treated as a global variable.

// Objects, An object is a self-contained collection of data. This data comes in two forms: properties and methods
var lennon = Object();
lennon.name = "Jacky";
lennon.age = 20;

var lennon = {name:"Jacky", age:20}; // more compact curly-brace {} syntax

/*
Host objects
Native objects aren’t the only kind of premade objects that you can use in your scripts. Another kind of
object is supplied not by the JavaScript language itself, but by the environment in which it’s running. In
the case of the Web, that environment is the web browser. Objects that are supplied by the web browser
are called host objects.
Host objects include Form, Image, and Element. These objects can be used to get information about
forms, images, and form elements within a web page.
*/