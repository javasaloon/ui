function displayAbbreviations() {
	if (!checkDomMethods()) return false;

	var defs = getAbbreviations();
	var dlist = createDefinitionList(defs);

	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);

	document.body.appendChild(dlist);
}

function createDefinitionList(defs) {
	var dlist = document.createElement("dl");
	for (key in defs) {
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	return dlist;
}

function getAbbreviations() {
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length < 1) return false;
	var defs = new Array();
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}

	return defs;
}

function displayCitations() {
	var quotes = document.getElementsByTagName("blockquote");
	for (var i = 0; i < quotes.length; i++) {
		if (!quotes[i].getAttribute("cite")) continue;
		var url = quotes[i].getAttribute("cite");
		var elem = getLastChildElement(quotes[i]);
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href", url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		elem.appendChild(superscript);
	}
}

function getAccesskeys() {
	var links = document.getElementsByTagName("a");
	var akeys = new Array();
	for (var i = 0; i < links.length; i++) {
		var current_link = links[i];
		if (!current_link.getAttribute("accesskey")) continue;
		var key = current_link.getAttribute("accesskey");
		var text = current_link.lastChild.nodeValue;
		akeys[key] = text;
	}
	return akeys;
}

function createAccesskeyList(akeys) {
	var list = document.createElement("ul");
	for (key in akeys) {
		var text = akeys[key];
		var str = key + ": " + text;
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}
	return list;
}
function displayAccesskeys() {
	if (!checkDomMethods()) return false;
	var akeys = getAccesskeys();
	var list = createAccesskeyList(akeys);
	
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}
 
addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys);