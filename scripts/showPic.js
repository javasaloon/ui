function showPic(whichpic) { 
	var placeholder = document.getElementById("placeholder");
	if (!placeholder) return false; 
	var source = whichpic.getAttribute("href");
	placeholder.setAttribute("src", source); 

	var description = document.getElementById("description");
	if (!description) return false;
	var text = whichpic.getAttribute("title");
	text = text ? text : "";
	if (description.firstChild.nodeType == 3) { // text
		description.firstChild.nodeValue = text;
	}
	return true;
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	console.log(body_element.childNodes.length);
}


function prepareGallery() {
	// By just adding this one line, you can be sure that older browsers won’t choke on your code. 
	// This is ensuring backward compatibility. 
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;

	var gallery = document.getElementById("imagegallery"); // narrow the scope you search for the elements
	if (!gallery) return false;

	var links = gallery.getElementsByTagName("a"); // cache the find result to make sure it find elements only once

	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function() { // downgrade gracefully
			// Now if showPic is successful and returns true, we return false and the link won’t be followed by the browser.
			// If showPic returns false then we assume that the image wasn't updated and return true to allow the default action to occur.
			return !showPic(this);
		}; 
	}
}

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

addLoadEvent(prepareGallery);