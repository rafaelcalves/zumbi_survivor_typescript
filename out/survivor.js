"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Survivor = void 0;
const queue_1 = require("./collections/impls/queue");
const level_1 = require("./level");
class Survivor {
    constructor(name) {
        this.name = name;
        this.wounds = 0;
        this.actions = 3;
        this.equips = new queue_1.Queue(5);
        this.experience = 0;
        this.level = level_1.Level.Blue;
    }
    kill() {
        this.experience++;
        if (this.experience % 6 === 0)
            this.level++;
    }
    getLevel() {
        return this.level;
    }
    getHurt() {
        this.wounds++;
        this.equips.reduceCapacity();
    }
    isAlive() {
        return this.wounds < 2;
    }
    executeAction() {
        if (!this.hasActions())
            throw new Error("No actions available");
        this.actions--;
        if (this.actions < 0)
            this.actions = 0;
    }
    hasActions() {
        return this.actions > 0 && this.isAlive();
    }
    pickUp(equip) {
        if (!this.equips.isFull())
            this.equips.enqueue(equip);
    }
    getName() {
        return this.name;
    }
    equals(survivor) {
        if (survivor === undefined)
            return false;
        return survivor.getName() === this.name;
    }
}
exports.Survivor = Survivor;
//# sourceMappingURL=survivor.js.map