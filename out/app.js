"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const level_1 = require("./level");
const survivor_1 = require("./survivor");
console.log("teste");
let jack = new survivor_1.Survivor("Jack");
console.log(jack);
let count = 0;
while (jack.getLevel() !== level_1.Level.Red) {
    jack.kill();
    console.log(jack);
    console.log(++count);
}
//# sourceMappingURL=app.js.map