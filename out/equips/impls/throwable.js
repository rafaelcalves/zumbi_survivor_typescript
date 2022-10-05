"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trhowable = void 0;
const equip_1 = require("../equip");
class Trhowable extends equip_1.Equip {
    attack() {
        throw new Error("Method not implemented.");
    }
}
exports.Trhowable = Trhowable;
//# sourceMappingURL=throwable.js.map