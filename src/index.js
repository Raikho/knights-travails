import './style.css'
import DOM from './dom.js'
import Board from './board.js'
import Tree from './tree.js'

// add board squares
DOM.createSquares(document.getElementById('board'));
let board = new Board();
board.setKnight(7,7);
board.setTarget(8,2);

let tree = new Tree(board.knight, board.target);
let solution = tree.solution;

for (let i = 1; i < solution.length - 1; i++) {
    board.setOutline(solution[i][0], solution[i][1]);
}

for (let child of tree.knight.children) {
    break;
    board.setOutline(child.x, child.y);
    // console.log(child);
    for (let child2 of child.children) {
        board.setOutline(child2.x, child2.y);
        for (let child3 of child2.children) {
            board.setOutline(child3.x, child3.y);
        }
    }
}


// Attributions
// <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Chess icons created by apien - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/target" title="target icons">Target icons created by Creative Stall Premium - Flaticon</a>