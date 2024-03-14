const changeModeButton = document.getElementById("changeModeButton");

changeModeButton.onclick = function() {
	if (document.body.style.color != "rgb(252, 248, 255)") {
		document.body.style.backgroundColor = "rgb(30, 24, 36)";
		document.body.style.color = "rgb(252, 248, 255)";
	} else {
		document.body.style.backgroundColor = "rgb(252, 248, 255)";
		document.body.style.color = "rgb(30, 24, 36)";
	}
}