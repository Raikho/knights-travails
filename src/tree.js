class Node {
    constructor(coords, parent) {
        this.x = coords[0];
        this.y = coords[1];
        this.parent = parent;
        this.children = [];
    }
    get inBounds() {
        return (this.x < 1 || this.x > 8 || this.y < 1 || this.y > 8) ? false : true;
    }
    isTouching(node) {
        return (this.x === node.x && this.y === node.y) ? true : false;
    }
}

export default class Tree {
    constructor(knight, target) {
        this.moves = [[2,1],[1,2],[-1,2],[-2,1],
                     [-2,-1],[-1,-2],[1,-2],[2,-1]];
        this.knight = new Node(knight);
        this.target = new Node(target);

        // find target by creating tree
        this.lastChild = this.findTarget(this.knight, this.target);

        // get array;
        this.solution = [];
        let child = this.lastChild;
        while (child.parent) {
            this.solution.unshift([child.x, child.y,]);
            child = child.parent;
        }
        this.solution.unshift([child.x, child.y,]);

        console.log('knight: ', this.knight);
        console.log('last child: ', this.lastChild);
        console.log('solution: ', this.solution);
    }

    findTarget(start, end) {
        let queue = [start];
        while (queue.length) {
            let node = queue.shift();
            for (let move of this.moves) {
                let child = new Node([node.x+move[0], node.y+move[1]], node);

                if (!child.inBounds)
                    continue;
                if (child.isTouching(end))
                    return child;

                node.children.push(child);
                queue.push(child);
            }
        }
        return;
    }
}