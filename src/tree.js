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
        for (let child of this.knight.children)
            this.createChildren(child);
    }

    createChildren(node) {
        for (let move of this.moves) {
            let x = node.x + move[0];
            let y = node.y + move[1];
            if (x < 1 || x > 8 || y < 1 || y > 8)
                continue;

            if (x == this.knight.x && y == this.knight.y)
                continue;
            if (x == this.target.x && y == this.target.y)
                continue;

            let dx = Math.abs(this.target.x - node.x) - Math.abs(this.target.x - x);
            let dy = Math.abs(this.target.y - node.y) - Math.abs(this.target.y - y);
            //console.log(`knight ${x},${y} | dx: ${dx} | dy: ${dy} | closer: ${(dx>0||dy>0)}`);
            if (!(dx>0 || dy>0) || dx<=-2 || dy <=-2)
                continue;

            node.children.push(new Node([x,y]));
        }
    }
}