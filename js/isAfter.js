function isAfter(domObj1, domObj2){
	var htmlTags = document.getElementsByTagName("*");
	var htmlArray = Array.prototype.slice.call(htmlTags);
	if(htmlArray.indexOf(domObj1) > htmlArray.indexOf(domObj2)){
		return true;
	} else {
		return false;
	}
}