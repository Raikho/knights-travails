import './style.css'
import DOM from './dom.js'
import Board from './board.js'


// add board squares
let boardNode = document.getElementById('board');
DOM.createSquares(document.getElementById('board'));
let board = new Board();


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

// setKnight(2,4);
// setTarget(8,3);

board.setKnight(4,5);
board.setTarget(7,8);

class Node {
    constructor(coords) {
        this.x = coords[0];
        this.y = coords[1];
        this.children = [];
    }
}

class Tree {
    constructor(knightCoords, targetCoords) {
        this.moves = [[2,1],[1,2],[-1,2],[-2,1],
                      [-2,-1],[-1,-2],[1,-2],[2,-1]];
        this.start = new Node(knightCoords);
        this.end = new Node(targetCoords);
        this.children = [];
        this.createChildren();
    }
    createChildren() {
        for (let move of this.moves) {
            let x = this.start.x + move[0];
            let y = this.start.y + move[1];
            if (x < 1 || x > 8 || y < 1 || y > 8)
                continue;
            this.children.push([x,y]);
        }
        // console.log(this.children);
    }
}

let tree = new Tree([2,4], [8,3]);
for (let child of tree.children) {
    //setOutline(child[0], child[1]);
}

// Attributions
// <a href="https://www.flaticon.com/free-icons/chess" title="chess icons">Chess icons created by apien - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/target" title="target icons">Target icons created by Creative Stall Premium - Flaticon</a>