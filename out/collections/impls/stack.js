"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
const collection_1 = require("../collection");
class Stack extends collection_1.Collection {
    constructor(capacity = Infinity) {
        super();
        this.capacity = capacity;
    }
    push(item) {
        if (this.isFull()) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }
    pop() {
        return this.storage.pop();
    }
    peek() {
        return this.storage[this.size() - 1];
    }
    isFull() {
        return this.capacity === this.size();
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map