const container = document.querySelector(".container");

let grid = [];
let defaultSize = 16;

for (let i = 0; i < defaultSize; i++) {
	grid[i] = [];
	for (let j = 0; j < defaultSize; j++) {
		grid[i].push(document.createElement("div"));
		grid[i][j].classList.add("grid");
		container.append(grid[i][j]);
	}
}

const btn = document.querySelector(".start");
btn.addEventListener("click", chooseSize);

function chooseSize() {
	let size = defaultSize;
	do {
		size = window.prompt("Choose the size of the grid 16-100", 16);
		size = parseInt(size);
	} while (size >= 100);

	console.log(size);
	reGrid(size);
}

function reGrid(size) {
	const divs = document.querySelectorAll(".grid");
	for (let div of divs) {
		div.remove();
	}

	for (let i = 0; i < size; i++) {
		grid[i] = [];
		for (let j = 0; j < size; j++) {
			grid[i].push(document.createElement("div"));
			grid[i][j].classList.add("grid");
			grid[i][j].style.flexBasis = 1 / size;
			container.append(grid[i][j]);
		}
	}
}
