
window.onload = function() {
	console.clear();
	console.log("The URL contains tutorialspoint");
	console.log('Page load completed !');
	console.log("Enhancing Page View");
	
	document.getElementById("rightbar").remove();
	document.getElementsByClassName('topgooglead')[0].remove();
	document.getElementsByClassName('bottomgooglead')[0].remove();
	document.getElementsByClassName('col-md-2')[0].style.marginLeft ='-10px';
	document.getElementsByClassName('col-md-7')[0].style.width='77%';
	document.body.style.zoom = "110%";
};
