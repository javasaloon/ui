/*
There are three kinds of objects in JavaScript:
• User-defined objects created from scratch by the programmer. We won’t be
dealing with these in this book.
• Native objects like Array, Math, and Date, which are built in to JavaScript.
• Host objects that are provided by the browser.
*/

// window object
// The most fundamental of these is the window object.
// The window object is nothing less than a representation of the browser window itself.
// The properties and methods of the window object are often referred to as the Browser Object Model.

// document object
// The object that handles the contents of a web page is the document object.
// The most important convention used by the DOM is the representation of a document as a tree.
// More specifically, the document is represented as a family tree. parent, children, siblings.

// Nodes 

// Element nodes 
// The tag provides the name of an element. Paragraph elements have the name p.
// Elements can contain other elements. All the list item elements in our document are contained within an unordered list element.
// In fact, the only element that isn’t contained within another element is the <html> element. It’s the root of our node tree.

// Text nodes
// On the Web, where content is king, most content is provided by text. 
// In XHTML, text nodes are always enclosed within element nodes. But not all elements contain text nodes.

// Attribute nodes
// Attributes are used to give more specific information about an element.
// Because attributes are always placed within opening tags, attribute nodes are always contained within element nodes.
// Not all elements contain attributes, but all attributes are contained by elements.

// Getting Elements by ID, tag name, and class name
console.log (typeof document.getElementById("purchases")); // object
console.log (typeof document.getElementsByTagName("li").length); // object 
console.log (document.getElementsByTagName("li").length);
console.log (document.getElementsByTagName("*").length); // wildcard symbol (the asterisk)

var shopping = document.getElementById("purchases");
var items = shopping.getElementsByTagName("*"); // apply to one element node object
console.log (items.length);  

// A welcome addition to the HTML5 DOM (http://www.whatwg.org/specs/web-apps/current-work/) is the getElementsByClassName method.
var shopping = document.getElementById("purchases");
var sales = shopping.getElementsByClassName("sale");
console.log (sales.length);  

// getAttribute/setAttribute
// Unlike the other methods you’ve seen in this chapter, you can’t use getAttribute/setAttribute on the document object. 
// It can be used on only an element node object.

var paras = document.getElementsByTagName("p");
for (var i=0; i< paras.length; i++) {
	var title_text = paras[i].getAttribute("title");
	if (title_text) { // if (something) is a shorthand way of writing if (something != null)
		// The condition of the if statement will be true if something exists. It will be false if something doesn’t exist.
		console.log(title_text);
	}
}

var shopping = document.getElementById("purchases");
shopping.setAttribute("title","a list of goods");
console.log(shopping.getAttribute("title"));

