/**
 * Implementation of stack using Array as internal storage.
 */
class Stack {
    constructor() {
        this.stack = []
    }

    push(value) {
        if (this.stack) {
            this.stack.push(value);
        }
    }

    pop() {
        if (this.stack.length > 0) {
            this.stack.pop();
        }
    }

    peek() {
        return this.stack[this.stack.length - 1];
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
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.pop();
stack.pop();
console.log("After Poping:")
console.log(stack)

/**
 * Output
 undefined
peek value:  8
Stack { stack: [] }
After Poping:
Stack { stack: [ 4, 5, 6 ] }
 */