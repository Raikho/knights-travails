class Node {
    constructor(coords, parent) {
        this.x = coords[0];
        this.y = coords[1];
        this.parent = parent;
        this.children = [];
    }
}

export default class Tree {
    static moves = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];

    constructor(knight, target) {
        let lastChild = this.findTarget(new Node(knight), new Node(target));

        this.solution = [];
        let child = lastChild;
        while (child.parent) {
            this.solution.unshift([child.x, child.y]);
            child = child.parent;
        }
        this.solution.unshift([child.x, child.y,]);
    }

    findTarget(start, end) {
        let queue = [start];
        while (queue.length) {
            let node = queue.shift();
            for (let move of Tree.moves) {
                let child = new Node([node.x+move[0], node.y+move[1]], node);

                if (child.x < 1 || child.x > 8 || child.y < 1 || child.y > 8)
                    continue;
                if (child.x == end.x && child.y == end.y)
                    return child;
                node.children.push(child);
                queue.push(child);
            }
        }
        return;
    }
}