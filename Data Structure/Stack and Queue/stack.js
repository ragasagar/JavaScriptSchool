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
 * Represent the implementaion of stack using linkedlist
 */
class Stack {
    constructor() {
        this.top = null;
        this.buttom = null;
        this.length = null;
    }

    /**
     * Remove top element from the stack.
     */
    pop() {
        if (this.top === this.buttom && this.top) {
            this.top = this.buttom = null;
        }
        if (this.top) {
            this.top = this.top.next;
        }
        this.length--;
    }

    /**
     * Get the top element from the stack.
     */
    peek() {
        if (this.top) {
            return this.top.data;
        }
        return undefined;
    }

    /**
     * Add element to the top of the stack.
     * @param {*} data 
     */
    push(data) {
        let newnode = new Node(data);
        if (!this.top) {
            this.top = newnode;
            this.buttom = newnode;
        }
        else {
            newnode.next = this.top;
            this.top = newnode;
        }
        this.length++;
    }
    print() {
        let temp = this.top;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

stack = new Stack();
console.log(stack.peek());
stack.push(34);
stack.push(8);
console.log("peek value: ", stack.peek());
stack.pop();
stack.pop();
console.log(stack);
stack.print();
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.print();
stack.pop()
console.log("After Poping:")
stack.print();

/**
 * Output:
 *
undefined
peek value:  8
Stack { top: null, buttom: null, length: 0 }
8
7
6
5
4
After Poping:
7
6
5
4
 */
