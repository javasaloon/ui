window.onload = function() { 
	var para = document.createElement("p");
	getNodeInfo(para);

	var txt = document.createTextNode("This is ");
	para.appendChild(txt);

	var em = document.createElement("em");
	para.appendChild(em);
	txt = document.createTextNode(" my ");
	em.appendChild(txt);

	txt = document.createTextNode("content");
	para.appendChild(txt);

	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para); 
} 

function getNodeInfo (node) {
	var info = "nodeName: ";
	info += node.nodeName;
	info += " nodeType: ";
	info += node.nodeType;
	console.log(info);
	return info;
}
