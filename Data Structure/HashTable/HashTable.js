/** 
 * HashTable is implementation of HashTable DataStructure. Same implementation is in Java(HashMap)
 * Dict(python)..
 * To set the value, the hashfunction generate the memory location and save the data in that
 * memory location. The linkedlist is uses to solve the hash collision.
 * To get the data, the hash funcion first calcualte the memory localtiona and retrive it.
 */
class HashTable {
    constructor(length) {
        this.data = new Array(length);
    }

    /**
     * Hash function to calculate the memory location.
     * @param {*} key 
     */
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) + i) % this.data.length;
        }
        return hash;
    }
    /**
     * Set Method to add key and value in HashTable.
     * @param {*} key 
     * @param {*} value 
     */
    set(key, value) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        else {
            let isUpdated = false;
            for (let i = 0; i < this.data[address].length; i++) {
                if (this.data[address][i][0] === key) {
                    this.data[address][i][1] = value;
                    isUpdated = true;
                }
            }
            if (isUpdated) return this.data;
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    /**
     * Method to get respective value for keys present in hash table.
     * @param {*} key 
     */
    get(key) {
        const address = this._hash(key);
        if (this.data[address]) {
            for (let list of this.data[address]) {
                if (list[0] === key) {
                    return list[1];
                }
            }
        }
        return undefined;
    }
    /**
     * Method to get all keys present in the hashtable.
     */
    keys() {
        const keysArray = [];
        for (let list of this.data) {
            if (list) {
                for (let data of list)
                    keysArray.push(data[0]);
            }
        }
        return keysArray;
    }
}

hashTable = new HashTable(22);
hashTable.set("sagar", 6709);
hashTable.set("sagar", 098098);
hashTable.set("sundhar", 09809);
hashTable.set("shanti", "98709890");
hashTable.set("zebra", 09098);
console.log(hashTable.get("sagar"));
console.log(hashTable.get("shtretanti"));
console.log(hashTable.keys());
console.log(hashTable);