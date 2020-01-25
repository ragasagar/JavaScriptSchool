/**
 * Queue implementation using array as internal storage.
 */
class Queue {
    constructor() {
        this.queue = []
    }

    enqueue(value) {
        if (this.queue) {
            this.queue.push(value);
        }
    }

    dequeue() {
        if (this.queue.length > 0) {
            this.queue.shift();
        }
    }

    peek() {
        return this.queue[0];
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
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.dequeue();
queue.dequeue();
console.log("After dequeueing:");
console.log(queue);

/**
 * Output
 undefined
peek value:  34
Queue { queue: [] }
After dequeueing:
Queue { queue: [ 6, 7, 8 ] }
 */