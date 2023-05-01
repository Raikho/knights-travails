import './style.css'
import DOM from './dom.js'
import Board from './board.js'
import Tree from './tree.js'

// add board squares
DOM.createSquares(document.getElementById('board'));
let board = new Board();
board.setKnight(4,6);
board.setTarget(7,8);

let tree = new Tree(board.knight, board.target);
for (let child of tree.knight.children) {
    board.setOutline(child.x, child.y);
}

// Attributions
// <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Chess icons created by apien - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/target" title="target icons">Target icons created by Creative Stall Premium - Flaticon</a>