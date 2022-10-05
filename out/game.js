"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    constructor() {
        this.players = [];
    }
    addPlayer(player) {
        if (this.hasDuplicate(player))
            throw new Error("Can't add duplicated player");
        this.players.push(player);
    }
    hasDuplicate(player) {
        for (const survivor of this.players) {
            if (survivor.equals(player))
                return true;
        }
        return false;
    }
    hasLivingPlayers() {
        for (const player of this.players) {
            if (!player.isAlive())
                return true;
        }
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map