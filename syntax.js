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
alert(mood);

// Numbers
var price = 10.5; // float
var temperature = -10.9; // negative 

// Boolean true or false
var sleeping = true;

// Arrays
var beatles = Array(5); 
beatles = Array(); // or []
beatles[0] = "John"; // index starts from 0

beatles = Array("John", "Paul", "George");
beatles = ["John", "Paul", "George"]; // this is also OK

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

// Objects
var lennon = Object();
lennon.name = "Jacky";
lennon.age = 20;

var lennon = {name:"Jacky", age:20}; // more compact curly-brace {} syntax

// Operations



