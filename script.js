const changeModeButton = document.getElementById("changeModeButton");
const links = document.getElementsByClassName("links");

for (let i = 0; i < links.length; i++) {
	links[i].onmouseover = function() {
		links[i].style.animation = "linksAnim 1s";
	}

	links[i].onmouseout = function() {
		links[i].style.animation = "none";
	}
}

changeModeButton.onclick = function() {
	if (document.body.style.color != "whitesmoke") {
		document.body.style.backgroundColor = "rgb(30, 30, 30)"
		document.body.style.color = "whitesmoke"

		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "rgb(30, 30, 30)";

			links[i].onmouseover = function() {
				links[i].style.animation = "darkLinksAnim 1s";
			}
		}
	} else {
		document.body.style.backgroundColor = "white"
		document.body.style.color = "rgb(30, 30, 30)"

		for (let i = 0; i < links.length; i++) {
			links[i].style.color = "white";

			links[i].onmouseover = function() {
				links[i].style.animation = "linksAnim 1s";
			}
		}
	}
}