import './style.css'
import DOM from './dom.js'
import Board from './board.js'
import Tree from './tree.js'

DOM.createSquares(document.getElementById('board'));
let board = new Board();

function getRandomInt() {
    return Math.trunc(Math.random()*8) + 1
}

function setRandomPieces(board) {
    let knightX = getRandomInt();
    let targetX = getRandomInt();
    while (targetX == knightX)
        targetX = getRandomInt();

    board.setKnight(knightX, getRandomInt());
    board.setTarget(targetX, getRandomInt());
}

function drawSolution(board) {
    let tree = new Tree(board.knight, board.target);
    let solution = tree.solution;
    for (let i = 1; i < solution.length - 1; i++)
        board.setOutline(solution[i][0], solution[i][1]);
}

setRandomPieces(board);
drawSolution(board);

// Attributions
// <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Chess icons created by apien - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/target" title="target icons">Target icons created by Creative Stall Premium - Flaticon</a>