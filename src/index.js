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

function clearKnight() {
    for (let node of document.querySelectorAll('[data-type="knight"]'))
        node.dataset.type = '';
}

function setKnight(x, y) {
    let prevKnight = document.querySelector('[data-type="knight"]');
    if (prevKnight)
        prevKnight.dataset.type = '';

    let node = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    node.dataset.type='knight';
}

function setTarget(x, y) {
    let node = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    node.dataset.type='target';
}

function setOutline(x, y) {
    let node = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    node.dataset.type='outline';
}

clearKnight();
setKnight(2,2);
setKnight(2,3);
setKnight(2,1);
setTarget(2,3);
setOutline(3,3);

// Attributions
// <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Chess icons created by apien - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/target" title="target icons">Target icons created by Creative Stall Premium - Flaticon</a>