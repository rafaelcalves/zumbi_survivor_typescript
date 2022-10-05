import { Survivor } from "./survivor";

export class Game{
    protected players: Array<Survivor>;
    constructor(){
        this.players = [];
    }

    addPlayer(player:Survivor){
        if(this.hasDuplicate(player))
            throw new Error("Can't add duplicated player")
        this.players.push(player);
    }

    private hasDuplicate(player: Survivor):boolean {
        for (const survivor of this.players) {
            if(survivor.equals(player))
                return true;
        }
        return false;
    }

    hasLivingPlayers(){
        for (const player of this.players) {
            if(!player.isAlive())
                return true;
        }
    }
}