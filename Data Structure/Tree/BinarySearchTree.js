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

    delete(value){
        this.deleteNode(this.root, value);
    }

    deleteNode(root, value){
        if(root === null){
            return root;
        }
        else{
            if(value < root.data){
                root.left = this.deleteNode(root.left, value);
            }
            else if(value > root.data){
                root.right = this.deleteNode(root.right, value);
            }
            else{
                // console.log(root.data);
                // if the left child is null, copy the right child and paste it in root node.
                if(root.left === null){
                    let temp = root.right;
                    root = null;
                    return temp;
                }
                // if the right child is null, copy the left child and paste it in root node.
                else if (root.right === null){
                    let temp = root.left;
                    root = null;
                    return temp;
                }
            
                //if the node has both child , find the min node from the right node.
                let temp = this.minNode(root.right);
                root.data = temp;
                root.right = this.deleteNode(root.right, temp);

            }
        }
        return root;
    }

    minNode(root){
        // console.log(root.data);
        let temp = root;
        while(temp.left != null){
            temp = temp.left;
        }
        return temp.data;
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
bst.delete(9);
bst.delete(4);
traverse(bst.root);

/**
 * Output:
true
undefined
1
2
3
5
10
11
 */