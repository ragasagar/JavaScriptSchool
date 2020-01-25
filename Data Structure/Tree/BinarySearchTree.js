class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null
    }

    insert(value){
        let newNode = new Node(value);
        if(this.root === null){
            this.root = newNode
        }else{
            let currentNode = this.root
            while(true){
                if(value < currentNode.data){
                    if(currentNode.left === null){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else{
                    if(currentNode.right === null){
                        currentNode.right  = newNode;
                        return this;
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }

    lookup(value){
        if(this.root === null){
            return undefined;
        }
        else{
            let currentNode = this.root;
            while(currentNode){
                if(currentNode.data === value){
                    return(true);
                }
                else if(value < currentNode.data){
                    currentNode = currentNode.left;
                }else{
                    currentNode = currentNode.right;
                }
            }
            return undefined;
        }
    }

}
function traverse(root){
    if(root){
        traverse(root.left);
        console.log(root.data);
        traverse(root.right);
    }
}

let bst = new BinarySearchTree();
bst.insert(4);
bst.insert(9);
bst.insert(5);
bst.insert(3);
bst.insert(1);
bst.insert(2);
bst.insert(10);
bst.insert(11);
console.log(bst.lookup(5));
console.log(bst.lookup(90));
traverse(bst.root);

/**
 * Output:
true
undefined
1
2
3
4
5
9
10
11
 */