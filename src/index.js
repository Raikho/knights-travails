import './style.css'

// add board squares
let boardNode = document.getElementById('board');
for (let i = 8; i >= 1; i--) {
    for (let j = 1; j <= 8; j++) {
        let node = document.createElement('div');
        node.classList.add('square');
        node.dataset.x = i;
        node.dataset.y = j;

        if((i % 2) === (j % 2))
            node.classList.add('dark');

        node.textContent = `${i} ${getLetter(j)}`; // DEBUG
        boardNode.appendChild(node);
    }
}

function getLetter(num) {
    return String.fromCharCode(97 + num);
}

function clearKnights() {
    for (let node of document.querySelectorAll('.knight'))
        node.classList.remove('knight');
}

function setKnight(x, y) {
    let node = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    node.classList.add('knight');
}

clearKnights();
setKnight(2,2);

// Attributions
// <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Chess icons created by apien - Flaticon</a>