"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
const collection_1 = require("../collection");
class Queue extends collection_1.Collection {
    constructor(capacity = Infinity) {
        super();
        this.capacity = capacity;
    }
    enqueue(item) {
        if (this.isFull()) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }
    dequeue() {
        return this.storage.shift();
    }
    isFull() {
        return this.capacity === this.size();
    }
    reduceCapacity() {
        this.dequeue();
        this.capacity--;
    }
}
exports.Queue = Queue;
//# sourceMappingURL=queue.js.map