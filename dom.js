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



