import './style.css'

// add board squares
let boardNode = document.getElementById('board');
for (let i = 8; i >= 1; i--) {
    for (let j = 1; j <= 8; j++) {
        let node = document.createElement('div');
        node.classList.add('square');
        if((i % 2) === (j % 2))
            node.classList.add('dark');
        node.textContent = `${i},${j}`; // DEBUG
        boardNode.appendChild(node);
    }
}
