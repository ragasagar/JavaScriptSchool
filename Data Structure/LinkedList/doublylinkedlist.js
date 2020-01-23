/**
 * This class Represent the individual linkedlist node.
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class FirstLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head
        this.length = 1;
    }

    /**
     * Add value to end of linkedlist.
     * @param {*} value 
     */
    append(value) {
        const newnode = new Node(value);
        if (!this.head) {
            this.head = newnode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newnode;
            newnode.prev = this.tail;
            this.tail = newnode;
        }
        this.length++;
    }
    /**
     * Add value at the beginning of linkedlist.
     * @param {*} value 
     */
    prepend(value) {
        const newnode = new Node(value);
        newnode.next = this.head;
        this.head.prev = newnode;
        this.head = newnode;
        this.length++;
    }

    /**
     * Add value at the specific position of linkedlist
     * @param {*} index 
     * @param {*} value 
     */
    insert(index, value) {
        const newnode = new Node(value);
        if (index > this.length) {
            this.tail.next = newnode;
            this.tail = newnode;
        } else if (index == 0) {
            newnode.next = this.head;
            this.head = newnode;
        } else {
            let currentNode = this.head;
            let counter = 0
            while (counter < index - 1) {
                currentNode = currentNode.next;
                counter++;
            }
            let follower = currentNode.next
            newnode.next = follower;
            follower.prev = newnode;
            newnode.prev = currentNode;
            currentNode.next = newnode;
        }
        this.length++;

    }

    /**
     * Delete the specific node at the given index.
     * @param {*} index 
     */
    deleteNode(index) {
        if (index > this.length) {
            return;
        }
        else if (index === 0) {
            this.head = this.head.next;
        }
        else {
            let currentNode = this.head;
            let counter = 0;
            while (counter < index - 1) {
                currentNode = currentNode.next;
                counter++;
            }
            if (currentNode.next != null){
                let follower = currentNode.next.next;
                let deleteNode = currentNode.next;
                deleteNode.prev = null;
                deleteNode.next = null;
                currentNode.next = follower;
                follower.prev = currentNode;
            }   
            else {
                currentNode.next = null;
            }
            this.length--;
        }
    }
    print() {
        let temp = this.head
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }

    }
}

linkedlist = new FirstLinkedList(2);
linkedlist.append(8);
linkedlist.insert(0, 88);
linkedlist.append(888);
linkedlist.prepend(34);
linkedlist.insert(2, 780);
linkedlist.insert(4, 990);
linkedlist.prepend(9090);
linkedlist.deleteNode(4);
linkedlist.print();
console.log(linkedlist);

/**
 * Output:
9090
34
88
780
990
8
888
FirstLinkedList {
  head:
   Node {
     data: 9090,
     next: Node { data: 34, next: [Node], prev: [Circular] },
     prev: null },
  tail:
   Node {
     data: 888,
     next: null,
     prev: Node { data: 8, next: [Circular], prev: [Node] } },
  length: 7 }  */
