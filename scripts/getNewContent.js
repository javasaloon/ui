function getNewContent() {
	var request = getHTTPObject();
	if (request) {
		request.open("GET", "example.txt", true);
		request.onreadystatechange = function() {
			if (request.readyState == 4) {
				// • 0 for uninitialized
				// • 1 for loading
				// • 2 for loaded
				// • 3 for interactive
				// • 4 for complete
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};
		request.send(null);
	} else {
		console.log('Sorry, your browser doesn\'t support XMLHttpRequest');
	}
}
addLoadEvent(getNewContent);