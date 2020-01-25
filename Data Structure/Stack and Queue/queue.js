/**
 * Represent node class to build linkedlist.
 */
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
/**
 * Represent the implementaion of queue using linkedlist
 */
class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = null;
    }

    /**
     * Remove rear element from the queue.
     */
    dequeue() {
        if (this.front === this.rear && this.front) {
            this.front = this.rear = null;
        }
        if (this.front) {
            this.front = this.front.next;
        }
        this.length--;
    }

    /**
     * Get the front element from the queue.
     */
    peek() {
        if (this.front) {
            return this.front.data;
        }
        return undefined;
    }

    /**
     * Add element to the front of the queue.
     * @param {*} data 
     */
    enqueue(data) {
        let newnode = new Node(data);
        if (!this.front) {
            this.front = newnode;
            this.rear = newnode;
        }
        else {
            this.rear.next = newnode
            this.rear = newnode;
        }
        this.length++;
    }
    print() {
        let temp = this.front;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

queue = new Queue();
console.log(queue.peek());
queue.enqueue(34);
queue.enqueue(8);
console.log("peek value: ", queue.peek());
queue.dequeue();
queue.dequeue();
console.log(queue);
queue.print();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.print();
queue.dequeue();
queue.dequeue();
queue.enqueue(80);
console.log("After Dequeue:")
queue.print();
console.log(queue);

/**
 * Output:
 *
undefined
peek value:  34
Queue { front: null, rear: null, length: 0 }
4
5
6
7
8
After Dequeue:
6
7
8
80
Queue {
  front: Node { data: 6, next: Node { data: 7, next: [Node] } },
  rear: Node { data: 80, next: null },
  length: 4 }
 */
