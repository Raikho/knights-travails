const DOM = {};

DOM.createSquares = function(parentNode) {
    for (let i = 8; i >= 1; i--) {
        for (let j = 1; j <= 8; j++) {
            let node = document.createElement('div');
            node.classList.add('square');
            node.dataset.x = j;
            node.dataset.y = i;

            if((i % 2) === (j % 2))
                node.classList.add('dark');

            // node.textContent = `${node.dataset.x}, ${node.dataset.y}`
            parentNode.appendChild(node);
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

export default DOM;