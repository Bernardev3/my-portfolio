const changeModeButton = document.getElementById("changeModeButton");

changeModeButton.onclick = function() {
	if (document.body.style.color != "whitesmoke") {
		document.body.style.backgroundColor = "rgb(30, 30, 30)"
		document.body.style.color = "whitesmoke"
	} else {
		document.body.style.backgroundColor = "white"
		document.body.style.color = "rgb(30, 30, 30)"
	}
}