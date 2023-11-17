game = document.getElementById("game");
console.log(game);

function openGame(url) {
	game.src = url;
	console.log(url);
}
function newTab() {
	window.open(game.src, "_blank");
}
