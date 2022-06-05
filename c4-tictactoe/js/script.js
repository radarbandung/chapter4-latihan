const boxElements = document.querySelectorAll('.box');
const resetButton = document.getElementById('reset');

const circle = "circle";
const cross = "cross";

let isCirclePlayer_Turn = false;

startGame();
resetButton.addEventListener('click', startGame);

function startGame() {
	isCirclePlayer_Turn = true;
	boxElements.forEach(box => {
		box.classList.remove(circle);
		box.classList.remove(cross);
    box.removeEventListener('click', handleCellClick)
		box.addEventListener('click', handleCellClick, { once: true });
	})
}

function handleCellClick(e) {
	const boxClick = e.target;
	const currentClass = isCirclePlayer_Turn ? cross : circle
	placeMark(boxClick, currentClass);
	swapTurns();
}

function placeMark(box, currentClass) {
	box.classList.add(currentClass);
}

function swapTurns() {
	isCirclePlayer_Turn = !isCirclePlayer_Turn;
}