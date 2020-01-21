class Array {
    constructor() {
        this.data = {}
        this.length = 0;
    }

    get(index) {
        return this.data[index];
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
    }

    pop() {
        const data = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return data;
    }

    delete(index) {
        const data = this.data[index];
        this.shiftBackward(index);
        return data;
    }

    shiftBackward(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length--;
    }

    insert(data, index) {
        this.length++;
        this.shiftForward(index);
        this.data[index] = data;
    }

    shiftForward(index) {
        var temp = this.data[index];
        for (let i = index; i < this.length - 1; i++) {
            let temp2 = this.data[i + 1];
            this.data[i + 1] = temp;
            temp = temp2;
        }
    }

    shift() {
        this.delete(0);
    }

    unshift(value) {
        this.insert(value, 0);
    }
}


let list = new Array();
list.push("Hello");
list.push("from");
list.push("other");
list.push("side");
list.pop();
list.delete(2);
list.insert("hi", 0);
list.insert("of", 2)
list.unshift("Champions");
console.log(list);
list.shift();
console.log(list);

/*
Output:
Array {
  data:
   { '0': 'Champions',
     '1': 'hi',
     '2': 'Hello',
     '3': 'of',
     '4': 'from' },
  length: 5 }
Array {
  data: { '0': 'hi', '1': 'Hello', '2': 'of', '3': 'from' },
  length: 4 }
*/