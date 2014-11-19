
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

// lastChild return last node instead of element it could be element or textnode
// that is why we need to implement the getLastChildElement
function getLastChildElement(element) {
	var children = element.getElementsByTagName('*');
	if (children.length < 1) return false;
	return children[children.length - 1]; 
}

function checkDomMethods(){
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	return true;
}

// the DOM hasn’t provided a method called insertAfter
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
