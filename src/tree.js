class Node {
    constructor(coords) {
        this.x = coords[0];
        this.y = coords[1];
        this.parent = null;
        this.children = [];
    }
}

export default class Tree {
    constructor(knight, target) {
        this.moves = [[2,1],[1,2],[-1,2],[-2,1],
                     [-2,-1],[-1,-2],[1,-2],[2,-1]];
        this.knight = new Node(knight);
        this.target = new Node(target);

        this.createChildren(this.knight);
    }

    createChildren(node) {
        for (let move of this.moves) {
            let x = node.x + move[0];
            let y = node.x + move[1];
            if (x < 1 || x > 8 || y < 1 || y > 8)
                continue;
            node.children.push(new Node([x,y]));
        }
    }
}