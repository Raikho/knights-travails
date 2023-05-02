const DOM = {};

DOM.createSquares = function(parentNode) {
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            let node = createDiv(parentNode);
            node.classList.add('square');
            node.dataset.x = j;
            node.dataset.y = i;
            if((i % 2) === (j % 2))
                node.classList.add('dark');
        }
    }
}

DOM.addClickCallback = function(callback) {
    for (let node of document.querySelectorAll('.square'))
        node.addEventListener('click', callback);
}

DOM.removeClickCallback = function(callback) {
    for (let node of document.querySelectorAll('.square'))
        node.removeEventListener('click', callback);
}

DOM.writeSolution = function(solution) {
    let node = document.getElementById('results-container')
    clearNode(node);
    for (let i = 0; i < solution.length; i++) {
        let x = solution[i][0];
        let y = solution[i][1];
        let label = (i == 0) ? 'Start' : `Move ${i}`;
        createDiv(node, `${label}: [${toLetters(x)}${y}]`);
    }
}

function createDiv(parentNode, text) {
    let node = document.createElement('div');
    node.textContent = text;
    parentNode.appendChild(node);
    return node;
}

function clearNode(node) {
    while (node.hasChildNodes())
        node.removeChild(node.firstChild);
}

function toLetters(num) {
    return String.fromCharCode(96 + num);
}

export default DOM;